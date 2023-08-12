let peekhr =0;
let normhr =0;
let toSLad  =0;
let toSLch =0;
let toFOad =0;
let toFOch =0;
let total =0;

const form = document.getElementById("form");
const currdate =document.getElementById("currdate");
const date = document.getElementById("date");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const incre = document.getElementById("increase");
const incre1 = document.getElementById("increase1");
const incre2 = document.getElementById("increase2");
const incre3 = document.getElementById("increase3");
const incre4 = document.getElementById("increase4");
const slAD = document.getElementById("slAD");
const slCH = document.getElementById("slCH");
const foAD = document.getElementById("foAD");
const foCH = document.getElementById("foCH");
const inf = document.getElementById("inf");
const decr = document.getElementById("decrease");
const decr1 = document.getElementById("decrease1");
const decr2 = document.getElementById("decrease2");
const decr3 = document.getElementById("decrease3");
const decr4 = document.getElementById("decrease4");
const duration = document.getElementById("duration");
const durclear = document.getElementById("ClearDura");
const subbtn = document.getElementById("nxt");

//Current Date to display on the load of page..
function curDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    currdate.innerHTML = `${year} -0${month+1} -0${day}`;
}
addEventListener("load", curDate);

//when date is changed from the date picker
function dateChange(){
    let newdate = date.value;
    currdate.innerHTML = `${newdate}`;
}
date.addEventListener("change", dateChange);

//increment value
function INslAD(){
    let value = parseInt(slAD.value);
    value++;
    slAD.value = value;
}
function INslCH(){
    let value = parseInt(slCH.value);
    value++;
    slCH.value = value;
}
function INfoAD(){
    let value = parseInt(foAD.value);
    value++;
    foAD.value = value;
}
function INfoCH(){
    let value = parseInt(foCH.value);
    value++;
    foCH.value = value;
}
function INinf(){
    let value = parseInt(inf.value);
    value++;
    inf.value = value;
}

incre.addEventListener("click", INslAD);
incre1.addEventListener("click", INslCH);
incre2.addEventListener("click", INfoAD);
incre3.addEventListener("click", INfoCH);
incre4.addEventListener("click", INinf);

//decrement value
function DEslAD(){
    let value = parseInt(slAD.value);
    if(value>0){
    value--;
    slAD.value = value;
    }
}
function DEslCH(){
    let value = parseInt(slCH.value);
    if(value>0){
    value--;
    slCH.value = value;
    }
}
function DEfoAD(){
    let value = parseInt(foAD.value);
    if(value>0){
    value--;
    foAD.value = value;
    }
}
function DEfoCH(){
    let value = parseInt(foCH.value);
    if(value>0){
    value--;
    foCH.value = value;
    }
}
function DEinf(){
    let value = parseInt(inf.value);
    if(value>0){
    value--;
    inf.value = value;
    }
}

decr.addEventListener("click", DEslAD);
decr1.addEventListener("click", DEslCH);
decr2.addEventListener("click", DEfoAD);
decr3.addEventListener("click", DEfoCH);
decr4.addEventListener("click", DEinf);

//timeslots of the stay
function dur(){
    let durval = duration.value;
    if(durval == "slot1"){
        document.getElementById("s1").innerHTML = `7.00 AM - 8.00 AM`;
        normhr += 1;
    }
    else if(durval == "slot2"){
        document.getElementById("s2").innerHTML = `8.00 AM - 9.00 AM`;
        normhr += 1;
    }else if(durval == "slot3"){
        document.getElementById("s3").innerHTML = `9.00 AM - 10.00 AM`;
        peekhr += 1;
    }else if(durval == "slot4"){
        document.getElementById("s4").innerHTML = `10.00 AM - 11.00 AM`;
        peekhr += 1;}
    else if(durval == "slot5"){
        document.getElementById("s5").innerHTML = `11.00 AM - 12.00 PM`;
        peekhr += 1;}
    else if(durval == "slot6"){
        document.getElementById("s6").innerHTML = `12.00 PM - 1.00 PM`;
        peekhr += 1;}
    else if(durval == "slot7"){
        document.getElementById("s7").innerHTML = `1.00 PM - 2.00 PM`;
        normhr += 1;}
    else if(durval == "slot8"){
        document.getElementById("s8").innerHTML = `2.00 PM - 3.00 PM`;
        normhr += 1;} 
    else if(durval == "slot9"){
        document.getElementById("s9").innerHTML = `3.00 PM - 4.00 PM`;
        peekhr += 1;}
    else if(durval == "slot10"){
        document.getElementById("s10").innerHTML = `4.00 PM - 5.00 PM`;
        peekhr += 1;}
    else if(durval == "slot11"){
        document.getElementById("s11").innerHTML = `5.00 PM - 6.00 PM`;
        peekhr += 1;}
}
duration.addEventListener("change", dur);

//total duration
function ToDura(){
    if(normhr>0){
    document.getElementById("d1").innerHTML = `${normhr} Normal Hours`;}
    if(peekhr>0){
    document.getElementById("d2").innerHTML = `${peekhr} Peak Hours`;}
}
duration.addEventListener("change", ToDura);

