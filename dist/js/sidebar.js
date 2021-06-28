class Sidebar {

    constructor(sidebar, closeBtn) {
        this._sidebar = sidebar;
        this._closeBtn = closeBtn;
    }

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

}

export default Sidebar;