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
  
  var ref3 = firebase.database().ref('AddQuestions');
  ref3.on('value',function(snapshot3){
    var temp3 = snapshot3.val();
    var keys3 = Object.keys(temp3);
    
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
                    "<li><input type='radio' name='q1' value='a' />"+option1+"</li>"+
                    "<li><input type='radio' name='q1' value='b' />"+option2+"</li>"+
                    "<li><input type='radio' name='q1' value='c' />"+option3+"</li>"+
                    "<li><input type='radio' name='q1' value='d' />"+option4+"</li>"+
                  "</ul>"+
				  
                "</form>");

    }
  });
function display()
{
	var ele=document.getElementsByName('q1');
	for(var i=0;i<ele.length;i++)
	{
		if(ele[i].checked)
			//document.getElemetById("result").innerHTML="Ans"+ele[i].value;
			console.log(ele[i].value);
	}
}

  console.log("Appended");