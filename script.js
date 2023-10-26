let keys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b",
};


// Konami code sequence

let konamiCode = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a",
];

let keyCount = 0;

let timerID;

document.addEventListener("keydown", checkCode, false);

function checkCode(e) {
  let keyPressed = keys[e.keyCode];
  console.log(keyPressed);
  if (keyPressed === konamiCode[keyCount]) {
    keyCount++;

    // to clear timer
    window.clearTimeout(timerID);

    // to start timer with a 1-sec delay before resetting 
    timerID = window.setTimeout(resetKeyState, 1000);

    // check if we are still on the right path
    if (keyCount === konamiCode.length) {
      cheatCodeActivated();
      resetKeyState();
    }
  } else {
    resetKeyState();
  }
}

function cheatCodeActivated() {
  alert("Congratulations... Cheat code activated!");
  cornify_add();
}

function resetKeyState() {
  console.log("Resetting state!");
  window.clearTimeout(timerID);
  keyCount = 0;
}
