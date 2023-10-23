import { getPageView } from "../routing-utils.js";

/**
 * Loads the elements required for the posts page.
 * @param {string[]} path_segments The page's path segments
 */
export function loadPostsElements (path_segments) {
    getPageView().innerHTML = `
        <h1>Nicholas DiGirolamo</h1>
        <h2>Posts</h2>
    `;
}