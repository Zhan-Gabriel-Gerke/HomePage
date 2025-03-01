function Multiplication(quantity, price){
    return (quantity*price).toFixed(1);
    //toFixed(1) - 1 chislo posle zapjatoi
    //mathfloar - rovnie chisla
}
const RE_Exchange_rate=0.011;
const UE_Exchange_rate=0.96;
const ER_Exchange_rate=92.73;
const EU_Exchange_rate=1.04;

function Current_Exchange(){
    let Answer=document.getElementById("Answer");
    let RE=document.getElementById("RE");
    let UE=document.getElementById("UE");
    let ER=document.getElementById("ER");
    let EU=document.getElementById("EU");
    let quantity=document.getElementById("quantity")
    if(RE.checked){
        Answer.innerHTML=Multiplication(quantity.value, RE_Exchange_rate)+" Euro"
    }else if(UE.checked){
        Answer.innerHTML=Multiplication(quantity.value, UE_Exchange_rate)+" Euro"
    }else if (ER.checked){
        Answer.innerHTML = Multiplication(quantity.value, ER_Exchange_rate) + " Rubles"
    }else if (EU.checked){
        Answer.innerHTML = Multiplication(quantity.value, EU_Exchange_rate) + " Dollars"
    }else {
        Answer.innerHTML="You have to choose some of radio buttons"
    }

}