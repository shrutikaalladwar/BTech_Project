var firebaseConfig = {
    apiKey: "AIzaSyCzaICYOJj5cpQXYRkA8WAh6YsphJUr_p0",
    authDomain: "file-fddfc.firebaseapp.com",
    databaseURL: "https://file-fddfc.firebaseio.com",
    projectId: "file-fddfc",
    storageBucket: "file-fddfc.appspot.com",
    messagingSenderId: "540482365901",
    appId: "1:540482365901:web:1d3bdd5199add9eb553c84",
    measurementId: "G-GB41KLYL53"
  };
  var s=firebase.initializeApp(firebaseConfig);
  console.log(s);
	var database=firebase.database();
	
	var pdffile ;
	

//Event handle to store pdf uploaded in the variable called pdffile
window.onload=function(){	
var fileToRead = document.getElementById('fileButton');
fileToRead.addEventListener("change", function(event) {					  									  
		pdffile=event.target.files[0];
		console.log("File Added"+pdffile);
});
}



//This Function gets call when submit button is clicked
function butcli() {

  	//Finding reference of database
  	var ref=database.ref('User1');
	
    email = document.getElementById("email-header15-1o").value;
	name = document.getElementById("name-header15-1o").value;
	phoneno = document.getElementById("phone-header15-1o").value;

		//If email is not provided , then dont store it in database
		if(email) {
			// Adding Pdf to firebase storage
			var storageRef=firebase.storage().ref(email);
			var task=storageRef.put(pdffile);
			task.on('state_changed',function progress(snapshot)
			{
				var percentage=snapshot.bytesTransferred/snapshot.totalBytes * 100;
				console.log("upload is:"+percentage +"Done");
				switch(snapshot.state)
				{
						case firebase.storage.TaskState.PAUSED:
								console.log("upload is paused");
								break;
						case firebase.storage.TaskState.RUNNING:
								console.log("upload is running");
								break;
				}
			},function(error) {
					console.log(error);
			},function()  { 
					task.snapshot.ref.getDownloadURL().then( 
					function(downloadURL)  { 
						console.log('File available at', downloadURL); 
						console.log(downloadURL); 
						var URL=downloadURL;

						//Adding to database
						firebase.database().ref('candidate/'+ phoneno).set({
    							name: name,
							    email: email,
							    phoneno : phoneno
						  });
						
						//Redirect to another page
						location.replace("Registration_successful.html");
				}); 
				console.log(URL);
			});
		} else {
				console.log("Please provide Email id");
		}
}


