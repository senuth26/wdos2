const Suname = document.getElementById('s1');
const Sudate = document.getElementById('s2');
const Sutime = document.getElementById('s3');
const Sudur = document.getElementById('s4');
const SuMob = document.getElementById('s5');
const SuEmail = document.getElementById('s6');
const SuGen =   document.getElementById('s7');
const SuSlad = document.getElementById('s8');
const SuSlch = document.getElementById('s9');
const SuFoad = document.getElementById('s10');
const SuFoch = document.getElementById('s11');
const SuInf = document.getElementById('s12');
const SuTotal = document.getElementById('s13');
const paybtn = document.getElementById('pay');
const cardnum = document.getElementById('cardnumber');
const nuere = document.getElementById('cardnum_error');
const cardname = document.getElementById('cardname');
const cnere = document.getElementById('cardname_error');
const cardexp = document.getElementById('expdate');
const expere = document.getElementById('expdate_error');
const cardcvv = document.getElementById('cvv');
const cvvere = document.getElementById('cvv_error');
const form = document.getElementById('form3');
const requiredField = form.querySelectorAll('[required]');

//Update Summary Table
function updateSummary(){
    Suname.innerText = localStorage.getItem("name");
    Sudate.innerText = localStorage.getItem("date");
    Sutime.innerText = localStorage.getItem("time");
    Sudur.innerText = localStorage.getItem("duration");
    SuMob.innerText = localStorage.getItem("number");
    SuEmail.innerText = localStorage.getItem("email");
    SuGen.innerText = localStorage.getItem("gender");
    SuSlad.innerText = localStorage.getItem("csla");
    SuSlch.innerText = localStorage.getItem("cslc");
    SuFoad.innerText = localStorage.getItem("cfoa");
    SuFoch.innerText = localStorage.getItem("cfoch");
    SuInf.innerText = localStorage.getItem("cinf");
    SuTotal.innerText = localStorage.getItem("totalP");

    //button
    paybtn.innerText = `Pay ${localStorage.getItem("totalP")}`; 
}
window.addEventListener('load', updateSummary);

//validating Information and error message handling
function CardNumberHandling(){
    let digicarnum = cardnum.value.length;
    if(digicarnum == 16){
        nuere.innerText = " ";
    }else{
        nuere.innerText = "Card Number must be 16 digits";
    }
    let regex = /^[0-9]{16}$/;
    if(regex.test(cardnum.value)){
        nuere.innerText = " ";
    }else{
        nuere.innerText = "Card Must only contain numbers";
    }
}
cardnum.addEventListener('input', CardNumberHandling);

function CardNameHandling(){
    let regex = /^[a-zA-Z ]{2,30}$/;
    if(regex.test(cardname.value)){
        cnere.innerText = " ";
    }else{
        cnere.innerText = "Card Name must be 2-30 characters long";
    }
}
cardname.addEventListener('input', CardNameHandling);

function CardExpHandling(){
    
    if(cardexp.value != ""){
        expere.innerText = " ";
    }else{
        expere.innerText = "Card Expiry must be in MM/YY format";
    }
}
cardexp.addEventListener('input', CardExpHandling);

function CardCvvHandling(){
    if(cardcvv.value != ""){
        cvvere.innerText = " ";}
    else{
        cvvere.innerText = "Card CVV must be 3 digits";
    }
}
cardcvv.addEventListener('input', CardCvvHandling);

//Button activation
function RequiredFullFilled(){
    for(const field of requiredField){
        if(!field.value.trim()){
            return false;
        }
    }
    return true;
}
function ButtonActivation(){
    if(RequiredFullFilled()){
        paybtn.removeAttribute('disabled');
    }else
    {
        paybtn.setAttribute('disabled', true);
    }
}
requiredField.forEach(field => field.addEventListener('input', ButtonActivation));
