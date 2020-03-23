const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];



const getSubjects = (student) => {
    return Object.keys(student.subjects).map((subject) => subject[0].toUpperCase() + subject.slice(1).replace('_', ' '));
}
console.log('First function: ', getSubjects(students[0]));


let getAverageMark = (student) => {
    const marks = Object.values(student.subjects).flat();
    return (marks.reduce((total, index) => {
        return total + index;
    }, 0) / marks.length).toFixed(2);
}
console.log('Second function: ', getAverageMark(students[0]));


const getStudentsInfo = (student) => {
    const studentInfo = {
        course: student.course,
        name: student.name,
        ['average mark']: getAverageMark(student)
    };
    return studentInfo;
}
console.log('Third function: ', getStudentsInfo(students[0]));


const getStudentsName = (students) => {
    return (students.map(item => item.name)).sort();
}
console.log('Fourth function', getStudentsName(students));


const getBestStudent = (students) => {
    const allAverage = [];
    let maximum = 0;
    let better = 0;
    Object.keys(students).forEach(item => {
        allAverage.push(getAverageMark(students[item]))
        if (allAverage[item] > maximum){
            better = item;
            maximum = allAverage[item];
        }
});
    return students[better].name;
}
console.log('Fifth function: ', getBestStudent(students));

const calculateWordLetters = (word) => {
    const result = {};
    for (let i = 0; i < word.length; i++){
        word[i] in result ? result [word[i]] +=1 : result [word[i]] = 1;
    }
    return result;
}
console.log('Sixth function: ', calculateWordLetters('тест'));