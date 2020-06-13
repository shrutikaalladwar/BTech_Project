firebase.auth().onAuthStateChanged(function(user) 
{
  if (user) 
  {
    // User is signed in.

    
    document.getElementById("name-header15-1n").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
    //  document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
	 console.log(email_id);
	 window.alert("welcome");

    }

  } else {
    // No user is signed in.

    document.getElementById("email-header15-1n").style.display = "none";
    document.getElementById("name-header15-1n").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email-header15-1n").value;
  var userPass = document.getElementById("name-header15-1n").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
// JavaScript Document