class car{
    constructor(brand){ //we can also give arguments
        console.log("Constructor created");
        this.brand = brand;
    }
    start(){
        console.log("Car started");
    }
    stop(){
        console.log("Car stopped");
    }
    wheels(){
        console.log("Car has four wheels");
    }
}

let Audi = new car("Audi");
