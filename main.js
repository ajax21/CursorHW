const bread = 15.678;
const meat = 123.965;
const milk = 90.2345;

console.log("Maximum=", Math.max(15.678, 123.965, 90.2345));
console.log("Minimum=", Math.min(bread, meat, milk));

let allCost = bread + meat + milk;
console.log("All products cost =", allCost);

console.log("Integers cost =",Math.floor(bread) + Math.floor(meat) + Math.floor(milk));

let sumRounded = (Math.ceil(bread / 100) * 100) + (Math.ceil(meat / 100) * 100) + (Math.ceil(milk / 100) * 100);
console.log("Sum of rounded =", sumRounded);

let floorSum = Math.floor(bread) + Math.floor(meat) + Math.floor(milk);
if(floorSum % 2 === 0){
    console.log(true);
} else {
console.log(false);
}

let rest = 500- (bread + meat + milk);
console.log (rest);

let middleValue = allCost / 3;
console.log(middleValue.toFixed(2));

let discount = Math.random() * 10;
console.log("Discount is", discount, "%");
let lastPrice = 100 - discount;
let needPay = (allCost/100) * lastPrice;
console.log("Price with discount =",needPay.toFixed(2));
let clearSum = allCost / 2;
let discountNumber = (allCost/100) * discount;
console.log("Clear money =", clearSum - discountNumber);

const textTemplate = `Максимальне число: ${Math.max(15.678, 123.965, 90.2345)},
 мінімальне число: ${Math.min(bread, meat, milk)},
  вартість всіх товарів: ${allCost},
   вартість цілих частин: ${Math.floor(bread) + Math.floor(meat) + Math.floor(milk)},
    заокруглені до сотень: ${sumRounded},
    сума решти: ${rest},
    середнє: ${middleValue.toFixed(2)}
    сума до оплати зі знижкою: ${needPay.toFixed(2)}
    чистий прибуток: ${clearSum - discountNumber}`;