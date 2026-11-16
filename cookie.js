
let cookies = 0;
let power = 1;
let auto = 0;

const text = document.getElementById("cookies");

document.getElementById("cookie").addEventListener("click", function() {
    cookies += power;
    update();
});

document.getElementById("buyPower").addEventListener("click", function() {
    if (cookies >= 10) {
        cookies -= 10;
        power++;
        update();
    }
});

document.getElementById("buyAuto").addEventListener("click", function() {
    if (cookies >= 50) {
        cookies -= 50;
        auto++;
        update();
    }
});

setInterval(function() {
    cookies += auto;
    update();
}, 1000);

function update() {
    text.textContent = "Kakor: " + cookies;
}
