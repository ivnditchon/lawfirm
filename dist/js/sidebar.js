class Sidebar {

    // Private properties
    constructor(sidebar, closeBtn, navLinks) {
        this._sidebar = sidebar;
        this._closeBtn = closeBtn;
        this._navLinks = navLinks;
    }

    // Public method
    get sidebar() {
        return this._sidebar;
    }

    sidebarActive() {
        let active = this._sidebar.classList.add("sidebar-active");
        return active;
    }

    sidebarHidden() {
        let hidden = this._sidebar.classList.remove("sidebar-active");
        return hidden;
    }

    sidebarCloseBtn() {
        this._closeBtn.addEventListener("click", () => this.sidebarHidden());
    }
    
    linkToggle() {
        Array.from(this._navLinks, (link) => {
            link.addEventListener("click", () => this.sidebarHidden());
        });
    }

}

export default Sidebar;