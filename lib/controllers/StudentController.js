const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
    static getStudents(dbFilename) {
        return Reader.readJsonFile(dbFilename+".json");
    }

    static getStudentEmailsWC(dbFilename) {
        return StudentService.getEmails(dbFilename+".json");
    }

    static getStudentsOver500c(dbFilename) {
        return StudentService.getStudentsOver500c(dbFilename+".json");
    }
}
module.exports = StudentController;