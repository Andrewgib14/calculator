let buttons = document.querySelectorAll(".key");
let display = document.querySelector(".display");
let buttonC = document.querySelector("#numC");
let equal = document.querySelector("#num--");
let up = document.querySelector("#arrowUp");
let down = document.querySelector("#arrowDown");
let backSpace = document.querySelector("#back");
let anwser = [];
// let problem = display.innerHTML;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        var btnVal = this.innerHTML;
        display.innerHTML += btnVal;
    }
}

buttonC.addEventListener("click", clear)

function clear() {
    display.innerHTML = "";
}

equal.addEventListener("click", equals);

function equals() {
    let sqArray;
    let sqr;
    let problem = display.innerHTML;
    if (problem.indexOf("√") > -1) {
        let index = problem.indexOf("√");
        splitProblem = problem.split("");
        splitProblem.splice(index, 1);
        sqArray = [];
        for (let i = index; i < splitProblem.length;) {
            sqArray.push(splitProblem[i]);
            if (splitProblem[i + 1] === ")" || i >= splitProblem.length) {
                i = splitProblem.length;
            }
            splitProblem.splice(i, 1);
        }
        let num = eval(sqArray.join(""));
        sqr = Math.sqrt(num);
        splitProblem.splice(index, 0, sqr);
        problem = splitProblem.join("");
    }

    display.innerHTML = eval(problem);
    anwser.push(display.innerHTML);
}

// let currentIndex = anwser.length;

// up.addEventListener("click", upArrow);
// function upArrow() {
//     if (anwser.length > 1) {
//         currentIndex -= 1;
//     }
//     display.innerHTML = anwser[currentIndex];
// }
// down.addEventListener("click", downArrow);
// function downArrow() {
//     currentIndex += 1
//     display.innerHTML = anwser[currentIndex];
// }

// down.addEventListener();
// backSpace.addEventListener();




