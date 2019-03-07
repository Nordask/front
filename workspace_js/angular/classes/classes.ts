class Student {
    studentId: number;
    studentName: string;
    marks: number;

    constructor(id: number, name: string, mark: number = 20) {
        this.studentId = id;
        this.studentName = name;
        this.marks = mark;
    }

    result(): string {
        return this.marks >= 35 ? "Pass" : "Fail";    
    }
}





class DataManipulator {
    PrintData() {
        var s1txt1 = (<HTMLInputElement>document.getElementById("s1txt1")).value;
        var s1txt2 = (<HTMLInputElement>document.getElementById("s1txt2")).value;
        var s1txt3 = (<HTMLInputElement>document.getElementById("s1txt3")).value;

        var s2txt1 = (<HTMLInputElement>document.getElementById("s2txt1")).value;
        var s2txt2 = (<HTMLInputElement>document.getElementById("s2txt2")).value;
        var s2txt3 = (<HTMLInputElement>document.getElementById("s2txt3")).value;

        var s3txt1 = (<HTMLInputElement>document.getElementById("s3txt1")).value;
        var s3txt2 = (<HTMLInputElement>document.getElementById("s3txt2")).value;
        var s3txt3 = (<HTMLInputElement>document.getElementById("s3txt3")).value;

        var s1: Student = new Student(Number(s1txt1), s1txt2, Number(s1txt3));
        console.log(s1.studentId);
        console.log(s1.studentName);
        console.log(s1.marks);
        console.log(s1.result());

        var s2: Student = new Student(Number(s2txt1), s2txt2, Number(s2txt3));
        console.log(s2.studentId);
        console.log(s2.studentName);
        console.log(s2.marks);
        console.log(s2.result());

        var s3: Student = new Student(Number(s3txt1), s3txt2, Number(s3txt3);
        console.log(s3.studentId);
        console.log(s3.studentName);
        console.log(s3.marks);
        console.log(s3.result());

        document.getElementById("s1span1").innerHTML = String(s1.studentId);
        document.getElementById("s1span2").innerHTML = String(s1.studentName);
        document.getElementById("s1span3").innerHTML = String(s1.marks);
        document.getElementById("s1span4").innerHTML = String(s1.result());

        document.getElementById("s2span1").innerHTML = String(s1.studentId);
        document.getElementById("s2span2").innerHTML = String(s1.studentName);
        document.getElementById("s2span3").innerHTML = String(s1.marks);
        document.getElementById("s2span4").innerHTML = String(s1.result());

        document.getElementById("s3span1").innerHTML = String(s1.studentId);
        document.getElementById("s3span2").innerHTML = String(s1.studentName);
        document.getElementById("s3span3").innerHTML = String(s1.marks);
        document.getElementById("s3span4").innerHTML = String(s1.result());
    }
}

var dm: DataManipulator = new DataManipulator();
document.getElementById("button1").addEventListener("click", dm.PrintData);