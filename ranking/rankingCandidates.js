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

              
              if(document.getElementById("candidate").rows[cnt] != null){
                x = document.getElementById("candidate").rows[cnt].cells
                x[1].innerHTML = name;
                x[2].innerHTML = email
              }
              
              cnt++;
              
            });
            
            if(weighted_score > above_score){
              $(".candidate").append("<tr>"+
              "<td></td>"+
              "<td>"+"loading.."+"</td>"+
              "<td>"+"loading.."+"</td>"+
              "<td>"+id+"</td>"+
              "<td>"+aptitude_score+"</td>"+
              "<td>"+cv_score+"</td>"+
              "<td>"+personality_score+"</td>"+
              "<td>"+weighted_score+"</td>"+
              "</tr>");
            }
		}
});


function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("customers");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[6];
      y = rows[i + 1].getElementsByTagName("TD")[6];
      //check if the two rows should switch place:

      console.log('x:'+x.innerHTML +' y:'+y.innerHTML);

      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

