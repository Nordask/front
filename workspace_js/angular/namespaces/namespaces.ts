namespace College {
    export class Student {
        studentId: number;
        studentName: string;

        constructor(num: number, str: string) {
            this.studentId = num;
            this.studentName = str;
        }
    }
    //list of courses
    export var courseList: string[] = [".NET", "Java", "Blockchain", "Angular", "AWS"];
}

console.log(College.courseList);
console.log(new College.Student(101, "Scott"));