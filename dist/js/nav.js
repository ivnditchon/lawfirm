import Sidebar from "./sidebar.js";

class Nav {
    
    constructor(navLinks) {
        this._navLinks = navLinks;
    }

    toggle() {
        Array.from(this._navLinks, (link) => {
            link.addEventListener("click", () => {
                let sidebar = new Sidebar(document.querySelector("#sidebar"));
                sidebar.sidebarHidden();
            });
        });
    }

}

export default Nav;