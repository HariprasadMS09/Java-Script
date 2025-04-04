// example which shows the change of state with delay
function getData(id,nextId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data = ",id);
            resolve("Id fetched");
            if(nextId){
                nextId();
            }
        },10000);
    });
}