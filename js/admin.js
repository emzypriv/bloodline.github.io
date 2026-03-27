import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addMember=()=>addDoc(collection(db,"members"),{name:newMember.value});
window.addJobType=()=>addDoc(collection(db,"job_types"),{name:newJob.value});