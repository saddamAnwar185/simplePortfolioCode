let number = 0;

function update() {
let count = document.querySelector("#count")
number
count.innerText = number;

};

function plus() {
    number++
    update();
};
function minus() {
    number--
    update();
};
function reset() {
    count.innerText = 0;
    reset();
};