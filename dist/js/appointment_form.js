const appointmentFormObj = {
    elem: {
        inputs: document.querySelectorAll("input"),
        labels: document.querySelectorAll("label")
    },
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
    appFormInit: () => {
        appointmentFormObj.input();
    }
};

const { appFormInit } = appointmentFormObj;

const main = () => {
    appFormInit();
}

main();

