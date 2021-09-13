var firebaseConfig = {
apiKey:"AIzaSyCIw91AofzNk9triIyRfaJq3gCsDARMrwQ",
authDomain:"webstorage-69cb3.firebaseapp.com",
databaseURL:"https://webstorage-69cb3-default-rtdb.firebaseio.com",
projectId:"webstorage-69cb3",
storageBucket:"webstorage-69cb3.appspot.com",
messagingSenderId:"853132151889",
appId:"1:853132151889:web:8ef611a15eefb6b407fc70"
};
firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}

function getData()
{
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output"),innerHTML
room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName()this.id' >#"+ Room_names +"</div>>hr>";
document.getElementById("output").innerHTML += row;
});};

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"
}