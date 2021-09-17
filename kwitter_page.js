//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDRZ3RVimDMKFv6sRCXwKtDVTfeQn6wMS4",
      authDomain: "practice-94-a1b37.firebaseapp.com",
      databaseURL: "https://practice-94-a1b37-default-rtdb.firebaseio.com",
      projectId: "practice-94-a1b37",
      storageBucket: "practice-94-a1b37.appspot.com",
      messagingSenderId: "774865928023",
      appId: "1:774865928023:web:90b6e51cc1d540b2a64812"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");
function send() 
{ msg = document.getElementById("Message").value; 
firebase.database().ref(room_name).push({
       name:user_name,
        message:msg, 
        like:0 
      });
          document.getElementById("Message").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;    
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_tag = "<h4>"+ Name+"<img class ='user_tick' src= 'tick.png'> </h4>";
message_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>like:"+ like+"</span> </button> <hr>";
row = name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updateLike(message_id) {
       console.log("clicked on like button - " + message_id);
        button_id = message_id;
         likes = document.getElementById(button_id).value;
          updated_likes = Number(likes)+1; console.log(updated_likes);
           firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}