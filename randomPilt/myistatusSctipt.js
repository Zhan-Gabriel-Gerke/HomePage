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