let disch = {
    units: 0,
    tens: 0,
    hungreds: 0,
    numToObject(num) {
        if (num < 10) {
            this.units = num;
        }
        else if (num < 100) {
            this.units = parseInt(num % 10);
        }
        else {
            this.units = num % parseInt(num / 10);
        }
        this.tens = (parseInt(num / 10)) % 10;
        this.hungreds = parseInt(num / 100);
        return this;
    }
};

console.log(disch.numToObject(259))
