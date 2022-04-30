class StudentService {
    static filterByCertification(students) {
        const studentsWithCertification = students.filter((student) => student.haveCertification == true );
        return studentsWithCertification;
    }

    static getEmails(students) {
        const studentsWithCertification = StudentService.filterByCertification(students);
        const studentsEmails = studentsWithCertification.map((student) => student.email);
        return studentsEmails;
    }

    static getStudentsOver500c(students) {
        const studentsOver500c = students.filter((student) => student.credits > 500);
        return studentsOver500c;
    }
}

module.exports = StudentService;