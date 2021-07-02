export default class Scroll {

    constructor(scrolling) {
        this._scrolling = scrolling;
    }

    set scrollActive(active) {
        return this._scrolling.classList.remove(active);
    }

    set scrollHidden(hidden) {
        return this._scrolling.classList.add(hidden);
    }
    
    // Scroll to top automatically
    static scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

}
