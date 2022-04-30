const Reader = require("../../lib/utils/Reader");
const StudentService = require("../../lib/services/StudentService");

describe("Tests para Student Service", () => {
    test("Filtro por certificado", () => {
        const studentsWithCertificate = StudentService.filterByCertification("test_file.json");
        expect(studentsWithCertificate).toStrictEqual([
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
            }
        ]);
    });
    test("Obtener email de estudiantes con certificado", () => {
        const studentEmailsWC = StudentService.getEmails("test_file.json");
        expect(studentEmailsWC).toStrictEqual(["Todd@visualpartnership.xyz"]);
    });
    test("Obtener estudiantes con créditos mayores a 500", () => {
        const studentsOver500c = StudentService.getStudentsOver500c("test_file.json");
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