const Reader = require("../utils/Reader");

class StudentService {
    static filterByCertification(path) {
        const students = Reader.readJsonFile(path);
        const studentsByCertification = students.filter((student) => student.haveCertification == true);
        return studentsByCertification;
    }

    static getEmails(path) {
        const studentsByCertification = StudentService.filterByCertification(path);
        const studentsEmails = studentsByCertification.map((student) => student.email);
        return studentsEmails;
    }

    static getStudentsOver500c(path) {
        const students = Reader.readJsonFile(path);
        const studentsOver500c = students.filter((student) => student.credits > 500);
        return studentsOver500c;
    }
}

module.exports = StudentService;