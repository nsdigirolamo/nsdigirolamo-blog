import { home_elements } from "./pages/home.js"

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

    const path = document.location.pathname;
    const segments = path.split("/");

    if (segments[1] == "") {
        getPageView().innerHTML = home_elements;
    } else {
        getPageView().innerHTML = "oops!";
    }
}

addEventListener("DOMContentLoaded", routeCurrentPath);
addEventListener("popstate", routeCurrentPath);