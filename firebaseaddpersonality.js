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
  firebase.analytics();
  console.log(s);
  var database=firebase.database();
  function buttonclick() 
  {
			var ref=database.ref('AddPersonality');
			ref.child("q1").set({
							 question:document.getElementById("q1").value,
							 option1:document.getElementById("option11").value,
							 option2:document.getElementById("option12").value,
							 option3:document.getElementById("option13").value,
							 option4:document.getElementById("option14").value,
							 answer1:document.getElementById("ans1").value,
							 answer2:document.getElementById("ans1_").value
							 });
			ref.child("q2").set({
							 question:document.getElementById("q2").value,
							 option1:document.getElementById("option21").value,
							 option2:document.getElementById("option22").value,
							 option3:document.getElementById("option23").value,
							 option4:document.getElementById("option24").value,
							 answer1:document.getElementById("ans2").value,
							 answer2:document.getElementById("ans2_").value
							 });
			ref.child("q3").set({
							 question:document.getElementById("q3").value,
							 option1:document.getElementById("option31").value,
							 option2:document.getElementById("option32").value,
							 option3:document.getElementById("option33").value,
							 option4:document.getElementById("option34").value,
							 answer1:document.getElementById("ans3").value,
							 answer2:document.getElementById("ans3_").value
							 });
			ref.child("q4").set({
							 question:document.getElementById("q4").value,
							 option1:document.getElementById("option41").value,
							 option2:document.getElementById("option42").value,
							 option3:document.getElementById("option43").value,
							 option4:document.getElementById("option44").value,
							 answer1:document.getElementById("ans4").value,
							 answer2:document.getElementById("ans4_").value
							 });
			ref.child("q5").set({
							 question:document.getElementById("q5").value,
							 option1:document.getElementById("option51").value,
							 option2:document.getElementById("option52").value,
							 option3:document.getElementById("option53").value,
							 option4:document.getElementById("option54").value,
							 answer1:document.getElementById("ans5").value,
							 answer2:document.getElementById("ans5_").value
							 });
			ref.child("q6").set({
							 question:document.getElementById("q6").value,
							 option1:document.getElementById("option61").value,
							 option2:document.getElementById("option62").value,
							 option3:document.getElementById("option63").value,
							 option4:document.getElementById("option64").value,
							 answer1:document.getElementById("ans6").value,
							 answer2:document.getElementById("ans6_").value
							 });
						
			ref.child("q7").set({
							 question:document.getElementById("q7").value,
							 option1:document.getElementById("option71").value,
							 option2:document.getElementById("option72").value,
							 option3:document.getElementById("option73").value,
							 option4:document.getElementById("option74").value,
							 answer1:document.getElementById("ans7").value,
							 answer2:document.getElementById("ans7_").value
							 });
			ref.child("q8").set({
							 question:document.getElementById("q8").value,
							 option1:document.getElementById("option81").value,
							 option2:document.getElementById("option82").value,
							 option3:document.getElementById("option83").value,
							 option4:document.getElementById("option84").value,
							 answer1:document.getElementById("ans8").value,
							 answer2:document.getElementById("ans8_").value
							 });
			ref.child("q9").set({
							 question:document.getElementById("q9").value,
							 option1:document.getElementById("option91").value,
							 option2:document.getElementById("option92").value,
							 option3:document.getElementById("option93").value,
							 option4:document.getElementById("option94").value,
							 answer1:document.getElementById("ans9").value,
							 answer2:document.getElementById("ans9_").value
							 });
			ref.child("q10").set({
							 question:document.getElementById("q10").value,
							 option1:document.getElementById("option101").value,
							 option2:document.getElementById("option102").value,
							 option3:document.getElementById("option103").value,
							 option4:document.getElementById("option104").value,
							 answer1:document.getElementById("ans10").value,
							 answer2:document.getElementById("ans10_").value
							 });
						
					
					
					
						console.log(URL);
						location.replace("Homepage.html");

		
  }
	
	