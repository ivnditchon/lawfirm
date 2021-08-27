// Using Object literals
const admin = {

    // DOM elements
    elem: {
        body: document.querySelector("body"),
        sidebarMenu: document.querySelector("#menu"),
        sidebar: document.querySelector("#sidebar"),
        sidebarHeader: document.querySelector("#sidebar-header"),
        sidebarLogo: document.querySelector("#sidebar-logo"),
        navLink: document.querySelectorAll("#link-name"),
        navDropdownIcon: document.querySelectorAll("#dropdown-icon"),
        navCases: document.querySelector("#cases"),
        navPayments: document.querySelector("#payments"),
        overlay: document.querySelector("#overlay"),
        actionIcons: document.querySelectorAll("#action-icon"),
        dropdownMenu: document.querySelectorAll("#dropdown-menu"),
        clientActionModal: document.querySelector("#client-action-modal"),
        closeClientModal: document.querySelector("#close-modal"),
    },

    // Menu toggle
    menuToggle() {
        admin.elem["sidebarMenu"].addEventListener("click", () => {
            admin.sidebar();
        });
    },

    // Sidebar 
    sidebar() {
        admin.elem["body"].classList.toggle("body");
        admin.elem["sidebar"].classList.toggle("admin-sidebar-active");
        admin.elem["sidebarHeader"].classList.toggle("admin-sidebar-header-active");
        admin.elem["sidebarLogo"].classList.toggle("admin-sidebar-logo-active");
        admin.elem["overlay"].classList.toggle("admin-overlay-active");
        Array.from(admin.elem["navLink"], linkName => linkName.classList.toggle("admin-link-name-active"));
        Array.from(admin.elem["navDropdownIcon"], icon => {
            icon.classList.toggle("admin-dropdown-icon-active");
            icon.addEventListener("click", e => {
               
                if (e.target.classList.contains("cases")) {
                    e.target.classList.toggle("admin-nav-icon-rotate");
                    admin.elem["navCases"].classList.toggle("admin-dropdown-active");
                }
                
                if (e.target.classList.contains("payments")) {
                    e.target.classList.toggle("admin-nav-icon-rotate");
                    admin.elem["navPayments"].classList.toggle("admin-dropdown-active");
                }
            });
        });

        if (!admin.elem["sidebar"].classList.contains("admin-sidebar-active")) {
            Array.from(admin.elem["navDropdownIcon"], icon => {
                icon.classList.remove("admin-dropdown-icon-active");
                
                if (icon.classList.contains("cases")) {
                    icon.classList.remove("admin-nav-icon-rotate");
                    admin.elem["navCases"].classList.remove("admin-dropdown-active");
                }

                if (icon.classList.contains("payments")) {
                    icon.classList.remove("admin-nav-icon-rotate");
                    admin.elem["navPayments"].classList.remove("admin-dropdown-active");
                }
            });
        }
    },

    // Action 
    action() {
        Array.from(admin.elem["actionIcons"], action => {
            action.addEventListener("click", () => {
                if (admin.elem["clientActionModal"].classList.contains("hidden")) {
                    admin.elem["clientActionModal"].classList.remove("hidden");
                    admin.elem["clientActionModal"].classList.add("flex");
                    admin.elem["body"].classList.add("overflow-hidden");
                }

                if (admin.elem["clientActionModal"].classList.contains("flex")) {
                    admin.elem["closeClientModal"].addEventListener("click", () => {
                        admin.elem["clientActionModal"].classList.remove("flex");
                        admin.elem["clientActionModal"].classList.add("hidden");
                        admin.elem["body"].classList.remove("overflow-hidden");
                    });
                }
            });
        });
    },

    // Initializer
    init() { 
        admin.menuToggle();
        admin.action();
    }

};
// Destructuring object
const { init } = admin;

// Main function
const main = () => init();

// Invoke main function
main();