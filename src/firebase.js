import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhpGyKw4tb20KAxnVDT_p4GfbHTD-N8Ns",
  authDomain: "linkedin-clone-yt-2dffb.firebaseapp.com",
  projectId: "linkedin-clone-yt-2dffb",
  storageBucket: "linkedin-clone-yt-2dffb.appspot.com",
  messagingSenderId: "714398187760",
  appId: "1:714398187760:web:b7cefc20405f28c767c235",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
