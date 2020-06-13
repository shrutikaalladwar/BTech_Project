// JavaScript Document
fileButton.addEventListener('change',function(e){										  
	for(var i=0;i<=e.target.files.length;i++){										  
	var pdffile=e.target.files[i];
	var storageRef=firebase.storage().ref("pdf"+pdffile.name);
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
	});
	}
});