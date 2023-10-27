import { getTextFromStorage } from "../firebase-utils.js";
import { getPageView, pushPath } from "../routing-utils.js";

/**
 * Loads the elements required for a text page.
 * @param {string[]} path_segments The page's path segments
 */
export function loadTextElements (path_segments) {
    getPageView().innerHTML = `
        <article id="text-view">
        </article>
    `;
    loadText(`gs://nsdigirolamo-blog.appspot.com/${path_segments[2]}/${path_segments[3]}.md`).catch(e => {
        console.log(e);
    });
}

/**
 * @returns The text view div.
 */
const getTextView = () => document.getElementById("text-view");

/**
 * Loads the text for the file at the given url.
 * @param {string} url
 */
async function loadText (url) {
    const text = await getTextFromStorage(url)
        .catch(e => { throw new Error(e)});
    getTextView().appendChild(getArticleFromMarkdown(text));
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
