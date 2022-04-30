const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code_Challenge Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    const students = StudentController.getStudents("visualpartners");
    response.json(students);
});

app.get("/v1/students/withcertification", (request, response) => {
    const explorersAmountInMission = StudentController.getStudentEmailsWC("visualpartners");
    response.json(explorersAmountInMission);
});

app.get("/v1/students/over500c", (request, response) => {
    const explorersUsernames = StudentController.getStudentsOver500c("visualpartners");
    response.json(explorersUsernames);
});


app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});