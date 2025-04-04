let feature1 = {
    wheels(){
        console.log("Car has 4 wheels");
    }
}

let car = {
    start(){
        console.log("Car started");
    },
    stop(){
        console.log("Car stopped");
    }
}

car.__proto__ = feature1; //added a new object(prototype) to car
