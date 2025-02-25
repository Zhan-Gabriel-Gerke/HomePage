function puhasta(){
    let Answer1=document.getElementById("Answer1");
    Answer1.innerHTML="";
    let Answer2=document.getElementById("Answer2");
    Answer2.innerHTML="";
    let Answer3=document.getElementById("Answer3");
    Answer3.innerHTML="";
    let Answer4=document.getElementById("Answer4");
    Answer4.innerHTML="";
    let Answer5=document.getElementById("Answer5");
    Answer5.innerHTML="";
    let pois=document.getElementById("pois");
    pois.innerHTML="";
    let tudruk=document.getElementById("tudruk");
    tudruk.innerHTML="";
    let favcolor=document.getElementById("favcolor");
    favcolor.innerHTML="";
    let AnswerIQ=document.getElementById("AnswerIQ");
    AnswerIQ.innerHTML="";
    let SecretAnswer=document.getElementById("SecretAnswer");
    SecretAnswer.innerHTML="";
    let kool=document.getElementById("kool");
    kool.innerHTML="";
    let Answer6=document.getElementById("Answer6");
    Answer6.innerHTML="";
    let Answer7=document.getElementById("Answer7");
    Answer7.innerHTML="";
    let Answer8=document.getElementById("Answer8");
    Answer8.innerHTML="";
    let Answer9=document.getElementById("Answer9");
    Answer9.innerHTML="";
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
let table = document.getElementById("JStable");
let selectedTd = null;
table.onclick = function(event) {
    let td = event.target.closest('td'); // (1)
    if (!td) return; // (2)
    if (!table.contains(td)) return; // (3)
    highlight(td); // (4)
};
function highlight(td) {
    if (selectedTd) { // убрать существующую подсветку, если есть
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // подсветить новый td
}