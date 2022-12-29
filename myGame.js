function scrollToBottom() {
  window.scrollTo(
    {
      bottom: 0,
      behavior: "smooth",
    },
    document.body.scrollHeight
  );
}
// let empty = document.getElementById("0");
// empty.style.opacity = 0;
let msCounter = 0;
let sCounter = 0;
let minCounter = 0;
let startBool = false;
let ms = document.getElementById("ms");
let s = document.getElementById("s");
let min = document.getElementById("min");
let moveCounter = 0;
let moveText = document.getElementById("moves");

let button = document.querySelector("#play");
button.addEventListener("click", scrollToBottom);
let darkMode = document.getElementById("darkmode");
let img = document.getElementById("imgD");
let h1Elements = document.querySelectorAll("h1");
let boolDone = false;

darkMode.addEventListener("click", function () {
  if (darkMode.textContent === "Dark Mode") {
    h1Elements.forEach(function (h1) {
      h1.style.color = "rgb(2, 255, 171)";
    });
    document.body.style.background =
      "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)";
    img.style.display = "none";
    darkMode.innerHTML = "Light Mode";
    darkMode.style.color = "white";
  } else {
    h1Elements.forEach(function (h1) {
      h1.style.color = "white";
    });
    document.body.style.backgroundColor = "#ddc3df";
    img.style.display = "inline";
    document.body.style.background =
      "linear-gradient(60deg, rgb(0, 0, 0) 0%, rgba(0,172,193,1) 100%)";
    darkMode.innerHTML = "Dark Mode";
    darkMode.style.color = "black";
  }
});
let boolResume = false;
let boolStart = false;
let boolActive = false;
const puzzleArrayCorrect = [1, 2, 3, 4, 5, 6, 7, 8, ""];
let puzzleArrayRandom = [1, 2, 3, 4, 5, 6, 7, 8, ""];
let checkImage = document.getElementById("checkImage");
checkImage.style.opacity = 0;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    if (boolStart === true) {
      // boolActive = true;
      let buttonId = this.id; // .text.content => ; let a var = document.getElementById("this.id").textContent !!!~
      let element1 = document.getElementById("1").textContent;
      let element2 = document.getElementById("2").textContent;
      let element3 = document.getElementById("3").textContent;
      let element4 = document.getElementById("4").textContent;
      let element5 = document.getElementById("5").textContent;
      let element6 = document.getElementById("6").textContent;
      let element7 = document.getElementById("7").textContent;
      let element8 = document.getElementById("8").textContent;
      let element9 = document.getElementById("9").textContent;
      moveCounter++;
      moveText.innerHTML = moveCounter;
      if (buttonId === "1") {
        if (element2 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[1];
          puzzleArrayRandom[1] = temp;
        } else if (element4 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[3];
          puzzleArrayRandom[3] = temp;
        }
      } else if (buttonId === "2") {
        if (element1 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[0];
          puzzleArrayRandom[0] = temp;
        } else if (element3 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[2];
          puzzleArrayRandom[2] = temp;
        } else if (element5 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[4];
          puzzleArrayRandom[4] = temp;
        }
      } else if (buttonId === "3") {
        if (element2 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[1];
          puzzleArrayRandom[1] = temp;
        } else if (element6 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[5];
          puzzleArrayRandom[5] = temp;
        }
      } else if (buttonId === "4") {
        if (element1 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[0];
          puzzleArrayRandom[0] = temp;
        } else if (element5 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[4];
          puzzleArrayRandom[4] = temp;
        } else if (element7 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[6];
          puzzleArrayRandom[6] = temp;
        }
      } else if (buttonId === "5") {
        if (element2 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[1];
          puzzleArrayRandom[1] = temp;
        } else if (element4 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[3];
          puzzleArrayRandom[3] = temp;
        } else if (element6 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[5];
          puzzleArrayRandom[5] = temp;
        } else if (element8 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[7];
          puzzleArrayRandom[7] = temp;
        }
      } else if (buttonId === "6") {
        if (element3 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[2];
          puzzleArrayRandom[2] = temp;
        } else if (element5 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[4];
          puzzleArrayRandom[4] = temp;
        } else if (element9 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[8];
          puzzleArrayRandom[8] = temp;
        }
      } else if (buttonId === "7") {
        if (element4 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[3];
          puzzleArrayRandom[3] = temp;
        } else if (element8 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[7];
          puzzleArrayRandom[7] = temp;
        }
      } else if (buttonId === "8") {
        if (element7 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[6];
          puzzleArrayRandom[6] = temp;
        } else if (element5 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[4];
          puzzleArrayRandom[4] = temp;
        } else if (element9 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[8];
          puzzleArrayRandom[8] = temp;
        }
      } else if (buttonId === "9") {
        if (element6 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[5];
          puzzleArrayRandom[5] = temp;
        } else if (element8 === "") {
          temp = puzzleArrayRandom[buttonId - 1];
          puzzleArrayRandom[buttonId - 1] = puzzleArrayRandom[7];
          puzzleArrayRandom[7] = temp;
        }
      }
      // i have two possibilities at least !
      // the first is switching the classes && textContent!
      // the second is linking the elements to an array ! (element1.textContent = array[0])...

      // to switch two elements in an array i should add another var and exchanging the values with each other

      for (let i = 0; i < 9; i++) {
        let buttonPuzzle = document.getElementById(i + 1);
        buttonPuzzle.innerHTML = puzzleArrayRandom[i];
      }
    }
  });
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    for (let i = 1; i <= 9; i++) {
      if (document.getElementById(i).textContent === "") {
        document.getElementById(i).style.opacity = 0;
      } else {
        document.getElementById(i).style.opacity = 1;
      }
    }
  });
});
let i;
let j;
let Bool = false;
let start = document.getElementById("start");
start.addEventListener("click", function () {
  if (start.textContent === "Start") {
    if(boolDone === true){
      moveCounter = 0;
      moveText.innerHTML = moveCounter;
      msCounter = 0;
      sCounter = 0;
      minCounter = 0;
      lapCounter = 0;
      min.textContent = minCounter.toString().padStart(2, "0");
      s.textContent = sCounter.toString().padStart(2, "0");
      ms.innerHTML = msCounter.toString().padStart(3, "0");
      clearInterval(setCounter);
      startBool = false;
    }
    if (startBool === false) {
      startBool = true;
      start.innerHTML = "Stop";
      ////
      setCounter = setInterval(function () {
        msCounter += 9;
        ms.innerHTML = msCounter.toString().padStart(3, "0");
  
        if (msCounter >= 955) {
          msCounter = 0;
          if (sCounter === 59) {
            sCounter = 0;
            Boolean = true;
          } else {
            sCounter++; // increment minutes counter when ms counter reaches 1000 !!!
          }
          s.textContent = " " + sCounter.toString().padStart(2, "0") + " ";
        }
        if (Boolean === true) {
          minCounter++; // increment minutes counter when s counter reaches 59 + 1 !!!
          sCounter = 0;
          min.textContent = minCounter.toString().padStart(2, "0");
          Boolean = false;
        }
      }, 8.3);
    }
    boolStart = true;
    boolActive = true;
    let checkNumber = 0;
    for (let index = 0; index < 55; index++) {
      const min = 0;
      const max = 8;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(randomNumber);
      checkNumber++;

      if (checkNumber % 2 === 1) {
        i = randomNumber;
      } else if (checkNumber % 2 === 0) {
        j = randomNumber;
        Bool = true;
      }
      if (Bool === true) {
        [puzzleArrayRandom[i], puzzleArrayRandom[j]] = [
          puzzleArrayRandom[j],
          puzzleArrayRandom[i],
        ];
        Bool = false;
      }
    }
    start.textContent = "Stop";
  } else if (start.textContent === "Resume") {
    boolStart = true;
    boolResume = true;
    setCounter = setInterval(function () {
      msCounter += 9;
      ms.innerHTML = msCounter.toString().padStart(3, "0");

      if (msCounter >= 955) {
        msCounter = 0;
        if (sCounter === 59) {
          sCounter = 0;
          Boolean = true;
        } else {
          sCounter++; // increment minutes counter when ms counter reaches 1000 !!!
        }
        s.textContent = " " + sCounter.toString().padStart(2, "0") + " ";
      }
      if (Boolean === true) {
        minCounter++; // increment minutes counter when s counter reaches 59 + 1 !!!
        sCounter = 0;
        min.textContent = minCounter.toString().padStart(2, "0");
        Boolean = false;
      }
    }, 8.3);
    start.textContent = "Stop";
  } else if (start.textContent === "Stop") {
    boolStart = false;
    start.textContent = "Resume";
    clearInterval(setCounter);

  }
  for (let i = 0; i < 9; i++) {
    let buttonPuzzle = document.getElementById(i + 1);
    buttonPuzzle.innerHTML = puzzleArrayRandom[i];
  }
  for (let i = 1; i <= 9; i++) {
    if (document.getElementById(i).textContent === "") {
      document.getElementById(i).style.opacity = 0;
    } else {
      document.getElementById(i).style.opacity = 1;
    }
  }
});

