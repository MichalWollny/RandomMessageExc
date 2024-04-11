const mPart1 = ["This ", "That ", "There ", "Here ", "Now ", "Then "];
const mPart2 = ["success", "failure", "reality", "illusion", "day", "night"];
const mPart3 = [
  " never happened.",
  " always happens.",
  " makes sense.",
  " doesn'make sense.",
  " leads to more failure.",
  " leads to more success.",
];

const genBtn = document.getElementById("genMessage");
const genPlace = document.getElementById("generatedMessage");
const newMessage = document.createElement("p");

function rndNumber(max) {
  return Math.floor(Math.random() * max);
}

function addMessageToDiv() {
  let randomText =
    mPart1[[rndNumber(mPart1.length)]] +
    mPart2[[rndNumber(mPart2.length)]] +
    mPart3[[rndNumber(mPart3.length)]];
  newMessage.textContent = randomText;
  genPlace.appendChild(newMessage);
}

genBtn.addEventListener("click", addMessageToDiv);

// function addMessageToDiv() {
//   let randomText =
//     mPart1[[rndNumber(mPart1.length)]] +
//     mPart2[[rndNumber(mPart2.length)]] +
//     mPart3[[rndNumber(mPart3.length)]];
//   if (genPlace.innerHTML == "") {
//     newMessage.textContent = randomText;
//     genPlace.appendChild(newMessage);
//   } else if (genPlace.innerHTML != "") {
//     genPlace.innerHTML = "";
//     newMessage.textContent = randomText;
//     genPlace.appendChild(newMessage);
//   }
// }

// console.log(mPart1[rndNumber(mPart1.length)]);
