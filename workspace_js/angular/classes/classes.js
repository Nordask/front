var Student = /** @class */ (function () {
    function Student(id, name, mark) {
        if (mark === void 0) { mark = 20; }
        this.studentId = id;
        this.studentName = name;
        this.marks = mark;
    }
    Student.prototype.result = function () {
        return this.marks >= 35 ? "Pass" : "Fail";
    };
    return Student;
}());
var DataManipulator = /** @class */ (function () {
    function DataManipulator() {
    }
    DataManipulator.prototype.PrintData = function () {
        var s1txt1 = document.getElementById("s1txt1").value;
        var s1txt2 = document.getElementById("s1txt2").value;
        var s1txt3 = document.getElementById("s1txt3").value;
        var s2txt1 = document.getElementById("s2txt1").value;
        var s2txt2 = document.getElementById("s2txt2").value;
        var s2txt3 = document.getElementById("s2txt3").value;
        var s3txt1 = document.getElementById("s3txt1").value;
        var s3txt2 = document.getElementById("s3txt2").value;
        var s3txt3 = document.getElementById("s3txt3").value;
        var s1 = new Student(Number(s1txt1), s1txt2, Number(s1txt3));
        console.log(s1.studentId);
        console.log(s1.studentName);
        console.log(s1.marks);
        console.log(s1.result());
        var s2 = new Student(Number(s2txt1), s2txt2, Number(s2txt3));
        console.log(s2.studentId);
        console.log(s2.studentName);
        console.log(s2.marks);
        console.log(s2.result());
        var s3 = new Student(Number(s3txt1), s3txt2, Number(s3txt3));
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
    };
    return DataManipulator;
}());
var dm = new DataManipulator();
document.getElementById("button1").addEventListener("click", dm.PrintData);
