class Form {

    constructor() {
        this._path = window.location.href = "appointment__form.html","_self";
    }

    // Public method
    get appFormAddress() {
        return this._path;
    }

}

export default Form;