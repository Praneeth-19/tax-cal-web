





let aboutButtonEl1 = document.getElementById("aboutButton1");
let timeToVisitButtonEl1 = document.getElementById("timeToVisitButton1");
let attractionsButtonEl1 = document.getElementById("attractionsButton1");

let aboutTabEl1 = document.getElementById("aboutTab1");
let timeToVisitTabEl1 = document.getElementById("timeToVisitTab1");
let attractionsTabEl1 = document.getElementById("attractionsTab1");

timeToVisitTabEl1.classList.add("d-none");
attractionsTabEl1.classList.add("d-none");

function onClickAboutTab1() {
    aboutTabEl1.classList.remove("d-none");
    timeToVisitTabEl1.classList.add("d-none");
    attractionsTabEl1.classList.add("d-none");

    aboutButtonEl1.classList.add("selected-button");
    timeToVisitButtonEl1.classList.remove("selected-button");
    attractionsButtonEl1.classList.remove("selected-button");
}

function onClickTimeToVisitTab1() {
    aboutTabEl1.classList.add("d-none");
    timeToVisitTabEl1.classList.remove("d-none");
    attractionsTabEl1.classList.add("d-none");

    aboutButtonEl1.classList.remove("selected-button");
    timeToVisitButtonEl1.classList.add("selected-button");
    attractionsButtonEl1.classList.remove("selected-button");
}

function onClickAttractionsTab1() {
    aboutTabEl1.classList.add("d-none");
    timeToVisitTabEl1.classList.add("d-none");
    attractionsTabEl1.classList.remove("d-none");

    aboutButtonEl1.classList.remove("selected-button");
    timeToVisitButtonEl1.classList.remove("selected-button");
    attractionsButtonEl1.classList.add("selected-button");
}







let aboutButtonEl2 = document.getElementById("aboutButton2");
let timeToVisitButtonEl2 = document.getElementById("timeToVisitButton2");
let attractionsButtonEl2 = document.getElementById("attractionsButton2");

let aboutTabEl2 = document.getElementById("aboutTab2");
let timeToVisitTabEl2 = document.getElementById("timeToVisitTab2");
let attractionsTabEl2 = document.getElementById("attractionsTab2");

timeToVisitTabEl2.classList.add("d-none");
attractionsTabEl2.classList.add("d-none");

function onClickAboutTab2() {
    aboutTabEl2.classList.remove("d-none");
    timeToVisitTabEl2.classList.add("d-none");
    attractionsTabEl2.classList.add("d-none");

    aboutButtonEl2.classList.add("selected-button");
    timeToVisitButtonEl2.classList.remove("selected-button");
    attractionsButtonEl2.classList.remove("selected-button");
}

function onClickTimeToVisitTab2() {
    aboutTabEl2.classList.add("d-none");
    timeToVisitTabEl2.classList.remove("d-none");
    attractionsTabEl2.classList.add("d-none");

    aboutButtonEl2.classList.remove("selected-button");
    timeToVisitButtonEl2.classList.add("selected-button");
    attractionsButtonEl2.classList.remove("selected-button");
}

function onClickAttractionsTab2() {
    aboutTabEl2.classList.add("d-none");
    timeToVisitTabEl2.classList.add("d-none");
    attractionsTabEl2.classList.remove("d-none");

    aboutButtonEl2.classList.remove("selected-button");
    timeToVisitButtonEl2.classList.remove("selected-button");
    attractionsButtonEl2.classList.add("selected-button");
}