let restart = document.getElementById("restart");
restart.addEventListener("click", function () {
  moveCounter = 0;
  moveText.innerHTML = moveCounter;
  msCounter = 0;
  sCounter = 0;
  minCounter = 0;
  lapCounter = 0;
  min.textContent = minCounter.toString().padStart(2, "0");
  s.textContent = sCounter.toString().padStart(2, "0");
  ms.innerHTML = msCounter.toString().padStart(3, "0");
  clearInterval(setCounter);
  startBool = false;
  ////
  start.textContent = "Start";
  boolActive = false;
  boolStart = false;
  checkImage.style.opacity = 0;
  puzzleArrayRandom = [1, 2, 3, 4, 5, 6, 7, 8, ""];
  for (let i = 0; i < 9; i++) {
    let buttonPuzzle = document.getElementById(i + 1);
    buttonPuzzle.innerHTML = puzzleArrayRandom[i];
  }
  for (let i = 1; i <= 9; i++) {
    if (document.getElementById(i).textContent === "") {
      document.getElementById(i).style.opacity = 0;
    } else {
      document.getElementById(i).style.opacity = 1;
    }
  }
});

addEventListener("click", function () {
  checkerBool = true;
  for (let i = 0; i < 9; i++) {
    if (puzzleArrayRandom[i] !== puzzleArrayCorrect[i]) {
      checkerBool = false;
    }
  }
  if (checkerBool === true && boolActive === true) {
    checkImage.style.opacity = 1;
    start.textContent = "Start";
    clearInterval(setCounter);
    boolDone = true;
    boolActive = false;
    boolStart = false; // to disable the moves the boolStart should be false ;
  } else if (checkerBool === false) {
    checkImage.style.opacity = 0;
  }
});
let minutes = document.getElementById("min");
let secondes = document.getElementById("s");

darkMode.addEventListener("click", function () {
  if (darkMode.textContent === "Dark Mode") {
    minutes.style.color = "white";
    secondes.style.color = "white";
  } else {
    minutes.style.color = "rgb(2, 255, 171)";
    secondes.style.color = "rgb(2, 255, 171)";
  }
});
