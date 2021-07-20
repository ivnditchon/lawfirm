// Object literals
const admin = {

    // DOM elemenst
    elem: {
        menu: document.querySelector("#menu"),
        sidebar: document.querySelector("#sidebar"),
        sidebarHeader: document.querySelector("#sidebar-header"),
        sidebarLogo: document.querySelector("#sidebar-logo"),
        navLink: document.querySelectorAll("#link-name")
    },

    // Menu toggle
    menuToggle: () => {
        admin.elem["menu"].addEventListener("click", () => {
            admin.elem["sidebar"].classList.toggle("admin-sidebar-active");
            admin.elem["sidebarHeader"].classList.toggle("admin-sidebar-header-active");
            admin.elem["sidebarLogo"].classList.toggle("admin-sidebar-logo-active");
            Array.from(admin.elem["navLink"], (linkName) => {
                linkName.classList.toggle("admin-link-name-active");
            });
        });
    },

    // Initializer
    init: () => admin.menuToggle()

};
// Destructuring object
const { init } = admin;

// Main function
const main = () => init();

// Invoke main function
main();