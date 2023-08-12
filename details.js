let CounCode = document.getElementById("CountryCode");
let phonum = document.getElementById("number");
let sdate = document.getElementById("sum1");
let stime = document.getElementById("sum2");
let sdur = document.getElementById("sum3");
let sslad = document.getElementById("sum4");
let sslch = document.getElementById("sum5");
let sfoad = document.getElementById("sum6");
let sfoch = document.getElementById("sum7");
let sinf = document.getElementById("sum8");
let stotal = document.getElementById("sum9");
let gend = document.getElementById("genDer");
let nxt = document.getElementById("nxt");
let form = document.getElementById("form");
const requiredField = form.querySelectorAll('[required]');
const ner = document.getElementById("name_error");
const numer = document.getElementById("number_error");
const emer = document.getElementById("email_error");
const cemer = document.getElementById("cemail_error");
let fname = document.getElementById("name");
let email = document.getElementById("email");
let cemail = document.getElementById("cemail");

//Phone number with country code
function CountryCode(){ 
    const selecCC = CounCode.value;
    phonum.setAttribute("value", selecCC + "-");
}
CounCode.addEventListener("change", CountryCode);

//Update Summary table
function updateSummary(){
    sdate.innerHTML = localStorage.getItem("date");
    stime.innerHTML = localStorage.getItem("time");
    sdur.innerHTML = localStorage.getItem("duration");
    let slap = localStorage.getItem("csla");
    let slcp = localStorage.getItem("cslc");
    let fap = localStorage.getItem("cfoa");
    let fcp = localStorage.getItem("cfoch");
    let inf = localStorage.getItem("cinf");
    let tp = localStorage.getItem("totalP");
    sslad.innerHTML = `${slap}`;
    sslch.innerHTML = `${slcp}`;
    sfoad.innerHTML = `${fap} `;
    sfoch.innerHTML = `${fcp} `;
    sinf.innerHTML = `${inf}`;
    stotal.innerHTML = `${tp} `;
}
addEventListener("load", updateSummary);

//Button activation
function Requirment(){
    for(const field of requiredField){
        if(!field.value.trim()){
            return false;
        }
    }
    return true;
}
function ButtonActivation(){
    if(Requirment()){
        nxt.removeAttribute('disabled');
    }else {
        nxt.setAttribute('disabled', 'disabled');
    }
}
requiredField.forEach(field => field.addEventListener('input', ButtonActivation)); 
ButtonActivation();

//validating Information and error message handling
function NameErrorHandle(){
  const   funame = fname.value.trim();
    const name = funame.split(" ");

    if(name.length >= 1){
        ner.innerText = " ";
    }else{
        ner.innerText = "Please enter your full name";
    }
    fname.addEventListener("input", NameErrorHandle);
}
fname.addEventListener("input", NameErrorHandle);

function NumberErrorHandle(){
    const   num = number.value.trim();
      const numb = num.split(" ");
  
      if(numb.length >= 1){
          numer.innerText = " ";
      }else{
          numer.innerText = "Add a valid phone number";
      }
      number.addEventListener("input", NumberErrorHandle);
  }
number.addEventListener("input", NumberErrorHandle);

function EmailErrorHandle(){
    const   EMail = email.value.trim();
    const EMAIL = EMail.split("@");
  
      if(EMAIL.length >= 2){
          emer.innerText = "";
      }else{
          emer.innerText = "Add a valid email";
      }
      email.addEventListener("input", EmailErrorHandle);
  }
email.addEventListener("input", EmailErrorHandle);

function CemailErrorHandle(){
    const inemail = email.value.trim();
    const incemail = cemail.value.trim();
      if(inemail === incemail){
          cemer.innerText = " ";
      }else{
          cemer.innerText = "Email does not match";
      }
      cemail.addEventListener("input", CemailErrorHandle);
  }
cemail.addEventListener("input", CemailErrorHandle);

//Storing Information
function SaveData(){
    localStorage.setItem("name", fname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("number", phonum.value);
    localStorage.setItem("gender",gend.value);
}
nxt.addEventListener("click", SaveData);