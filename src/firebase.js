// https://www.tiktok.com/@myleshass/video/6886569505942785285?lang=en
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCvP_OM39aBmqJwF_Nhsf4IKjQNswTeY1E",
    authDomain: "tiktok-clone-eb889.firebaseapp.com",
    databaseURL: "https://tiktok-clone-eb889.firebaseio.com",
    projectId: "tiktok-clone-eb889",
    storageBucket: "tiktok-clone-eb889.appspot.com",
    messagingSenderId: "65041789560",
    appId: "1:65041789560:web:778b5140486cc6d0d7338d",
    measurementId: "G-C7L7CV3PZP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;