let price = [250,645,300,900,50];
let priceAfterDiscount = [];
for(let i of price){
    priceAfterDiscount.push(i - (i/100*(10)));
}
console.log(`price before discount : ${price}`);
console.log(`price after 10% discount : ${priceAfterDiscount}`);