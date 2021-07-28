// Using Object literals
const admin = {

    // DOM elements
    elem: {
        sidebarMenu: document.querySelector("#menu"),
        sidebar: document.querySelector("#sidebar"),
        sidebarHeader: document.querySelector("#sidebar-header"),
        sidebarLogo: document.querySelector("#sidebar-logo"),
        navLink: document.querySelectorAll("#link-name"),
        navDropdownIcon: document.querySelectorAll("#dropdown-icon"),
        navCases: document.querySelector("#cases"),
        navPayments: document.querySelector("#payments"),
        overlay: document.querySelector("#overlay"),
    },

    // Menu toggle
    menuToggle() {
        admin.elem["sidebarMenu"].addEventListener("click", e => {
            e.preventDefault();
            admin.sidebar();
        });
    },

    // Sidebar 
    sidebar() {
        admin.elem["sidebar"].classList.toggle("admin-sidebar-active");
        admin.elem["sidebarHeader"].classList.toggle("admin-sidebar-header-active");
        admin.elem["sidebarLogo"].classList.toggle("admin-sidebar-logo-active");
        admin.elem["overlay"].classList.toggle("admin-overlay-active");
        Array.from(admin.elem["navLink"], linkName => linkName.classList.toggle("admin-link-name-active"));
        Array.from(admin.elem["navDropdownIcon"], icon => {
            icon.classList.toggle("admin-dropdown-icon-active");
            icon.addEventListener("click", e => {
                e.preventDefault();
                
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

    // Initializer
    init() { admin.menuToggle(); }

};
// Destructuring object
const { init } = admin;

// Main function
const main = () => init();

// Invoke main function
main();