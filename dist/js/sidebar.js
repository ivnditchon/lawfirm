class Sidebar {

    constructor(sidebar, navLinks, closeBtn, body) {
        this._sidebar = sidebar;
        this._navLinks = navLinks;
        this._closeBtn = closeBtn;
        this._body = body;
    }

    get sidebar() {
        return this._sidebar;
    }

    sidebarActive() {
        return this._sidebar.classList.add("sidebar-active");
    }

    sidebarHidden() {
        return this._sidebar.classList.remove("sidebar-active");
    }

    sidebarCloseBtn() {
        this._closeBtn.addEventListener("click", () => {
            this.sidebarHidden();
            this.scrollActive()
        });
    }
    
    linkToggle() {
        Array.from(this._navLinks, (link) => {
            link.addEventListener("click", () => {
                this.sidebarHidden();
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

export default Sidebar;