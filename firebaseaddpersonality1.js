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

var ref3 = firebase.database().ref('AddPersonality');
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
						"<li><input type='radio' id='a"+id+"' name='q1' value='"+option1+"' />"+option1+"</li>"+
						"<li><input type='radio' id='b"+id+"' name='q1' value='"+option2+"' />"+option2+"</li>"+
						"<li><input type='radio' id='c"+id+"' name='q1' value='"+option3+"' />"+option3+"</li>"+
					"<li><input type='radio' id='d"+id+"' name='q1' value='"+option4+"' />"+option4+"</li>"+
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
            var answer1 = temp3[id].answer1;
            var answer2 = temp3[id].answer2;
			var option1 = temp3[id].option1;
			var option2 = temp3[id].option2;
			var option3 = temp3[id].option3;
			var option4 = temp3[id].option4;
			console.log('id :'+id);
	
			var x1 = document.getElementById("a"+id).checked;
			var x2 = document.getElementById("b"+id).checked;
			var x3 = document.getElementById("c"+id).checked;
			var x4 = document.getElementById("d"+id).checked;


			var answer_from_user ;
			if(x1==true){
				answer_from_user = document.getElementById("a"+id).value;
			} else if(x2==true){
				answer_from_user = document.getElementById("b"+id).value;
			} else if(x3==true){
				answer_from_user = document.getElementById("c"+id).value;
			} else if(x4==true){
				answer_from_user = document.getElementById("d"+id).value;
			} else{
				answer_from_user = ""
			}

			console.log('answer from user :'+answer_from_user+" answer from db:"+answer1);
			if(answer1 == answer_from_user || answer2 == answer_from_user){
				score++;
			}
		}
		console.log('score is '+score);
	});
	

    //Adding Personality score to Firebase Database
    var refnew=database.ref('Scores').child(userRegID);
	var data = {};
	refnew.once("value").then(function(snapshot) {
		data = snapshot.val();

		if(data["aptitude_score"]==undefined)
			aptitude_score = 0;
		else 
			aptitude_score = data["aptitude_score"]
		
		if(data["cv_score"]==undefined)
			cv_score = 0;
		else
			cv_score = data["cv_score"]
	
		refnew = database.ref('Scores');
		refnew.child(userRegID).set({
			aptitude_score : aptitude_score,
			personality_score : score,
			cv_score : cv_score
		});

		location.replace("Thank_you.html");

		}, function (error) {
		console.log("Error: " + error.code);
	});
    
	
}
		


