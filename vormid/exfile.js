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
        Answer3.style.color='#FF10F0'
    }
}
function selectValik(){
    let Answer5 = document.getElementById("Answer5");
    let kool = document.getElementById("kool");
    if(kool.selectedIndex!==0){
        //!==0 не нулевая строка
        Answer5.innerHTML = 'Sa oled valinud: '+kool.value;
    }else{
        Answer5.innerHTML="Palun tee lahti ripploend ";
    }
}
function colorr(){
    let favcolor = document.getElementById("favcolor");
    let Answer6 = document.getElementById("Answer6");
    Answer6.innerHTML='Ilus varv';
    Answer6.style.color=favcolor.value;
}
function iqlugemione() {
    //innerHTML - genireerib vastus kohal id=vastus
    document.getElementById("AnswerIQ").innerHTML =
        "Suni IQ "+
        document.getElementById("quantity").value;
}
function secretPhrase(){
    document.getElementById("SecretAnswer").innerHTML =
        "Secret information"+
        document.getElementById("pwd").value;
}
function BirthDate(){
    document.getElementById("Answer7").innerHTML =
        "Birth date:"+
        document.getElementById("birthday").value;
}
function emailPost(){
    document.getElementById("Answer8").innerHTML =
        "Email: "+
        document.getElementById("email").value;
}
function phoneNumber(){
    document.getElementById("Answer9").innerHTML =
        "Phone: "+
        document.getElementById("phone").value;
}
function totalinone(){
    nimilugemine()
    vanuslugemione()
    suguvalik()
    selectValik()
    colorr()
    iqlugemione()
    secretPhrase()
    BirthDate()
    emailPost()
    phoneNumber()
}