function getRandomArray(length, min, max) {
    const array = [];
    for ( let i = 0; i < length; i++ ){
        const item = Math.random() * (max - min) + min
        array.push(Math.floor(item));
    }
    return array;
}

const mainArray = getRandomArray(10, 0, 100);

console.log('Random array: ', mainArray);


function getAverage(...numbers){
    const sum = numbers.reduce((total, index) => {
        return total + index;
    }, 0);
    return sum / numbers.length;
}

console.log('Middle value: ', getAverage(...mainArray));


const filterEvenNumbers = mainArray.filter(num => {
    if (num % 2 === 1){
        return num;
    }
});

console.log('Filtered array: ', filterEvenNumbers);



const negativeArray = [5, 3, -6, -15, 21, 0, -7, 121, 45, -69];
console.log('Negative array: ', negativeArray);

const countPositiveNumbers = negativeArray.filter((number) => {
    return number > 0;
});

console.log('Count of positive numbers: ', countPositiveNumbers.length);


const getDividedByFive = mainArray.filter((num) => {
    return num % 5 === 0;
});

console.log('Random array numbers divided by five: ', getDividedByFive);


function dividedByThree(string){
    const result = [];
    const array = string.split(" ");
    array.map(element => {
        for (let i = 0; i < element.length; i+=3){
            result.push(element.slice(i, i + 3));
        }
    })
    return result;
}

console.log(`Divided by three result:  ${dividedByThree("Independence")}`);