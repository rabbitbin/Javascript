
// kontrollera namnet
function checkName() {

var whoTravel = false;  //skapa variabel med en boolean värde 

while (whoTravel === false) { 

    var gotName = document.getElementById("inName").value; //spara inName värdet när man skriver i namn på fältet
	localStorage.setItem("person", gotName);  //spara gotName värdet till andra HTML sidan
    var txt;
    if ( gotName === null || gotName === "") {  //kontrollera om fältet är tom
  	    txt ="<span>You haven't enter any name. Who do you want to travel with?</span>"; 
    } else {
        txt = "You and " + gotName + " are now on the time machine! is that correct? or entry a name again before you click <button><a href='year.html'>Let's Go!</a></button>" ;
    }  // kontrollera om namn ar ratt, sedan man kan skicka "let's go"
 
    document.getElementById("confirmTxt").innerHTML = txt; // skrive ut texter på html sidan
	
    whoTravel = true; //avsluta loopen  
  }
}

// function som ska kontroller om året 
function checkYear(){
	
var whichYear = false;  //skapar variabel med en boolean värde 

var thisName = localStorage.getItem("person"); //hämta värdet av namnet från första sidan

while (whichYear === false) {
	 
  var gotYear = document.getElementById("inYear").value;  
  var txtYear;

    if ( isNaN(gotYear) || gotYear ==="null" || gotYear === "") {  //Kontrollera om fältet är tom
  	    txtYear ="This is not a valid entry<br> Which year would you like to trave to?"; 
        whichYear = false;
    } else if(confirm("You are going to " + gotYear + " with " + thisName + "! Are you ready?")) {  
		var maxYear = 2200;  // skapa maximala året 
		var minYear = 1800;   // skapa mininum året
		var thisYear = 2018;  // skapa värdet för här om året
		
		if (gotYear >= minYear && gotYear <= thisYear){  // kontrollera året är mellan 1800-2017
		  window.location.href = "ending1.html"; // visa det första slutet på äventyret 
		} else if (gotYear > thisYear && gotYear <= maxYear){  // kontrollera året är mellan 2018-2200
		  window.location.href = "ending2.html";
		  //Visa det andra slutet på äventyret 
		} else { 
		  window.location.href = "ending3.html";	// om året är inte uppfyllde en av villkor ovanför, visa den här avslutat istället.
		}   
    } else {
        txtYear = "You pressed Cancel! Enter a correct YEAR again.";  // om man klickar på "cancel" på bekräftelse.
    }
   
    document.getElementById("confirmYear").innerHTML = txtYear;
    whichYear = true; // avsluta loopen
  }
}

  
