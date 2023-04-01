let printedHome = document.getElementById("printed-home")
let scoreh1 = 0
function Hone() {
    scoreh1 += 1
    printedHome.textContent = scoreh1
}

let scoreh2 = 0
function Htwo() {
    scoreh2 += 2 + scoreh1
    printedHome.textContent = scoreh2
}

let scoreh3 = 0
function Hthree() {
    scoreh3 += 3 + scoreh2
    printedHome.textContent = scoreh3
}


let printedGuest = document.getElementById("printed-guest")
let scoreG1 = 0
function Gone() {
    scoreG1 += 1
    printedGuest.textContent = scoreG1
}

let scoreG2 = 0
function Gtwo() {
    scoreG2 += 2 + scoreG1
    printedGuest.textContent = scoreG2
}

let scoreG3 = 0
function Gthree() {
    scoreG3 += 3 + scoreG2
    printedGuest.textContent = scoreG3
}