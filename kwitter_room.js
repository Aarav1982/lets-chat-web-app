
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDaasfYs-A0X9JDc5mKJ2tHz2Po_EFp-Zc",
      authDomain: "kwitter-c02a2.firebaseapp.com",
      databaseURL: "https://kwitter-c02a2-default-rtdb.firebaseio.com",
      projectId: "kwitter-c02a2",
      storageBucket: "kwitter-c02a2.appspot.com",
      messagingSenderId: "361986569873",
      appId: "1:361986569873:web:1829ecde7d650b52073130"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function AddRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row; 
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setitem("room_name", name);
      window.location= "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}