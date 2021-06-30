import FormControl from "./form_control.js";

export default class Form {

    // Private properties
    constructor(appForm, input) {
        this._appForm = appForm;
        this._input = input;
    }

    // Public method
    input() {
        
        Array.from(this._input, (input) => {
            //Focus in input field
            input.addEventListener("focus", (e) => {
                
                if (e.target.value === "" | e.target.value === null) {
                    let formControl = e.target.parentElement;
                    let form  = new FormControl(formControl, e.target);
                    form.inputActive = "input-active";
                    form.formControlActive = "form-control-active";
                }

            });
            // Focus out input field
            input.addEventListener("focusout", (e) => {
                
                if (e.target.value === "" | e.target.value === null) {
                    let formControl = e.target.parentElement;
                    let form  = new FormControl(formControl, e.target);
                    form.inputNotActive = "input-active";
                    form.formControlNotActive = "form-control-active";
                }

            });

        });

    }

}

const inputActive = new Form(document.querySelector("#form"), document.querySelectorAll("input"));
inputActive.input();


