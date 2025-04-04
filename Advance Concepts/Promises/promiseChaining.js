function delivery1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order created");
            let delivered = false;
            if(delivered){
                resolve("order again");
            }else{
                reject("Sorry for the inconvenince");
            }
        },5000);
    });
};

function delivery2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order created");
            let delivered = true;
            if(delivered){
                resolve("order again");
            }else{
                reject("Sorry for the inconvenince");
            }
        },5000);
    });
};

console.log("Fetching delivery 1 status....")
let delivery1Status = delivery1();

delivery1Status.then((res) => {
    console.log("Order 1 delivered\n", res);

    console.log("Fetching delivery 2 status....");
    let delivery2Status = delivery2();

    delivery2Status.then((res) => {
        console.log("Order 2 delivered\n", res);
    }).catch((err) => {
        console.log(" Order 2 cancelled\n", err);
    });
}).catch((err) => {
    console.log(" Order 1 cancelled\n", err);

    console.log("Fetching delivery 2 status....")
    let delivery2Status = delivery2();

    delivery2Status.then((res) => {
        console.log("Order 2 delivered\n", res);
    }).catch((err) => {
        console.log(" Order 2 cancelled\n", err);
    });
});