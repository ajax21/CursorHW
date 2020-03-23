const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

function studentsPairs(students){
    return [[students[0], students[3]], [students[1], students[2]], [students[4], students[5]]];
}

const pairs = studentsPairs(students);

function getPairsThemes(pairs, themes){
    const pairsWithThemes = [];
    for (let i = 0; i < pairs.length; i++){
        pairsWithThemes.push([pairs[i].join(' та '), themes[i]])
    }
    return pairsWithThemes;
}

const pairsThemes = getPairsThemes(pairs, themes);

function getMarks(students, marks){
    const studentsMarks = [];
    for (let i = 0; i < students.length; i++){
        studentsMarks.push([students[i], marks[i]]);
    }
    return studentsMarks;
}

function getRandomMarks (finishPairs){
    const pairsMarks = [];
    const min = 1;
    const max = 5;
    const randomMark = Math.floor(Math.random() (max + 1 - min) + min);
    for(let i = 0; i < finishPairs.length; i++){
        pairsMarks.push([...finishPairs[i], randomMark])
    }
    return pairsMarks;
}

console.log(studentsPairs(students));
console.log(getPairsThemes(pairs, themes));
console.log(getMarks(students, marks));
console.log(getRandomMarks(pairsThemes));