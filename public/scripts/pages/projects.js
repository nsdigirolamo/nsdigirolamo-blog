import { CardInfo, getAllProjectCardInfoFromDatabase } from "../firebase-utils.js";
import { getPageView } from "../routing-utils.js";

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
    loadAllProjectCards();
}

/**
 * @returns The project list div.
 */
const getProjectList = () => document.getElementById("project-list");

/**
 * Loads all project cards in the database and appends them to the project list.
 */
async function loadAllProjectCards () {
    /** @type {CardInfo[]} */
    const card_infos = await getAllProjectCardInfoFromDatabase();
    for (const card_info of card_infos) {
        getProjectList().appendChild(constructCardFromInfo(card_info));
    }
}

/**
 * Builds an HTML card from the given card information.
 * @param {CardInfo} card_info 
 */
function constructCardFromInfo (card_info) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = card_info.id;
    card.innerHTML = `
        <h1>${card_info.title}<h1>
        <h2>${new Date(card_info.date_published).toDateString()}</h2>
        <p>${card_info.summary}</p>
    `;
    return card;
}

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
