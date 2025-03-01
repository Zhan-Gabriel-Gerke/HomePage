// random pilt, mis võetakse piltide massiivist
function randomPilt() {
    const pildid=[
        'img/1.png',
        'img/2.jpg',
        'img/3.png'
    ];
    //random pilt
    const pilt=Math.floor(Math.random() * pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");

    randomPilt.src=rpilt;

}

function radioValik(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elemnti nimega valik
    let randomPilt=document.getElementById("randomPilt");

    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(randomPilt.getAttribute("src")==valik[i].value){
                vastus.innerHTML="Õige";
                vastus.style.backgroundColor="lightgreen";
            }else {
                vastus.innerHTML="Vale";
                vastus.style.backgroundColor="red";
            }
        }
    }
}
function arvuta(kogus, hind){
    return (kogus*hind).toFixed(1);
    //toFixed(1) - 1 chislo posle zapjatoi
    //mathfloar - rovnie chisla
}
const pilt1hind=1;
const pilt2hind=9;
const pilt3hind=0;

function radioHindArvuta(){
    let vastus2=document.getElementById("vastus2");
    let pilt1=document.getElementById("pilt1");
    let pilt2=document.getElementById("pilt2");
    let pilt3=document.getElementById("pilt3");
    let kogus=document.getElementById("kogus");
    if(pilt1.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt1hind)+"euro"
    }else if(pilt2.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt2hind)+"euro"
    }else if (pilt3.checked){
        vastus2.innerHTML = arvuta(kogus.value, pilt3hind) + "euro"
    }else {
        vastus2.innerHTML="vali, mis pilti sa soovid"

    }

}
