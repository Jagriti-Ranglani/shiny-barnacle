let count = 0;

let welcomeEl = document.getElementById("welcome-el");
let naam = "Jagriti";
let Greet = "Hello, ";

let countEl = document.getElementById("count-el");
console.log(countEl);

let saveEl = document.getElementById("save-el");

function increment(){
    console.log("The button was clicked");
    count++;
    countEl.textContent = count;
}

function save(){
    console.log(count);
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}

welcomeEl.innerText = Greet + naam;