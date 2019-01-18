const myObj = {
    buttons:[],
    state: true,
    fillButtons() {
        for(let i=1;i<=9;i++) {
            this.buttons.push(new Button(i));
        }
    },
    show(position) {
        if(this.buttons[position-1].value || this.gameOver())
            return;
        this.state=this.buttons[position-1].toggle(this.state);
    },
    gameOver() {
        if(this.isNotEmpty(0) && this.isNotEmpty(1) && this.isNotEmpty(2)) {
            if(this.win(0,1,2))
                return this.buttons[0].value;
        }
        if(this.isNotEmpty(3) && this.isNotEmpty(4) && this.isNotEmpty(5)) {
            if(this.win(3,4,5))
                return this.buttons[3].value;
        }
        if(this.isNotEmpty(6) && this.isNotEmpty(7) && this.isNotEmpty(8)) {
            if(this.win(6,7,8))
                return this.buttons[6].value;
        }
        if(this.isNotEmpty(0) && this.isNotEmpty(3) && this.isNotEmpty(6)) {
            if(this.win(0,3,6))
                return this.buttons[0].value;
        }
        if(this.isNotEmpty(1) && this.isNotEmpty(4) && this.isNotEmpty(7)) {
            if(this.win(1,4,7))
                return this.buttons[1].value;
        }
        if(this.isNotEmpty(2) && this.isNotEmpty(5) && this.isNotEmpty(8)) {
            if(this.win(2,5,8))
                return this.buttons[2].value;
        }
        if(this.isNotEmpty(0) && this.isNotEmpty(4) && this.isNotEmpty(8)) {
            if(this.win(0,4,8))
                return this.buttons[0].value;
        }
        if(this.isNotEmpty(2) && this.isNotEmpty(4) && this.isNotEmpty(6)) {
            if(this.win(2,4,6))
                return this.buttons[2].value;
        }
        if(this.isNotEmpty(0) && this.isNotEmpty(1) && this.isNotEmpty(2) && this.isNotEmpty(3) && this.isNotEmpty(4) &&
        this.isNotEmpty(5) && this.isNotEmpty(6) && this.isNotEmpty(7) && this.isNotEmpty(8)) {
            return "Draw!";
        }
        return false;
    },
    isNotEmpty(position) {
        return this.buttons[position].value;
    },
    win(first,second,third) {
        if(this.buttons[first].value==this.buttons[second].value && this.buttons[second].value==this.buttons[third].value) 
            return true;
        return false;
    },
    restartGame() {
        this.buttons=[];
        this.fillButtons(); 
        this.state=true;
    }
};