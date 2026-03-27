import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let all=[]; let profit=0;

async function load(){
const users=await getDocs(collection(db,"members"));
users.forEach(d=>user.innerHTML+=`<option>${d.data().name}</option>`);
loadLogs();
}

window.calculate=()=>{
profit=amount.value-cost.value;
const cut=profit*(percent.value/100);
result.innerText=`Profit £${profit} | Cut £${cut}`;
};

window.saveWash=async()=>{
await addDoc(collection(db,"wash_logs"),{user:user.value,amount:+amount.value,cost:+cost.value,profit});
loadLogs();
};

async function loadLogs(){
const snap=await getDocs(collection(db,"wash_logs"));
all=[]; snap.forEach(d=>all.push(d.data()));
render(all);
}

function render(data){
const t=document.querySelector("#washTable tbody");
t.innerHTML="";
data.forEach(l=>{
t.innerHTML+=`<tr><td>${l.user}</td><td>${l.profit}</td></tr>`;
});
}

window.filterWash=()=>render(all.filter(l=>l.user.toLowerCase().includes(searchWash.value.toLowerCase())));

load();