export default class Modal {

    constructor(modal) {
        this._modal = modal;
    }

    // Modal is active
    set modalActive(active) {
       return this._modal.classList.add(active); 
    }

}