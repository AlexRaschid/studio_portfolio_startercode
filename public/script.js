//Unit 1 Portfolio with Firebase
// Use Firebase to store the images links and info for your projects. 
// Use Jquery to dynamically display the information from firebse. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

var config = {
    apiKey: "AIzaSyD9uZozo2SnpUaazbEcqEuPKCsi-apX8x0",
    authDomain: "my-portfolio-6d3ae.firebaseapp.com",
    databaseURL: "https://my-portfolio-6d3ae.firebaseio.com",
    projectId: "my-portfolio-6d3ae",
    storageBucket: "my-portfolio-6d3ae.appspot.com",
    messagingSenderId: "282524712234"
};
firebase.initializeApp(config);
var database = firebase.database();
var storage = firebase.storage();



var storageRef = storage.ref();




var defaultPic = "very Cool Edit 1.jpg";
var imagesRef = storageRef.child("images");
var defaultPicRef = storageRef.child("images/"+ defaultPic);



defaultPicRef.getDownloadURL()
            .then(function(url){
        $(".myFace").append("<img class='pfp' src=" + url + "></img>");
         
});






// //Defaults to the image there
// // var profilePic = "very Cool Edit 1.jpg";
// // var spaceRef = imagesRef.child(profilePic);

// console.log(spaceRef.fullpath);





//Deals with my Name
var myInfo = database.ref("info");
//snapshot is the returned database key
myInfo.on('value',function(snapshot){
    var name = snapshot.val()["full-name"];
    $('.fName').html(name["first-name"]);
    $('.lName').html(name["last-name"]);
});



$(document).ready(function(){




});
