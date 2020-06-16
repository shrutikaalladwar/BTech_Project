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
        
        console.log(keys);
		for(var k = 0; k<keys.length; k++)
		{
            id = keys[k];
            var aptitude_score  = temp[id].aptitude_score;
            var personality_score = temp[id].personality_score;
            var cv_score = temp[id].cv_score

            console.log("id:"+id +" aptitude:"+aptitude_score+" personality:"+personality_score+" cv:"+cv_score);
		}
});
