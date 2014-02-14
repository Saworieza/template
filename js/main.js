alert ("Yay javascript!");
console.log ("I'm in the console");


function myFunct() {
	alert("You Clicked!");
}
var myVar = document.getElementsByTagName('h1');
console.log (myVar);
myVar.onclick = function(){
	alert ("You clicked on an H1 function");
}