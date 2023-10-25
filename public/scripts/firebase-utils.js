import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBt3H6-xJoSpjTFR3yPlo77fixKO5zrwZs",
    authDomain: "nsdigirolamo-blog.firebaseapp.com",
    databaseURL: "https://nsdigirolamo-blog-default-rtdb.firebaseio.com",
    projectId: "nsdigirolamo-blog",
    storageBucket: "nsdigirolamo-blog.appspot.com",
    messagingSenderId: "150745418782",
    appId: "1:150745418782:web:dca6dd5db998aa2b41b20f",
    measurementId: "G-RCX63BZ8XT"
};

/** @type {App} */
const app = initializeApp(firebaseConfig);
/** @type {FirebaseStorage} */
export const storage = getStorage(app);
