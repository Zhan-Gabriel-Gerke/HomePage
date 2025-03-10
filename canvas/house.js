function wall(){
    const housesmall = document.getElementById("housesmall");
    if (housesmall.getContext) {
        let mj = housesmall.getContext("2d");
        mj.fillStyle = '#964B00'
        mj.fillRect(120, 150, 250 ,200)
    }
}
function roof(){
    const housesmall = document.getElementById("housesmall");
    if (housesmall.getContext) {
        let mj = housesmall.getContext("2d");
        mj.beginPath();
        mj.strokeStyle='#964B00'
        mj.fillStyle = '#964B00'
        mj.moveTo(30, 150);
        mj.lineTo(470, 150);
        mj.lineTo(250, 100);
        mj.lineTo(30, 150);
        mj.stroke();
        mj.fill();
        }
}
function window(){
    const housesmall = document.getElementById("housesmall");
    if (housesmall.getContext) {
        let mj = housesmall.getContext("2d");
        mj.fillStyle = '#00FF00';
        mj.fillRect(180, 180, 50 ,50);
        console.log("Рисую окно");

    }
}
function chimney(){
    const housesmall = document.getElementById("housesmall");
    if (housesmall.getContext) {
        let mj = housesmall.getContext("2d");
        mj.fillStyle = '#964B00';
        mj.fillRect(280, 70, 40 ,50);
        console.log("Рисую chimney");

    }
}