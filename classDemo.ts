class Student {

    studentName: string;
    studentMarks: number;

    // constructor(name: string, marks: number) {
    //     this.studentName = name;
    //     this.studentMarks = marks;
    // }

    getStudentMarks(): number {
        return this.studentMarks;
    }
    getStudentName():String{
        return this.studentName;
    }
}

// let s1=new Student("hamid",32);
// console.log(s1);

// let s2=new Student("hamid raza",77);
// console.log(s2);

let ob1=new Student();
ob1.studentName="Rohanwa chotaa";
ob1.studentMarks=77;

console.log(ob1);


