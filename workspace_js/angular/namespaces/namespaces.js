var College;
(function (College) {
    var Student = (function () {
        function Student(num, str) {
            this.studentId = num;
            this.studentName = str;
        }
        return Student;
    }());
    College.Student = Student;
    College.courseList = [".NET", "Java", "Blockchain", "Angular", "AWS"];
})(College || (College = {}));
console.log(College.courseList);
console.log(new College.Student(101, "Scott"));
