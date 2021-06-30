class FormControl {

    constructor(formControl, input) {
        this._formControl = formControl;
        this._input = input;
    }

    set formControlActive(active) {
        return this._formControl.classList.add(active);
    }

    set formControlNotActive(notActive) {
        return this._formControl.classList.remove(notActive);
    }

    set inputActive(active) {
        return this._input.classList.add(active);
    }
    
    set inputNotActive(notActive) {
        return this._input.classList.remove(notActive);
    }

}

export default FormControl;