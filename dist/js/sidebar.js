class Sidebar {

    constructor() {}

    sidebarActive(sidebar) {
        return sidebar.classList.add("sidebar-active");
    }

    sidebarHidden(sidebar) {
        return sidebar.classList.remove("sidebar-active");
    }

    sidebarCloseBtn(closeBtn, sidebar, body) {
        closeBtn.addEventListener("click", () => {
            this.sidebarHidden(sidebar);
            this.scrollActive(body)
        });
    }
    
    linkToggle(navLinks, sidebar, body) {
        Array.from(navLinks, (link) => {
            link.addEventListener("click", () => {
                this.sidebarHidden(sidebar);
                this.scrollActive(body)
            });
        });
    }

    scrollHide(body) { // Prevent from srolling the body 
        return body.classList.add("body");
    }

    scrollActive(body) {
        return body.classList.remove("body");
    }

}

export default Sidebar;