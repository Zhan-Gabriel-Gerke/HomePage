function puhasta(){
    let nimi = document.getElementById("nimi");
    let varv = document.getElementById("varv");
    let vastus3 = document.getElementById("vastus3");
    let vastus2 = document.getElementById("vastus2");
    let vastus = document.getElementById("vastus");
    let ei = document.getElementById("ei");
    let jah = document.getElementById("jah");
    let vastus4 = document.getElementById("vastus4");
    let valik = document.getElementById("valik");
    let pilt = document.getElementById("pilt");
    pilt.src = '';
    vastus.innerHTML = '';
    vastus2.innerHTML = '';
    vastus3.innerHTML = '';
    vastus4.innerHTML = '';
    nimi.value = '';
    valik.value = '';
    varv.value = 'black';
    jah.checked = '';
    ei.checked = '';

}
function tekstLugemine() {
    //innerHTML - genireerib vastus kohal id=vastus
    document.getElementById("vastus").innerHTML =
        "Tere paevast, "+
        document.getElementById("nimi").value;
}
function nuppVajatamine(){
    let vastus2 = document.getElementById("vastus2");
    let nimi = document.getElementById("nimi").value;
    let varv = document.getElementById("varv");
    vastus2.innerHTML='Sa tegid nupp vajutamine, '+nimi;
    vastus2.style.color=varv.value;
}
//radionupp vajutamine
function radioNupp(){
    let vastus3 = document.getElementById("vastus3");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let pilt=document.getElementById("pilt");
    if(jah.checked){
        vastus3.innerHTML='Sinu valik on '+jah.value;
        pilt.src='IMG/ProgramLang.png';
    } else if(ei.checked){
        vastus3.innerHTML='Sinu valik on '+ei.value;
        pilt.src='IMG/Art.png';
    } else{
        vastus3.innerHTML='Sa peab midagi valima';
    }
}
function selectValik(){
    let vastus4 = document.getElementById("vastus4");
    let valik = document.getElementById("valik");
    if(valik.selectedIndex!==0){
        //!==0 не нулевая строка
        vastus4.innerHTML = 'Sa oled valinud: '+valik.value;
    }else{
        vastus4.innerHTML="Palun tee lahti ripploend ";
    }
}