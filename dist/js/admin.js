// Object literals
const admin = {

    // DOM elemenst
    elem: {
        menu: document.querySelector("#menu"),
        sidebar: document.querySelector("#sidebar"),
        sidebarHeader: document.querySelector("#sidebar-header"),
        sidebarLogo: document.querySelector("#sidebar-logo"),
        navLink: document.querySelectorAll("#link-name"),
        navDropdownIcon: document.querySelectorAll("#dropdown-icon"),
        navCases: document.querySelector("#cases"),
        navPayments: document.querySelector("#payments"),
        overlay: document.querySelector("#overlay")
    },

    // Menu toggle
    menuToggle: () => {
        admin.elem["menu"].addEventListener("click", () => {
            admin.sidebarActive();
            admin.sidebarHeaderActive();
            admin.navLinkActive();
            admin.overlayActive();

            if (Array.from(admin.elem["navLink"], linkName => linkName.classList.contains("admin-link-name-active"))) {
                Array.from(admin.elem["navDropdownIcon"], icon => icon.addEventListener("click", e => {
                    
                    if (e.target.classList.contains("cases")) {
                        admin.elem["navCases"].classList.toggle("admin-dropdown-active");
                    }

                    if (e.target.classList.contains("payments")) {
                        admin.elem["navPayments"].classList.toggle("admin-dropdown-active");
                    }

                }));
            } 

        });
    },

    // Sidebar active
    sidebarActive: () => {
        admin.elem["sidebar"].classList.toggle("admin-sidebar-active");
    },

    // Sidebar header active
    sidebarHeaderActive: () => {
        admin.elem["sidebarHeader"].classList.toggle("admin-sidebar-header-active");
        admin.elem["sidebarLogo"].classList.toggle("admin-sidebar-logo-active");
    },

    // Navlink active
    navLinkActive: () => {
        Array.from(admin.elem["navLink"], (linkName) => linkName.classList.toggle("admin-link-name-active"));
    },

    // Overlay active
    overlayActive: () => admin.elem["overlay"].classList.toggle("admin-overlay-active"),

    // Initializer
    init: () => admin.menuToggle()

};
// Destructuring object
const { init } = admin;

// Main function
const main = () => init();

// Invoke main function
main();