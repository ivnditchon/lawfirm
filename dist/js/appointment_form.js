// Appointment form
const appointmentFormObj = {
    // Elements
    elem: {
        body: document.querySelector("body"),
        form: document.querySelector("#form"),
        inputs: document.querySelectorAll("input"),
        labels: document.querySelectorAll("label"),
        appSuccessModal: document.querySelector("#appointment-success-modal")
    },
    // Inputs
    input: () => {
        Array.from(appointmentFormObj.elem["inputs"], (inp) => {
            inp.addEventListener("focus", (e) => {
                if (e.currentTarget.value === "" || e.currentTarget.value === null) {
                    e.currentTarget.parentElement.classList.add("form-control-active");
                    e.currentTarget.classList.add("input-active");
                }
            });
            inp.addEventListener("focusout", (e) => {
                if (e.currentTarget.value === "" || e.currentTarget.value === null) {
                    e.currentTarget.classList.remove("input-active");
                    e.currentTarget.parentElement.classList.remove("form-control-active");
                }
                else {
                    e.currentTarget.parentElement.classList.remove("form-control-active");
                }
            });
        });
    },
    // Form submit
    formSubmit: () => {
        appointmentFormObj.elem["form"].addEventListener("submit", (e) => {
            e.preventDefault();
            // Auto scroll to top
            window.scrollTo ({
                top: 0,
                behavior: "smooth"
            });
            let appSuccess = appointmentFormObj.elem["appSuccessModal"].classList.add("appointment-success-modal");
            // When modal is active, scroll is hidden
            let body = appointmentFormObj.elem["body"].classList.add("body");
            return {
                appSuccess,
                body
            };
        });
    },
    // Appointment form initializer
    appFormInit: () => {
        appointmentFormObj.formSubmit();
        appointmentFormObj.input();
    }
};
// Destructuring appointment form object
const { appFormInit } = appointmentFormObj;

// Main function
const main = () => {
    appFormInit(); 
}

// Invoke main function
main();

