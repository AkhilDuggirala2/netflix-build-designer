import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcSdtM5HnPHHTtCrYfdVgI_T1_LRhrFus",
  authDomain: "netflix-designer.firebaseapp.com",
  projectId: "netflix-designer",
  storageBucket: "netflix-designer.appspot.com",
  messagingSenderId: "1125918325",
  appId: "1:1125918325:web:13674adb330d9d81bdba3c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
