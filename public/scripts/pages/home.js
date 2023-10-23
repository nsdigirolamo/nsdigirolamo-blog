import { getPageView } from "../routing-utils.js";

/**
 * Loads the elements required for the home page.
 * @param {string[]} path_segments The page's path segments
 */
export function loadHomeElements (path_segments) {
    getPageView().innerHTML = `
        <div id="home">
            <h1>Nicholas DiGirolamo</h1>
            <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a class="nav-element" href="mailto:nsdigirolamo@gmail.com">Email</a></li>
                <li><a class="nav-element" href="https://github.com/nsdigirolamo">Github</a></li>
                <li><a class="nav-element" href="https://linkedin.com/in/nsdigirolamo/">LinkedIn</a></li>
            </ul>
            <article id="about">
                <p>
                    Welcome to my website. I'm a Computer Science undergrad at the University of Delaware 
                    with a concentration in Systems and Networks. I'm also currently looking for full-time 
                    software engineering positions.
                </p>
                <p>
                    I'm going to be using this site as a place to show off my personal
                    projects, to hold research for potential future projects, and to archive
                    cool things I find on the internet.
                </p>
            </article>
        </div>
    `;
}