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



var firstName = database.ref("first-name");
var lastName = database.ref("last-name");

console.log(database);

firstName.on('value',function(snapshot){
    
    
    
    var name = snapshot.val();
    $('.fName').html(name);
    
});


lastName.on('value',function(snapshot){
    var name = snapshot.val();
    $(".lName").html(name)
});



$(document).ready(function(){

});
