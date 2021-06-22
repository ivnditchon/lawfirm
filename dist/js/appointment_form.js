// Appointment form
const appointmentFormObj = {
    // Elements
    elem: {
        inputs: document.querySelectorAll("input"),
        labels: document.querySelectorAll("label")
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
            inp.addEventListener("focusout", (ev) => {
                if (ev.currentTarget.value === "" || ev.currentTarget.value === null) {
                    ev.currentTarget.classList.remove("input-active");
                    ev.currentTarget.parentElement.classList.remove("form-control-active");
                }
                else {
                    ev.currentTarget.parentElement.classList.remove("form-control-active");
                }
            });
        });
    },
    // Appointment form initializer
    appFormInit: () => {
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

