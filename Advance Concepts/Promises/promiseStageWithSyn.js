let delivaryStatus = new Promise((resolve, reject) =>{
    console.log("Item : Leather Bag");
    let delivered = true;
    if(delivered){
        resolve("Delivered");
    }else{
        reject("Order cancled");
    }
})