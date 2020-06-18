//Firebase Object config 
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

//Firebase Configurartion
var s=firebase.initializeApp(firebaseConfig);
var database=firebase.database();

var ref = firebase.database().ref('Scores');

ref.on('value',function(snapshot){
		var temp = snapshot.val();
		var keys = Object.keys(temp);
        
		for(var k = 0; k<keys.length; k++)
		{
            id = keys[k];
            var aptitude_score  = temp[id].aptitude_score;
            var personality_score = temp[id].personality_score;
            var cv_score = temp[id].cv_score
            var weighted_score = parseInt(aptitude_score) + parseInt(personality_score) + parseInt(cv_score);
            var above_score = 9;

            //Ref for fetch name and email of candidate
            var name ;
            var email;
            var ref2 =  firebase.database().ref('candidate/'+id);
            var cnt = 0;
            ref2.once('value',function(snapshot2){
              var temp2 = snapshot2.val();

              if(temp2 == null) {
                name = "";
                email = "";
              } else {
                name = temp2.name;
                email = temp2.email;
              }

              var x = document.getElementById("candidate").rows[cnt].cells;
              x[0].innerHTML = name;
              x[1].innerHTML = email
              cnt++;
              
            });
            
            if(weighted_score > above_score){
              $(".candidate").append("<tr>"+
              "<td>"+name+"</td>"+
              "<td>"+email+"</td>"+
              "<td>"+id+"</td>"+
              "<td>"+aptitude_score+"</td>"+
              "<td>"+cv_score+"</td>"+
              "<td>"+personality_score+"</td>"+
              "<td>"+weighted_score+"</td>"+
              "</tr>");
            }
		}
});


