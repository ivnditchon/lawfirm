import Sidebar from "./sidebar.js";
import Nav from "./nav.js";

class Menu {
    
    constructor(menuBtn) {
        this._menuBtn = menuBtn;
    }

    toggle() {
        this._menuBtn.addEventListener("click", (e) =>  {
            e.preventDefault();
            let sidebar = new Sidebar(document.querySelector("#sidebar"), document.querySelector("#close"));
            sidebar.sidebarActive();

            if (sidebar.sidebar.classList.contains("sidebar-active")) {
                let nav = new Nav(document.querySelectorAll("#nav-link"));
                nav.toggle();
                sidebar.sidebarCloseBtn();
            }
        });
    }

}

export default Menu;