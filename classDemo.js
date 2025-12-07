var Student = /** @class */ (function () {
    function Student() {
    }
    // constructor(name: string, marks: number) {
    //     this.studentName = name;
    //     this.studentMarks = marks;
    // }
    Student.prototype.getStudentMarks = function () {
        return this.studentMarks;
    };
    Student.prototype.getStudentName = function () {
        return this.studentName;
    };
    return Student;
}());
// let s1=new Student("hamid",32);
// console.log(s1);
// let s2=new Student("hamid raza",77);
// console.log(s2);
var ob1 = new Student();
ob1.studentName = "Rohanwa chotaa";
ob1.studentMarks = 77;
console.log(ob1);
