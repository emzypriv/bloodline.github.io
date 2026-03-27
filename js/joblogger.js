import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let all=[];

async function load(){
const users=await getDocs(collection(db,"members"));
const jobs=await getDocs(collection(db,"job_types"));
users.forEach(d=>user.innerHTML+=`<option>${d.data().name}</option>`);
jobs.forEach(d=>job.innerHTML+=`<option>${d.data().name}</option>`);
loadLogs();
}

async function loadLogs(){
const snap=await getDocs(collection(db,"jobs"));
all=[];
snap.forEach(d=>all.push(d.data()));
render(all);
}

function render(data){
const t=document.querySelector("#jobTable tbody");
t.innerHTML="";
data.forEach(l=>{
t.innerHTML+=`<tr><td>${l.user}</td><td>${l.jobType}</td><td>£${l.payout}</td></tr>`;
});
}

window.filterLogs=()=>render(all.filter(l=>l.user.toLowerCase().includes(searchUser.value.toLowerCase())));

window.logJob=async()=>{
await addDoc(collection(db,"jobs"),{user:user.value,jobType:job.value,payout:Number(payout.value)});
loadLogs();
};

load();