import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function load(){
const snap=await getDocs(collection(db,"events"));
snap.forEach(d=>{
eventsList.innerHTML+=`<div>${d.data().title} - ${d.data().date}</div>`;
});
}
load();