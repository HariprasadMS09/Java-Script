function getData(id,nextId){
    setTimeout(() => {
        console.log("data = ",id);
        if(nextId){
            nextId();
        }
    },2000);
}
//This is called Callback Hell and you should not code like this

getData(1, () => {
    console.log("Getting data 2...");
    getData(2, () => {
        console.log("Getting data 3...");
        getData(3, () => {
            console.log("Getting data 4...");
            getData(4, () => {
                console.log("Getting data 5...");
                getData(5);
            });
        });
    });
});