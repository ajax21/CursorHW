class Student {
    constructor(fullName, university, course) {
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.marks = [5, 4, 4, 5];
        this.dismissed = false;
    };

    getInfo(){
        return this.fullName + " " + this.university + " " + this.course;
    };

    get mark() {
        if(this.dismissed){
            return null;
        }
        else {
            return this.marks;
        }
    };

    set mark(value) {
        if(this.dismissed) {
            return null;
        }
        else {
            return this.marks.push(value);
        }
    };

    getAverageMark() {
        return this.marks.reduce((sum, item) => sum + item, 0) / this.marks.length;
    };

    dismiss() {
        return this.dismissed = true;
    };

    recover() {
        return this.dismissed = false;
    };
};


let student = new Student ('Ivan Bogdanovich', 'NULP', 1);

console.log('Студент: ', student.getInfo());
console.log('Оцінки: ', student.mark);

student.mark = 5;
console.log(`Нові оцінки: `, student.mark);
console.log('Середня оцінка студента: ', student.getAverageMark());

student.dismiss();
console.log('Чи відрахований студент: ', student.dismissed);
console.log('Оцінки: ', student.mark);

student.recover();
console.log('Чи відрахований студент: ', student.dismissed);


class BudgetStudent extends Student {
    constructor(fullName, university, course){
        super (fullName, university, course);
        setInterval(() => this.getScholarShip(), 30000);
        this.marks = [5, 4, 4, 5];
        this.dismissed = false;
    }

    getScholarShip() {
        const minMark = 4;
        if(this.getAverageMark() >= minMark && !this.dismissed) {
            console.log('Ви отримали 1400 грн. стипендії.');
        }
        else {
            console.log('Студент не отримує стипендії.')
        };
    };
};

let newStudent = new BudgetStudent('Vasyl Stasiuk', 'NULP', 4);

console.log(newStudent.getInfo());