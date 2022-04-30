const StudentService = require("../../lib/services/StudentService");
const StudentController = require("../../lib/controllers/StudentController");

describe("Tests para Student Controller", () => {
    test("Obtener estudiantes", () => {
        const students = StudentController.getStudents("test_file");
        expect(students).toStrictEqual([
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 200,
                "enrollments": [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
            },
            {
                "id": "6264d5d85cf81c496446b67f",
                "name": "Lucinda",
                "email": "Sexton@visualpartnership.xyz",
                "credits": 677,
                "enrollments": [
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 6,
                "haveCertification": false
            }
        ]);
    });
    test("Obtener email de estudiantes con certificado", () => {
        const studentEmailsWC = StudentController.getStudentEmailsWC("test_file");
        expect(studentEmailsWC).toStrictEqual(["Todd@visualpartnership.xyz"]);
    });
    test("Obtener estudiantes con créditos mayores a 500", () => {
        const studentsOver500c = StudentController.getStudentsOver500c("test_file");
        expect(studentsOver500c).toStrictEqual([
            {
                "id": "6264d5d85cf81c496446b67f",
                "name": "Lucinda",
                "email": "Sexton@visualpartnership.xyz",
                "credits": 677,
                "enrollments": [
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 6,
                "haveCertification": false
            }]);
    });
});