import { getPageView } from "../routing-utils.js";

/**
 * Loads the elements required for the home page.
 * @param {string[]} path_segments The page's path segments
 */
export function loadHomeElements (path_segments) {
    getPageView().innerHTML = `
        <h1>Nicholas DiGirolamo</h1>
        <ul id="socials">
            <li><a class="nav-element" href="mailto:nsdigirolamo@gmail.com">Email</a></li>
            <li><a class="nav-element" href="https://github.com/nsdigirolamo">Github</a></li>
            <li><a class="nav-element" href="https://linkedin.com/in/nsdigirolamo/">LinkedIn</a></li>
            <li><a class="nav-element" href="https://hachyderm.io/@nsdigirolamo">Mastodon</a></li>
            <li><a class="nav-element" href="https://reddit.com/user/nsdigirolamo/">Reddit</a></li>
            <li><a class="nav-element" href="https://youtube.com/@nsdigirolamo">YouTube</a></li>
        </ul>
    `;
}