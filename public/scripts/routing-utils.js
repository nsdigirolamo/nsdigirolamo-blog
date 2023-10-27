import { loadHomeElements } from "./pages/home.js"
import { loadBlogElements } from "./pages/blog.js";
import { loadProjectsElements } from "./pages/projects.js";
import { loadTextElements } from "./pages/texts.js";

const pathMap = new Map([
    ["blog", loadBlogElements],
    ["home", loadHomeElements],
    ["projects", loadProjectsElements],
    ["texts", loadTextElements]
]);

/**
 * @returns {HTMLElement} The page view.
 */
export const getPageView = () => document.getElementById("page-view");

/**
 * Pushes the given URL path to the user's history and changes the URL to the given path.
 * @param {string} path
 */
export const pushPath = (path) => history.pushState(path, "", path);

/**
 * Changes the URL to the given path without pushing to the user's history.
 * @param {string} path
 */
const replacePath = (path) => history.replaceState(path, "", path);

/**
 * Clears the page view.
 */
const clearPageView = () => getPageView().innerHTML = "";

/**
 * Sets the navbar's visibility.
 * @param {boolean} is_visible 
 */
function setNavbarVisibility (is_visible) {
    const visibility = is_visible ? "visible" : "hidden"; 
    document.getElementById("navbar").style.visibility = visibility; 
};

/**
 * Handles loading elements to the view depending on the current URL path.
 */
export function routeCurrentPath () {

    clearPageView();

    const path_segments = document.location.pathname.split("/");
    const first_path = path_segments[1];

    if (pathMap.has(first_path)) {

        const loadFunction = pathMap.get(first_path);
        setNavbarVisibility(first_path != "home");
        loadFunction(path_segments);

    } else {

        replacePath("/home");
        routeCurrentPath();

    }
}

addEventListener("DOMContentLoaded", routeCurrentPath);
addEventListener("popstate", routeCurrentPath);