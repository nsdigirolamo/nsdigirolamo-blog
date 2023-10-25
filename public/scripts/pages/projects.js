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
    getPosts("/project-posts").catch(e => console.log(e));
}

/** @returns The project list div. */
const getProjectList = () => document.getElementById("project-list");

/**
 * Converts markdown text to an HTML article.
 * @param {string} markdown_text 
 * @returns {HTMLElement} An article containing the converted markdown text.
 */
function getArticleFromMarkdown (markdown_text) {

    const converter = new showdown.Converter();

    const article = document.createElement("article");
    article.innerHTML = converter.makeHtml(markdown_text);

    return article
}

/**
 * Converts markdown text to an HTML card. Assumes the first line starts with a single '#' character.
 * @param {string} markdown_text 
 * @returns {HTMLElement} A div containing information about the HTML text.
 */
function getCardFromMarkdown (markdown_text) {

    const lines = markdown_text.split("\n");
    const title = lines[0].slice(1, lines[0].length).trim();

    const card = document.createElement("div");
    card.className = "card";
    card.textContent = title;

    return card;
}

/**
 * Retrieves posts from storage.
 * @param {string} url The URL from which to retrieve the posts.
 * @returns {Promise<string[]>}
 */
export async function getPosts(url) {

    let texts = [];

    /** @type {ListResult} */
    const storage_references = await list(ref(storage, url))
        .catch(e => { throw new Error(e) });

    for (const ref of storage_references.items) {

        const blob = await getBlob(ref)
            .catch(e => { throw new Error(e) });

        const text = await blob.text()
            .catch(e => { throw new Error(e) });

        getProjectList().appendChild(getCardFromMarkdown(text));
    }

    return texts;
}
