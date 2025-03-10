function kustuta(){
    const pyhi=document.getElementById("pyhi");
    if (pyhi.getContext) {
        let p = pyhi.getContext("2d"); //canvas nimi
        p.clearRect(0, 0, 400, 300);
    }
}
function ring(){
    const pyhi=document.getElementById("pyhi");
    let radius=document.getElementById("radius");
    if (pyhi.getContext){
        let p=pyhi.getContext("2d"); //canvas nimi
        //ring
        p.beginPath();//algab tee
        p.arc(50, 50, 20, 0, 2*Math.PI, true);
        p.strokeStyle='red'
        p.stroke(); //joonista

        p.beginPath();//algab tee
        p.arc(100, 50, radius.value, 0, 2*Math.PI, true);
        p.fillStyle='red'
        p.fill(); //joonista
    }
}
//ristkulik
function ristkulik(){
    const pyhi=document.getElementById("pyhi");
    let laius=document.getElementById("laius");
    let korgus=document.getElementById("korgus");
    if (pyhi.getContext) {
        let p = pyhi.getContext("2d"); //canvas nimi
        p.fillStyle='green';
        p.fillRect(100, 200, laius.value, korgus.value);// x,y, width, height
    }
}

function joon(){
    const pyhi=document.getElementById("pyhi");
    if (pyhi.getContext) {
        let p = pyhi.getContext("2d"); //canvas nimi
        //joon
        p.beginPath();
        p.strokeStyle='blue';
        p.lineWidth = '2';
        p.moveTo(300, 80); //alguspunkt
        p.lineTo(150, 80); //loppunkt
        p.stroke();
        p.beginPath();
        p.strokeStyle='blue';
        p.fillStyle='green';//Colour for p.fill();
        p.lineWidth = '2';
        p.moveTo(50, 100); //alguspunkt
        p.lineTo(150, 100); //loppunkt
        p.lineTo(150, 250);
        p.lineTo(50, 100);
        p.stroke()
        p.fill(); //If you want to fill the shape
        //kolmnurk
    }
}
