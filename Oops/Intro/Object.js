class car{
    start(){
        console.log("Car started");
    }
    stop(){
        console.log("Car stopped");
    }
    wheels(){
        console.log("Car has four wheels");
    }
    brand(brandName){
        this.brand = brandName;
    }
}

let BMWCompanyCar = new car();
BMWCompanyCar.brand("BMW");
let AudiCompanyCar = new car();