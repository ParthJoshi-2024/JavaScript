const loanCalculations = {
    prin : 0,
    rate : 0,
    time : 0,
    emi(){
        return (this.prin * this.rate) * (Math.pow(1 + this.rate , this.time)) / (Math.pow(1 + this.rate , this.time) - 1);
    },
    int(){
    return (this.emi() * this.time) - this.prin;
    },
    total(){
    return this.int() + this.prin;
    }
}