function Add(...args){
    let sum = 0;
    for(let i=0;i<args.length;i++){
        sum += args[i];
    }
    console.log("Sum of given numbers = ", sum);
}

Add(1,2,3,6,8);