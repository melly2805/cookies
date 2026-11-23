let cookie = 0;
let power = 1;
let auto = 0;


const cookies = document.getElementById("cookies");

function update() {
    cookies.textContent = "Kakor: " + cookie;
}

document.getElementById("cookie").addEventListener("click", function() {
    cookie = cookie + power;
    update();
});

document.getElementById("buyPower").addEventListener("click", function() {
    if (cookie >= 10) {
        cookie -= 10;
        power++;
        update();
    }
});

document.getElementById("buyAuto").addEventListener("click", function() {
    if (cookie >= 50) {
        cookie -= 50;
        auto++;
        update();
    }
});

setInterval(function() {
    cookie = cookie + auto;
    update();
}, 1000);

function update() {
    cookies.textContent = "Kakor: " + cookie;
    
}