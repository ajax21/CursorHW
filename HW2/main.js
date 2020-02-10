let numberFrom = parseInt(prompt(`Введіть початкове число`, 10));
while (isNaN(numberFrom)){
    numberFrom = prompt(`Введіть, будь-ласка, РЕАЛЬНЕ число`, 10)
}
let numberTo = parseInt(prompt(`Введіть кінцеве число`, 100));
while (isNaN(numberTo)){
    numberTo = prompt(`Введіть, будь-ласка, РЕАЛЬНЕ число`, 100)
}




let sum = 0;
const condition = confirm('Пропускаємо парні числа?');
for (let i = numberFrom; i <= numberTo; i++) {
    if (condition) {
        if (i % 2 !== 0) {
            sum += i;
        }

    }
    else {
        sum += i;
    }
    console.log(sum);
}

document.writeln(`Додаємо від ${numberFrom} до ${numberTo} <br>
Парні пропускаємо: ${condition === true ? "Так" : "Ні"}. <br>
 Сума = ${sum}.`);