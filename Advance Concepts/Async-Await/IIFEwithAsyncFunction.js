function delivery(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order ${orderId} created`);
            let delivered = false;
            if(delivered){
                resolve("order again");
            }else{
                reject("Sorry for the inconvenince");
            }
        },5000);
    });
};


//this code is invoked immediatly and executed and cannot be used again
(async function(){
    console.log("Fetching order 1 status...");
    try {
        const delivery1Status = await delivery(1);
        console.log("Order 1 delivered\n", delivery1Status);
    } catch (error) {
        console.log("Order 1 cancelled\n", error);
    }
    
    console.log("Fetching order 2 status...");
    try {
        const delivery2Status = await delivery(2);
        console.log("Order 2 delivered\n", delivery2Status);
    } catch (error) {
        console.log("Order 2 cancelled\n", error);
    }
})();


