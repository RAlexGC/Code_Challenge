const Reader = require("../utils/Reader");

class StudentService {
    static filterByCertification(path) {
        const students = Reader.readJsonFile(path);
        const studentsWithCertification = students.filter((student) => student.haveCertification == true );
        return studentsWithCertification;
    }

    static getEmails(path) {
        const studentsWithCertification = StudentService.filterByCertification(path);
        const studentsEmails = studentsWithCertification.map((student) => student.email);
        return studentsEmails;
    }

    static getStudentsOver500c(path) {
        const students = Reader.readJsonFile(path);
        const studentsOver500c = students.filter((student) => student.credits > 500);
        return studentsOver500c;
    }
}

module.exports = StudentService;