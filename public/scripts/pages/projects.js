import { storage } from "../firebase-utils.js";
import { getPageView } from "../routing-utils.js";

import { ref, list, getBlob } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";

/**
 * Loads the elements required for the projects page.
 * @param {string[]} path_segments The page's path segments
 */
export function loadProjectsElements (path_segments) {
    getPageView().innerHTML = `
        <h1>Projects</h1>
        <div id="project-list">
        <div>
    `;
    getPosts();
}

async function getPosts () {
    const posts = (await list(ref(storage, "/project-posts"))).items;
    for (const storage_reference of posts) {
        getBlob(storage_reference)
            .then(blob_result => blob_result.text())
            .then(text_result => console.log(text_result));
    }
}
