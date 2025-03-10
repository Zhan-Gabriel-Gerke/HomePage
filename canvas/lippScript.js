function eestilipp(){
    const lipp=document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d"); //canvas nimi
        let img = new Image();
        l.fillStyle = "blue";
        l.fillRect(0,0,330,500);
        l.fillStyle = "black";
        l.fillRect(0,70,330,70)
        l.fillStyle = "white";
        l.fillRect(0,140,330,70)
        img.onload = function() {
            l.drawImage(img, 100, 40);
        };
        img.src = 'herb.png';
    }
}

function fralipp(){
    const lipp=document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "blue";
        l.fillRect(0, 0, 110, 220);
        l.fillStyle = "white";
        l.fillRect(110,0,220,220)
        l.fillStyle = "red";
        l.fillRect(220,0,330,220)
    }
}
function remove(){
    const lipp=document.getElementById("lipp");
    if (lipp.getContext) {
        let p = lipp.getContext("2d"); //canvas nimi
        p.clearRect(0, 0, 400, 300);
    }
}
function removeSwis(){
    const Swlipp=document.getElementById("Swlipp");
    if (Swlipp.getContext) {
        let p = Swlipp.getContext("2d"); //canvas nimi
        p.clearRect(0, 0, 400, 300);
    }
}

function Switlipp(){
    const lipp=document.getElementById("Swlipp");
    if (lipp.getContext) {
        let s = lipp.getContext("2d");
        s.fillStyle = "red";
        s.fillRect(0, 0, 200, 200);
        s.fillStyle = "white";
        s.fillRect(75, 30, 48, 130)
        s.fillStyle = 'white';
        s.fillRect(30, 75, 130, 48)
    }
}
//487, 224 94.4, 44.8
//712, 224 142.4, 44.8
//487, 974 94.4, 194.8
//712, 974 142.4, 194.8

//224, 487 44.8, 94.4
//974, 487 194.8, 194.8
//974, 712 194.8, 142.4
//224, 712 44.8, 142.4
//
function japanlipp(){
    const japanlipp=document.getElementById("lipp");
    if (japanlipp.getContext) {
        let j = japanlipp.getContext("2d");
        j.fillStyle = "white";
        j.fillRect(0,0,330,220)
        j.beginPath();
        j.arc(170, 110, 50, 0, 2*Math.PI, true);
        j.strokeStyle='red'
        j.fillStyle='red'
        j.fill();
        j.stroke(); //joonista
    }
}