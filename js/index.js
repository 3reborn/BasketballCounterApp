
let scoreTitleHome = document.getElementsByClassName("score-title-home");
let scoreTitleGuest = document.getElementsByClassName("score-title-guest");

let countHome = 0;
let countGuest = 0;

function homePlusOne() {
    countHome += 1;
    scoreTitleHome[0].innerText = countHome;
    console.log(scoreTitleHome);
}

function homePlusTwo() {
    countHome += 2;
    scoreTitleHome[0].innerText = countHome;
    console.log(scoreTitleHome);
}

function homePlusThree() {
    countHome += 3;
    scoreTitleHome[0].innerText = countHome;
    console.log(scoreTitleHome);
}

function guestPlusOne() {
    countGuest += 1;
    scoreTitleGuest[0].innerText = countGuest;
    console.log(scoreTitleGuest);
}

function guestPlusTwo() {
    countGuest += 2;
    scoreTitleGuest[0].innerText = countGuest;
    console.log(scoreTitleGuest);
}

function guestPlusThree() {
    countGuest += 3;
    scoreTitleGuest[0].innerText = countGuest;
    console.log(scoreTitleGuest);
}

function newGameBtn() {
    countHome = 0;
    countGuest = 0;
    scoreTitleGuest[0].innerText = countHome;
    scoreTitleHome[0].innerText = countGuest;
}