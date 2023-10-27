import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { get, getDatabase, ref as databaseRef } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getBlob, getStorage, ref as storageRef } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";

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

/** @type {Database} */
const database = getDatabase(app);

/**
 * Constructs a new object for holding information for cards.
 * @param {Date} date The date the text was published. 
 * @param {string} id The id of the text the card refers to. Will be shown in the URL.
 * @param {string} summary The summary of the text the card refers to.
 * @param {string} title The title of the text to be shown to users.
 * @return {CardInfo}
 */
export class CardInfo {
    constructor (date, id, summary, title) {
        this.date = date.getTime();
        this.id = id;
        this.summary = summary;
        this.title = title;
    }
}

/**
 * Returns card information objects for all of the projects in the database.
 * @returns {Promise<CardInfo[]>}
 */
export async function getAllProjectCardInfoFromDatabase () {
    const db_ref = databaseRef(database, "/projects");
    const data_snapshot = await get(db_ref).catch(e => { throw new Error(e) });
    const card_infos = Object.values(data_snapshot.val());
    return card_infos;
}

/**
 * Retreives the contents of a text file at the given url.
 * @param {string} url 
 * @returns {Promise<string>}
 */
export async function getTextFromStorage (url) {
    const storage_ref = storageRef(storage, url);
    const blob = await getBlob(storage_ref)
        .catch(e => { throw new Error(e) });
    const text = await blob.text()
        .catch(e => { throw new Error(e) });
    return text;
}
