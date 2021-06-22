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
            sidebarObj.sidebarHidden();
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
            btn.addEventListener("click", () => {
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