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


// Fetching User regid 
var url = window.location.search;
var query = url.substr(1);
var result = {};
var cnt = 0;
var userRegID;
query.split("&").forEach(function(part) {
	var item = part.split("=");
	result[item[0]] = decodeURIComponent(item[1]);
	
	if(cnt==0)
		userRegID = result[item[0]]
	cnt++;
});
console.log(userRegID +" is userRegID")



//Firebase Configurartion
var s=firebase.initializeApp(firebaseConfig);
console.log(s);
var database=firebase.database();

var ref3 = firebase.database().ref('AddQuestions');
	ref3.on('value',function(snapshot3){
		var temp3 = snapshot3.val();
		var keys3 = Object.keys(temp3);
		var score=0;
		for(var k = 0 ; k<keys3.length;k++)
			{
					id = keys3[k];
					var question  = temp3[id].question;
					var answer = temp3[id].answer;
					var option1 = temp3[id].option1;
					var option2 = temp3[id].option2;
					var option3 = temp3[id].option3;
					var option4 = temp3[id].option4;
				$( ".mainDiv" ).append("<form class='questionForm' id='q1' data-question='1'>"+
					"<h3>"+question+"</h3>"+
					"<ul>"+
						"<li><input type='radio' name='q1' value='"+option1+"' />"+option1+"</li>"+
						"<li><input type='radio' name='q1' value='"+option2+"' />"+option2+"</li>"+
						"<li><input type='radio' name='q1' value='"+option3+"' />"+option3+"</li>"+
					"<li><input type='radio' name='q1' value='"+option4+"' />"+option4+"</li>"+
						"</ul>"+
		"</form>");
	}
});



function display()
{
	var ele=document.getElementsByName('q1');
	var score=0;
	for(var i=0;i<ele.length;i++)
	{
		if(ele[i].checked)
		console.log(ele[i].value);
	}
	ref3.on('value',function(snapshot3){
		var temp3 = snapshot3.val();
		var keys3 = Object.keys(temp3);
		score = 0;
		for(var k = 0 ; k<keys3.length;k++)
		{
			id = keys3[k];
			var question  = temp3[id].question;
			var answer = temp3[id].answer;
			var option1 = temp3[id].option1;
			var option2 = temp3[id].option2;
			var option3 = temp3[id].option3;
			var option4 = temp3[id].option4;
			
			for(var i=0;i<ele.length;i++)
			{
				if(ele[i].checked)
				{
					console.log('elemenet :' +ele[i].value +"  answer : "+answer);
					if(ele[i].value==answer)
					{
						score++;
					}
				}
			}
		}
		console.log('score is '+score);
	});
	

	//Adding Aptitude score to Firebase Database
	var ref=database.ref('Scores');
	ref.child(userRegID).set({
		aptitude_score: score
	});

}
		


