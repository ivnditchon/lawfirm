// Menu
const menuObj = {
    elem: {
        menuElem: document.querySelector("#menu")
    },
    menuToggle: () => { // sidebar callback function
        menuObj.elem["menuElem"].addEventListener("click", () => {
            sidebarActive();
            if (sidebar.classList.contains("sidebar-active")) {
                return closeBtn();
            }
        });
    },
    menuInit: () => {
        menuObj.menuToggle(sidebarActive); 
    }
};
// Destructuring menu object
const { elem: { menuElem }, menuToggle, menuInit } = menuObj;

// Sidebar
const sidebarObj = {
    elem: {
        sidebar: document.querySelector("#sidebar"),
        close: document.querySelector("#close"),
        body: document.querySelector("body") 
    },
    sidebarActive: () => {
        sidebarObj.elem["sidebar"].classList.add("sidebar-active"); 
        sidebarObj.elem["body"].classList.add("body");
    },
    closeBtn: () => {
        sidebarObj.elem["close"].addEventListener("click", () => {
            return sidebarObj.sidebarHidden();
        });
    },
    sidebarHidden: () => {
        let sidebarClose = sidebarObj.elem["sidebar"].classList.remove("sidebar-active");
        let body = sidebarObj.elem["body"].classList.remove("body");
        return {
            sidebarClose,
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
                return sidebarHidden();
            });
        });
    },
    navObjInit: () => {
        return navObj.linkToggle();
    }
};
//Destructuring navigation obg
const { navObjInit } = navObj;

// Main function 
const main = () => {
    menuInit();
    navObjInit();
}

// Invoke main
main();