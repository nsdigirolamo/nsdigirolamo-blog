import { getPageView } from "../routing-utils.js";

/**
 * Loads the elements required for the projects page.
 * @param {string[]} path_segments The page's path segments
 */
export function loadProjectsElements (path_segments) {
    getPageView().innerHTML = `
        <h1>Nicholas DiGirolamo</h1>
        <h2>Projects</h2>
    `;
}