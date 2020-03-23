function getMaxDigit (number){
    const dividedNumber = number.toString().split(``);
    return Math.max(...dividedNumber);
}

console.log("Function #1:", getMaxDigit(15842));

function checkDegree (number, degree){
    let result = 1;
    for (let i=0; i < degree; i++){
        result *= number;
    }
    return result;
}

function upLetter (changingWord){
    return changingWord.charAt(0).toUpperCase() + changingWord.slice(1).toLowerCase();
}

function taxedSalary (salary){
    const tax = 19.5;
    const percent = 100;
    return salary * ((percent - tax) / percent);
}

function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function countLetter (word, letter){
    let count = 0;
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    for (let i = 0; i < word.length; i++){
        if (letter === word[i]){
            count++;
        }
    }
    return count;
}

function getRandomPassword (leng = 8){
    let password = ``;
    const symbols = "1234567890";
    for (let i = 0; i < leng; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}

document.writeln(`<p> Function №1(найбільше число): ${getMaxDigit(15842)}.</p>
<p> Function №2(підносить число 3 до степеня 7): ${checkDegree(3, 7)}.</p>
<p> Function №3(редагує слово): ${upLetter(`vAsYl`)}.</p>
<p> Function №4(визначає суму після сплати податку в 19,5%): ${taxedSalary(8000)}.</p>
<p> Function №5(рандомне число від 3 до 9): ${getRandomNumber(3, 9)}.</p>
<p> Function №6(вираховує к-сть букви 'а' в слові 'Abrakadabra'): ${countLetter(`Abrakadabra`, `a`)}.</p>
<p> Function №7(створює рандомний пароль): ${getRandomPassword()}.</p>`);
