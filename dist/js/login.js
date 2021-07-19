// Object literals
const login = {
    
    // DOM elements
    elem: {
        loginForm: document.querySelector("#form"),
        loginBtn: document.querySelector("#login-btn")
    },

    // Input field
    inputField: () => {
        // Input active
        login.elem["loginForm"].addEventListener("focusin", (e) => {
            let input = e.target;
            
            if (input.value == "" || input.value == null) {
                let formControl = input.parentElement;
                formControl.classList.add("form-control-active");
                input.classList.add("login-input-active");
            }

        });
        // Input not active
        login.elem["loginForm"].addEventListener("focusout", (e) => {
            let input = e.target;

            if (input.value == "" || input.value == null) {
                let formControl = input.parentElement;
                formControl.classList.remove("form-control-active");
                input.classList.remove("login-input-active");
            }

        });
    },

    // Initializer
    init: () => {
        login.inputField();
    }

};
// Destructuring object
const { init } = login;

const main = () => {
    init();
}

main();

/*
import FormControl from "./form_control.js";

class Login {
    
    constructor(loginParam = {form: document.querySelector("form"), username: document.querySelector("#username"), password: document.querySelector("#password")}) {
        this._loginForm = loginParam.form;
        this._username = loginParam.username;
        this._password = loginParam.password;
    }

    input() {
        // Focus input field
        this._loginForm.addEventListener("focusin", (e) => {
            
            if (e.target.value == "" | e.target.value == null) {
                let formControl = e.target.parentElement;
                let form  = new FormControl(formControl, e.target);
                form.inputActive = "login-input-active";
                form.formControlActive = "form-control-active";
            }

        });
        // Focus out input field
        this._loginForm.addEventListener("focusout", (e) => { 
            let formControl = e.target.parentElement;
            let form  = new FormControl(formControl, e.target);
            
            if (e.target.value === "" | e.target.value === null) {
                form.inputNotActive = "login-input-active";
                form.formControlNotActive = "form-control-active";
            }
            else {
                form.formControlNotActive = "form-control-active";
            }

        });
    }

}

const login = new Login();
login.input();
*/