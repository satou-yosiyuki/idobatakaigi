import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVp0KYS57cLiX70IXCqO3XiPUG8ilz1PM",
  authDomain: "idobatakaigi-with-ham-b33a5.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-b33a5",
  storageBucket: "idobatakaigi-with-ham-b33a5.appspot.com",
  messagingSenderId: "1098716467010",
  appId: "1:1098716467010:web:6f018510102ca43f6342db",
};
// リファレンス意味言語に関する事実の情報倉庫 よく意味わからない
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage=({name,text})=>{
  messageRef.push({name,text});
}
