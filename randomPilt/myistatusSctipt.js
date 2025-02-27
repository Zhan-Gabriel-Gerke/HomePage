//random pilt, mis voetakse piltide massiivist
function randomPilt() {
    const pildid=[
        'img/1.png',
        'img/2.png',
        'img/3.png'
    ];
    //random pilt
    const pilt=Math.floor(Math.random()*pildid.length); //генерирует случайное часло
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById('randomPilt');
    randomPilt.src=rpilt;
}


function radioValik(){
    let vastus=document.getElementById('vastus');
    let valik=document.getElementsByName('valik'); // mitu elementi nimega
    let randomPilt=document.getElementById('randomPilt');

    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(randomPilt.getAttribute('src')==valik[i].value){
                vastus.innerHTML='oige';
                vastus.style.backgroundColor="red";
            }
        }
    }
}

function arvuta(kogus, hind){
    return (kogus*hind).toFixed(1);
    //toFixed(1) - 1 sumbol peale koma
}
const pilt1hind=1;
const pilt2hind=2;
const pilt3hind=3;


function radioHindArvuta(){
    let vastus2=document.getElementById('vastu2');
    let pilt1=document.getElementById('pilt1');
    let pilt2=document.getElementById('pilt2');
    let pilt3=document.getElementById('pilt3');
    let kogus=document.getElementById('kogus');
    if(pilt1.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt1hind)+'$';
    }else if(pilt2.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt2hind)+'$';
    }else if(pilt3.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt3hind)+'$';
    }else{
        vastus2.innerHTML='vali mis pilti sa soovid';
    }
}
