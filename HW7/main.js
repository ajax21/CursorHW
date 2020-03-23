const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};


function getMyTaxes(salary){
    return this.tax * salary;
}

console.log("Податок в Україні з 2000: ", getMyTaxes.call(ukraine, 2000));


function getMiddleTaxes(){
    return this.tax * this.middleSalary;
}

console.log("В середньому в Україні", getMiddleTaxes.call(ukraine));
console.log("В середньому в Латвії", getMiddleTaxes.call(latvia));
console.log("В середньому в Литві", getMiddleTaxes.call(litva));


function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log("В середньому всі платять в Україні", getTotalTaxes.call(ukraine));
console.log("В середньому всі платять в Латвії", getTotalTaxes.call(latvia));
console.log("В середньому всі платять в Литві", getTotalTaxes.call(litva));


function getMySalary() {
    setInterval(() => {
        const min = 1500;
        const max = 2000;
        const result = {};
        result.salary = Math.floor(min + Math.random() * (max + 1 - min));
        result.taxes = this.tax;
        result.profit = result.salary - (this.tax * result.salary);
        console.log(result);
    }, 10000);
}

getMySalary.call(latvia);