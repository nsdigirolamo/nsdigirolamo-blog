import { getPageView } from "../routing-utils.js";

/**
 * Loads the elements required for the posts page.
 * @param {string[]} path_segments The page's path segments
 */
export function loadBlogElements (path_segments) {
    getPageView().innerHTML = `
        <h1>Nicholas DiGirolamo</h1>
        <h2>Blog</h2>
    `;
}