import Scroll from "./scroll.js"; // Scroll class

export default class Sidebar {

    constructor(sidebar, navLinks, closeBtn, body) {
        this._sidebar = sidebar;
        this._navLinks = navLinks;
        this._closeBtn = closeBtn;
        this._body = body;
    }

    get sidebar() {
        return this._sidebar;
    }

    set sidebarActive(active) {
        return this._sidebar.classList.add(active);
    }

    set sidebarHidden(hidden) {
        return this._sidebar.classList.remove(hidden);
    }

    sidebarCloseBtn() {
        this._closeBtn.addEventListener("click", () => {
            this.sidebarHidden = "sidebar-active";
            let scroll = new Scroll(document.querySelector("body"));
            scroll.scrollActive = "body";
        });
    }
    
    linkToggle() {
        Array.from(this._navLinks, (link) => {
            link.addEventListener("click", () => {
                this.sidebarHidden = "sidebar-active";
                this.scrollActive()
            });
        });
    }

    scrollHide() { // Prevent from srolling the body 
        return this._body.classList.add("body");
    }

    scrollActive() {
        return this._body.classList.remove("body");
    }

}

