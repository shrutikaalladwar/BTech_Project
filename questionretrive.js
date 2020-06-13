// JavaScript Document

(function(){
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCzaICYOJj5cpQXYRkA8WAh6YsphJUr_p0",
    authDomain: "file-fddfc.firebaseapp.com",
    databaseURL: "https://file-fddfc.firebaseio.com",
    projectId: "file-fddfc",
    storageBucket: "file-fddfc.appspot.com",
    messagingSenderId: "540482365901",
    appId: "1:540482365901:web:1d3bdd5199add9eb553c84",
    measurementId: "G-GB41KLYL53"
};
firebase.initializeApp(config);

var userDataRef = firebase.database().ref("AddQuestions").orderByKey();
userDataRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();              // childData will be the actual contents of the child

      var question = childSnapshot.val().question;
      var option1 = childSnapshot.val().option1;
	  var option2 = childSnapshot.val().option2;
	  var option3 = childSnapshot.val().option3;
	  var option4 = childSnapshot.val().option4;
	  var answer = childSnapshot.val().answer;
	  
      document.getElementById("q1").innerHTML = question;
      document.getElementById("option11").innerHTML = option1;
	  document.getElementById("option12").innerHTML = option2;
	  document.getElementById("option13").innerHTML = option3;
	  document.getElementById("option14").innerHTML = option4;
	  document.getElementById("ans1").innerHTML = answer;
  });
});
 }());