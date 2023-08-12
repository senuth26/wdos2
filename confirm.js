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
}
window.addEventListener('load', updateSummary);