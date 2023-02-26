var houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
var firstNames = ["Harry", "Ron", "Hermione", "Ginny", "Fred", "George", "Percy", "Bill", "Charlie"];
var lastNames = ["Potter", "Weasley", "Granger", "Black", "Malfoy", "Dumbledore", "McGonagall", "Snape"];

function generateCharacter() {
  var house = houses[Math.floor(Math.random() * houses.length)];
  var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  var character = firstName + " " + lastName + ", " + house;
  document.getElementById("character").innerHTML = character;
}
