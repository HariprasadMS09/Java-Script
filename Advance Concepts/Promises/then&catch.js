const getDelivered = () => {
    return new Promise((resolve, reject) => {
        console.log("Order created");
        let delivered = false;
        if(delivered){
            resolve("order again");
        }else{
            reject("Sorry for the inconvenince");
        }
    });
};

let deliveryStatus = getDelivered();
deliveryStatus.then((res) => {
    console.log(" Delivered\n", res);
});

deliveryStatus.catch((err) => {
    console.log(" Order cancelled\n", err);
});