let Input = document.getElementById("Input");
let computer = document.getElementById("computer");
let results = document.getElementById("results");
let pictures = document.getElementById("pictures");
let cpuImg = document.getElementById("cpuImg");
let Won = 0;
let Lost = 0;
let Tied = 0;
let button = document.getElementById("button");
button.addEventListener("click", function () {
  let cpu = Math.floor(Math.random() * 3 + 1);
  Input.innerText = "You chose Rock";
  if(cpu == 1){
    cpuImg.src = "rock.jpg";
    results.innerText = "Tie";
    Tied++;
  }
  if (cpu == 2) {
    cpuImg.src = "paper.jpg";
    results.innerText = "You lose";
    Lost++;
  }
  if (cpu == 3) {
    cpuImg.src = "scissors.jpg";
    results.innerText = "You win";
    Won++;
  }
});

let button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
  let cpu = Math.floor(Math.random() * 3 + 1);
  Input.innerText = " You chose Paper";
  if (cpu == 1) {
    cpuImg.src = "rock.jpg"
    results.innerText = "You win";
    Won++;
  }
  if (cpu == 2) {
    cpuImg.src = "paper.jpg";
    results.innerText = "Tie";
    Tied++;
  }
  if (cpu == 3) {
     cpuImg.src = "scissors.jpg";
    results.innerText = "You lose";
Lost++;
  }
});

let button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
  let cpu = Math.floor(Math.random() * 3 + 1);
  Input.innerText = "You chose Scissors";
  if (cpu == 1) {
    cpuImg.src = "rock.jpg";
    results.innerText = "You lose";
    Lost++;
  }
  if (cpu == 2) {
    cpuImg.src = "paper.jpg";
    results.innerText = "You Win";
    Won++;
  }
  if (cpu == 3) {
    cpuImg.src = "scissors.jpg";
    results.innerText = "Tie";
    Tied++;
  }
});


