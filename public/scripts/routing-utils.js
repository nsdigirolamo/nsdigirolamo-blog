import { loadHomeElements } from "./pages/home.js"
import { loadPostsElements } from "./pages/posts.js";
import { loadProjectsElements } from "./pages/projects.js";

const pathMap = new Map([
    ["home", loadHomeElements],
    ["posts", loadPostsElements],
    ["projects", loadProjectsElements]
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
export const replacePath = (path) => history.replaceState(path, "", path);

/**
 * Clears the page view.
 */
export const clearPageView = () => getPageView().innerHTML = "";

/**
 * Handles loading elements to the view depending on the current URL path.
 */
export function routeCurrentPath () {

    clearPageView();

    const path_segments = document.location.pathname.split("/");
    const first_path = path_segments[1];

    let loadFunction = (path_segments) => {
        replacePath("/home");
        loadHomeElements();
    }

    if (pathMap.has(first_path)) {
        loadFunction = pathMap.get(first_path);
    }

    loadFunction(path_segments);
}

addEventListener("DOMContentLoaded", routeCurrentPath);
addEventListener("popstate", routeCurrentPath);