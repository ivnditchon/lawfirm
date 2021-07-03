import FormControl from "./form_control.js";
import Scroll from "./scroll.js";
import Modal from "./modal.js";


class Form {

    // Private properties
    constructor(formParam = {
                            appForm: document.querySelector("#form"),  
                            sucModal: document.querySelector("#appointment-success-modal"),
                            formBody: document.querySelector("body")
                            }) {
        this._appForm = formParam.appForm;
        this._input = formParam.input;
        this._sucModal = formParam.sucModal;
        this._formBody = formParam.formBody;
    }

    // Public method
    input() {
        //Focus in input field
        this._appForm.addEventListener("focusin", (e) => { // Object event delegation
            
            if (e.target.value == "" | e.target.value == null) {
                let formControl = e.target.parentElement;
                let form  = new FormControl(formControl, e.target);
                form.inputActive = "app-input-active";
                form.formControlActive = "form-control-active";
            }

        });
        // Focus out input field
        this._appForm.addEventListener("focusout", (e) => { 
            let formControl = e.target.parentElement;
            let form  = new FormControl(formControl, e.target);
            
            if (e.target.value == "" | e.target.value == null) {
                form.inputNotActive = "app-input-active";
                form.formControlNotActive = "form-control-active";
            }
            else {
                form.formControlNotActive = "form-control-active";
            }

        });
    }

    // Form validation 
    formValidation() {
        this._appForm.addEventListener("submit", (e) => { 
            e.preventDefault(); 
            let modal = new Modal(this._sucModal); // Object instance
            modal.modalActive = "appointment-success-modal";
            let body = new Scroll(this._formBody); 
            Scroll.scrollTop(); // Auto scroll to top
            body.scrollHidden = "body"; // Sidebar is hidden when modal is active
        });
    }

}

const form = new Form();
form.input();
form.formValidation();


