function puhasta(){

}
function nimilugemine() {
    //innerHTML - genireerib vastus kohal id=vastus
    document.getElementById("Answer1").innerHTML =
        "Tere paevast, "+
        document.getElementById("nimi").value;
}
function vanuslugemione() {
    //innerHTML - genireerib vastus kohal id=vastus
    document.getElementById("Answer2").innerHTML =
        "Suni vanus "+
        document.getElementById("vanus").value;
}
function suguvalik(){
    let Answer3 = document.getElementById("Answer3");
    let pois=document.getElementById("pois");
    let tudruk=document.getElementById("tudruk");
    if(pois.checked){
        Answer3.innerHTML='Palju onne teil on '+pois.value;
        Answer3.style.color='blue'
    } else if(tudruk.checked){
        Answer3.innerHTML='Teil on '+tudruk.value;
        Answer3.style.color='purple'
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