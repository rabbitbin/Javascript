// JavaScript 
// den kan anpassar storlek enligt skärmen


// hämta canvas
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// hämta värder på namnet från framsidan
var thisName = localStorage.getItem("person"); 

// meddelande till användar
c.font = "26px Arial";
c.fillStyle = '#FF9E5C';
c.fillText( "Something is wrong, you and " + thisName + " now is stucked in the TIME!", 80, 250);

c.font = "26px Arial";
c.fillStyle = '#FF9E5C';
c.fillText( "You probably didn't entry the year between 1800-2200!", 80, 310);

c.font = "18px Arial";
c.fillStyle = '#FFCB5F';
c.fillText( "Click on the screen to start again", 80, 390);


// skapa slumpmässiage ballar och de springar i slumpmässiga riktningar

for (var i = 0; i < 50; i++){
	var x = Math.random() * window.innerWidth; // slumpmässigt värde från 0 - 1 inom fönsterdjupet
	var y = Math.random() * window.innerHeight;
	var radius = Math.random() * 22;  // slumpmässigt storleken på cirkel
	var colorArray = [  // ge slumpmässig färg från denna array
	'#67A1FF',
	'#3666B2',
	'#7DAEFF',
	'#B2B2B2',
	'#FFF4E6',
	];
	
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false); // rita en cirkel
	c.strokeStyle = colorArray[Math.floor(Math.random() * colorArray.length)]; // runda upp slumpmässigt antal närmare utdata som heltal. 
	c.stroke();
}


// skapar länkar tillbaka framsidan. Länkar som tänker över hela canvas

var mouseX=0, mouseY=0;
canvas.addEventListener( "mousemove", function ( e ){
  var scrollX = ( window.scrollX !== null && typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset;
  var scrollY = ( window.scrollY !== null && typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset;
  mouseX = e.clientX - curElement.offsetLeft + scrollX;
  mouseY = e.clientY - curElement.offsetTop + scrollY;
}, false );
canvas.addEventListener( "click", function ( e ){
  if( mouseX < 200 ){
    window.location = "index.html";
  }
}, false );













