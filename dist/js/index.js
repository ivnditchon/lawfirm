// Using module pattern 
import Sidebar from "./sidebar.js"; // Sidebar class
import Scroll from "./scroll.js"; // Scroll class

class Index {

    // Private properties
    constructor(indexParam = {
        menuBtn: document.querySelector("#menu"), 
        appBtn: document.querySelectorAll("#appointment-btn"), 
        indexBody: document.querySelector("body"),
        sidebar: document.querySelector("#sidebar"),
        navLink: document.querySelectorAll("#nav-link"),
        sidebarCloseBtn: document.querySelector("#close")}) {
        this._menuBtn = indexParam.menuBtn;
        this._appointmentBtn = indexParam.appBtn;
        this._body = indexParam.indexBody;
        this._sidebar = indexParam.sidebar;
        this._navLink = indexParam.navLink;
        this._sidebarCloseBtn = indexParam.sidebarCloseBtn;     
    }

    // Menu button toggle
    menuToggle() { 
        this._menuBtn.addEventListener("click", (e) =>  {
            e.preventDefault();
            let sidebar = new Sidebar(this._sidebar, 
                                      this._navLink, 
                                      this._sidebarCloseBtn, 
                                      this._body); // Object instance of Sidebar class
            sidebar.sidebarActive = "sidebar-active";
            
            if (sidebar.sidebar.classList.contains("sidebar-active")) {
                let scroll = new Scroll(this._body);
                scroll.scrollHidden = "body";
                sidebar.linkToggle();
                sidebar.sidebarCloseBtn();  
            }

        });
    }

    // Set appointment form
    setAppForm() { 
        Array.from(this._appointmentBtn, (btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "appointment__form.html","_self";
            });
        });
    }

}

const index = new Index();

index.menuToggle();
index.setAppForm();

/*
class Home {

    constructor(menuBtn, sidebar, closeBtn, navLinks, appBtn) {
        this._menuBtn = menuBtn;
        this._sidebar = sidebar;
        this._closeBtn = closeBtn;
        this._navLinks = navLinks;
        this._appBtn = appBtn;
    }
    
    // Menu toggle
    menuToggle() {
        this._menuBtn.addEventListener("click", () => {
            this.sidebarActive();
            if(this._sidebar.classList.contains("sidebar-active")) {
                return this.sidebarCloseBtn();
            }
        });
    }

    // Sidebar active
    sidebarActive() {
        return this._sidebar.classList.add("sidebar-active");
    }

    // Sidebar hidden 
    sidebarHidden() {
        return this._sidebar.classList.remove("sidebar-active");
    }

    // Sidebar close button 
    sidebarCloseBtn() {
        this._closeBtn.addEventListener("click", () => {
            return this.sidebarHidden();
        });
    }

    // Navigation 
    setNav() {
        Array.from(this._navLinks, (links) => {
            links.addEventListener("click", () => this.setSidebarHidden());
        });
    }

    // Appointment button
    setAppBtn() {
        Array.from(this._appBtn, (appBtn) => {
            appBtn.addEventListener("click", () => window.location.href = "appointment__form.html","_self");
        })
    }

    
}

let home = new Home(document.querySelector("#menu"), document.querySelector("#sidebar"), document.querySelector("#close"), document.querySelectorAll("#nav-link"), document.querySelectorAll("#appointment-btn"));

*/

/* USING OBJECT LITERALS

// Menu
const menuObj = {
    elem: {
        menuElem: document.querySelector("#menu")
    },
    menuToggle: () => { 
        menuObj.elem["menuElem"].addEventListener("click", () => {
            sidebarActive();
            if (sidebar.classList.contains("sidebar-active")) {
                closeBtn();
            }
        });
    },
    menuInit: () => {
        menuObj.menuToggle(); 
    }
};
// Destructuring menu object
const { elem: { menuElem }, menuToggle, menuInit } = menuObj;

// Sidebar
const sidebarObj = {
    elem: {
        sidebar: document.querySelector("#sidebar"),
        overlay: document.querySelector("#overlay"),
        close: document.querySelector("#close"),
        body: document.querySelector("body") 
    },
    sidebarActive: () => {
        let sidebarShow = sidebarObj.elem["sidebar"].classList.add("sidebar-active"); 
        let overlay = sidebarObj.elem["overlay"].classList.add("overlay-active");
        let body = sidebarObj.elem["body"].classList.add("body");
        return {
            sidebarShow,
            overlay,
            body
        };
    },
    closeBtn: () => {
        sidebarObj.elem["close"].addEventListener("click", () => {
            return sidebarObj.sidebarHidden();
        });
    },
    sidebarHidden: () => {
        let sidebarClose = sidebarObj.elem["sidebar"].classList.remove("sidebar-active");
        let overlay = sidebarObj.elem["overlay"].classList.remove("overlay-active");
        let body = sidebarObj.elem["body"].classList.remove("body");
        return {
            sidebarClose,
            overlay,
            body
        };
    }
};
// Destructuring sidebar object
const { elem: { sidebar }, sidebarActive, closeBtn, sidebarHidden } = sidebarObj;

// Navigation 
const navObj = {
    elem: {
        links: document.querySelectorAll("#nav-link")
    },
    linkToggle: () => {
        Array.from(navObj.elem["links"], (link) => {
            link.addEventListener("click", () => {
                sidebarHidden();
            });
        });
    },
    navObjInit: () => {
        return navObj.linkToggle();
    }
};
//Destructuring navigation obg
const { navObjInit } = navObj;

// Appointment button
const appBtn = {
    elem: {
        btn: document.querySelectorAll("#appointment-btn")
    },
    btnToggle: () => {
        Array.from(appBtn.elem["btn"], (btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                return window.location.href = "appointment__form.html","_self";
            });
        });
    },
    appBtnInit: () => {
        appBtn.btnToggle();
    }
};
// Destructuring appointment button
const { appBtnInit } = appBtn;

// Main function 
const main = () => {
    menuInit();
    navObjInit();
    appBtnInit();
}

// Invoke main
main();
*/