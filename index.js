var max = 100;

function randomVolt(){
  return (Math.random()*20+220).toFixed(1);
}

function randomAmpere(){
  return ((Math.random()*max)+5).toFixed(1);
  // for testing the warning :
  //return 101;
}

function isValidUsername(string){
  
  if(!(string.length == 4)){
    alert("Die Initialen plus die letzten Ziffern der Immatrikulationsnummer.");
    return false;  
  }
 
  var initials = string.substring(0, 2);
  var imma = string.slice(2);
 
  initials = initials.toLowerCase();
    
  var char1 = initials.charCodeAt(0);
  var char2 = initials.charCodeAt(1);
  
  var isLetters = true;
  
  if (char1 >= 97 && char1 <= 122){
    isLetters = (char2 >= 97 && char2 <= 122);
  } else {
    isLetters = false;
  }
  
  var nr1 = imma.charCodeAt(0);
  var nr2 = imma.charCodeAt(1);
 
  var isNumbers = true;
  
  if (nr1 >= 48 && nr1 <= 57){
    isNumbers = (nr2 >= 48 && nr2 <= 57);
  } else {
    isNumbers = false;
  }
 
 if(isLetters == false || isNumbers == false ){
   alert("Ungültige Nutzerkennung");
   return false;
 }
 return true; 
}

function isValidUsage(usage){
  var arr = usage.split();
  var char;
  for (var i = 0; i < arr.length; i++){
    char = arr[0].charCodeAt(0);
    if (!( char >= 48 &&  char <= 57)){
      alert("Ungültige Zählernummer");
      return false;
    }
  }
  return true;
}

function writeText(){
  
  var x = $('#iniMar').val();
  var y = $("#verbrauchswert").val();
  
  if (isValidUsername(x) == true && isValidUsage(y) == true ){
    var table = $("#myTable")[0];
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = x.toUpperCase();
    cell2.innerHTML = y + " kWh";
    cell3.innerHTML = Date().substring(16,24) + " Uhr";
  }
  
  $('#iniMar').val("");
  $('#verbrauchswert').val("");
    
}

//document.getElementById("statusetc").innerHTML = " <p> Status: </p> <ul> <li>" +  randomVolt() 
//  + " Volt</li> <li>" + randomAmpere() +"  Ampere</li> </ul>";

var amp = randomAmpere();

$("#volts").html(randomVolt() + " Volt");

$("#amperes").html(amp + " Ampere");

if (amp > max){
  window.alert("! ACHTUNG Stromstärke überschritten !");        
}