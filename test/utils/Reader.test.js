const Reader = require('../../lib/utils/Reader')

describe("Tests para Reader", () => {
    test("Leyendo archivo JSON", () => {
        const students = Reader.readJsonFile("test/test_file.json")
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
        ])
    })
})