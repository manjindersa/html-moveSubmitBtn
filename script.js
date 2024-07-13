let txt = document.getElementById('txt');
let btn = document.getElementById('btn');

function checkk(a) {
    if (a == "msa") {
        btn.style.transform = "translateX(0)";
        btn.style.color = "green";
    } else {
        btn.style.color = "red";
        if (btn.style.transform == "translateX(16em)") {
            btn.style.transform = "translateX(-16em)";
        }
        else {
            btn.style.transform = "translateX(16em)";
        }
    }
}

function chk() {
    alert("Button Pressed");
}
