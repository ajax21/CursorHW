const bread = 15.678;
const meat = 123.965;
const milk = 90.2345;

console.log("Maximum=", Math.max(bread, meat, milk));
console.log("Minimum=", Math.min(bread, meat, milk));

const allCost = bread + meat + milk;
console.log("All products cost =", allCost);

const floorSum = Math.floor(bread) + Math.floor(meat) + Math.floor(milk);
console.log("Integers cost =",floorSum);

const sumRounded = (Math.ceil(allCost / 100) * 100);
console.log("Sum of rounded =", sumRounded);


if(floorSum % 2 === 0){
    console.log(true);
} else {
console.log(false);
}

const visitorCash = 500;
const rest = visitorCash - allCost;
console.log ("Rest =", rest);

const middleValue = (allCost / 3).toFixed(2);
console.log("Middle value =", middleValue);

const discount = Math.random() * 10;
console.log("Discount is", discount.toFixed(2), "%");
const lastPrice = 100 - discount;
const needPay = (allCost/100) * lastPrice;
console.log("Price with discount =",needPay.toFixed(2));
const clearSum = allCost / 2;
const discountNumber = (allCost/100) * discount;
const finishSum = (clearSum - discountNumber).toFixed(2);
console.log("Clear money =", finishSum);

const textTemplate = `Максимальне число: ${Math.max(bread, meat, milk)},
 мінімальне число: ${Math.min(bread, meat, milk)},
  вартість всіх товарів: ${allCost},
   вартість цілих частин: ${floorSum},
    заокруглені до сотень: ${sumRounded},
    сума решти: ${rest},
    середнє: ${middleValue}
    сума до оплати зі знижкою: ${needPay.toFixed(2)}
    чистий прибуток: ${finishSum}`;
console.log(textTemplate)