let firstName;
let lastName;
let randButton = document.getElementById("nameRand");
let allButton = document.getElementById("nameAll");
let nameBox = document.getElementById("nameBox");

randButton.addEventListener("click", randName);
allButton.addEventListener("click", allName);

let nameArray = [
  "The Wise",
  "The Rizzler",
  "The LeBron",
  "The GOAT",
  "The Sunshine",
  "The Doc",
  "The Wall",
  "The Beast",
];

function randName() {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  nameBox.innerHTML = "";
  let arrayNum = Math.floor(Math.random() * nameArray.length);
  console.log(arrayNum);
  nameBox.innerHTML = `<p><b> ${firstName} "${nameArray[arrayNum]}"${lastName}</b></p>`;
}

function allName() {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  nameBox.innerHTML = "";
  for (let i = 0; i < nameArray.length; i++) {
    nameBox.innerHTML += `<p><b> ${firstName} "${nameArray[i]}"${lastName}</b></p>`;
  }
}
