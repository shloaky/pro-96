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
  
//ADD YOUR FIREBASE LINKS HERE
username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "welcome" + username + "!";

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-" + Room_names);
row = "<div class = 'room_name' id =" + Room_names +" onclick = 'redirectToRoomName(this.id)'>#" |+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}