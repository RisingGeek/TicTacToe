class Button {
    constructor(position) {
        this.position=position;
        this.value="";
    }
    toggle(state) {
        this.value=state?'fa-times':'fa-circle-o';
        return !state;
    }
}