//SL adult ammount
function PSLad(){
    let np = normhr * 4;
    let pp = peekhr * 6;
    let total = np + pp;
    let slad = parseInt(slAD.value);
    toSLad = total * slad;
    document.getElementById("slAD1").innerHTML = `${toSLad} USD`;
}
duration.addEventListener("change", PSLad);
incre.addEventListener("click", PSLad);
decr.addEventListener("click", PSLad);

//sl child ammount
function PSLch(){
    let np = normhr * 2;
    let pp = peekhr * 3;
    let total = np + pp;
    let slch = parseInt(slCH.value);
    toSLch = total * slch;
    document.getElementById("slCH1").innerHTML = `${toSLch} USD`;
}
duration.addEventListener("change", PSLch);
incre1.addEventListener("click", PSLch);
decr1.addEventListener("click", PSLch);

//foreigner adult ammount
function PFOad(){
    let np = normhr * 10;
    let pp = peekhr * 13;
    let total = np + pp;
    let foad = parseInt(foAD.value);
    toFOad = total * foad;
    document.getElementById("foAD1").innerHTML = `${toFOad} USD`;
}
duration.addEventListener("change", PFOad);
incre2.addEventListener("click", PFOad);
decr2.addEventListener("click", PFOad);

//foreigner child ammount
function PFOch(){
    let np = normhr * 5;
    let pp = peekhr * 8;
    let total = np + pp;
    let foch = parseInt(foCH.value);
    toFOch = total * foch;
    document.getElementById("foCH1").innerHTML = `${toFOch} USD`;
}
duration.addEventListener("change", PFOch);
incre3.addEventListener("click", PFOch);
decr3.addEventListener("click", PFOch);

//infant ammount
function Pinf(){
    document.getElementById("inf1").innerHTML = `Free`;
}
duration.addEventListener("change", Pinf);
incre4.addEventListener("click", Pinf);
decr4.addEventListener("click", Pinf);

//total ammount
function Ptotal(){
    total = toSLad + toSLch + toFOad + toFOch;
    document.getElementById("total").innerHTML = `${total} USD`;
}
duration.addEventListener("change", Ptotal);
incre.addEventListener("click", Ptotal);
incre1.addEventListener("click", Ptotal);
incre2.addEventListener("click", Ptotal);
incre3.addEventListener("click", Ptotal);
incre4.addEventListener("click", Ptotal);
decr.addEventListener("click", Ptotal);
decr1.addEventListener("click", Ptotal);
decr2.addEventListener("click", Ptotal);
decr3.addEventListener("click", Ptotal);
decr4.addEventListener("click", Ptotal);

//clear duration button
function DurClear(){
    document.getElementById("s1").innerHTML = ``;
    document.getElementById("s2").innerHTML = ``;
    document.getElementById("s3").innerHTML = ``;
    document.getElementById("s4").innerHTML = ``;
    document.getElementById("s5").innerHTML = ``;
    document.getElementById("s6").innerHTML = ``;
    document.getElementById("s7").innerHTML = ``;
    document.getElementById("s8").innerHTML = ``;
    document.getElementById("s9").innerHTML = ``;
    document.getElementById("s10").innerHTML = ``;
    document.getElementById("s11").innerHTML = ``;
    document.getElementById("d1").innerHTML = ``;
    document.getElementById("d2").innerHTML = ``;
    normhr = 0;
    peekhr = 0;
    document.getElementById("slAD1").innerHTML = ``;
    document.getElementById("slCH1").innerHTML = ``;
    document.getElementById("foAD1").innerHTML = ``;
    document.getElementById("foCH1").innerHTML = ``;
    document.getElementById("inf1").innerHTML = ``;
    document.getElementById("total").innerHTML = ``;
    nxt.setAttribute('disabled', 'disabled');
}
durclear.addEventListener("click", DurClear);

//Continue button activation
function ButtonActivation(){
    if(RequirdFullfilled()){
        nxt.removeAttribute('disabled');
}
}
function RequirdFullfilled(){
    const rfield = form.querySelectorAll('[required]')
    for(const field of rfield){
        if(!field.value.trim()){
            return false;
        }
    }
    return true;   
}
duration.addEventListener('change', ButtonActivation);

//Local Storage
function SaveData(){
    localStorage.setItem('date', currdate.innerText);
    localStorage.setItem('time', t1.innerText);
    localStorage.setItem('duration', t2.innerText);
    localStorage.setItem('slAD', slAD.value);
    localStorage.setItem('slCH', slCH.value);
    localStorage.setItem('foAD', foAD.value);
    localStorage.setItem('foCH', foCH.value);
    localStorage.setItem('inf', inf.value);
    localStorage.setItem('csla', document.getElementById("slAD1").innerText);
    localStorage.setItem('cslc', document.getElementById("slCH1").innerText);
    localStorage.setItem('cfoa', document.getElementById("foAD1").innerText);
    localStorage.setItem('cfoch', document.getElementById("foCH1").innerText);
    localStorage.setItem('cinf', `Free`);
    localStorage.setItem('totalP', document.getElementById("total").innerText);
}
nxt.addEventListener("click", SaveData);