# Visual Thinking API

Code_Challenge realizado en la semana 4 de LaunchX (Backend JS)

## Instalación del proyecto
Clonar el repositorio en entorno local:
```
git clone https://github.com/RAlexGC/Code_Challenge.git
```
Ejecutar el siguiente comando para instalar todas las dependencias requeridas:
```
npm install
```
## Dependencias utilizadas

Este proyecto utiliza las siguientes dependencias:
- Jest 26.0.0 (Pruebas unitarias)
- ESlint 8.14.0 (Corrección de estilo [linter])
- Express 4.18.1 (Servidor)

## Diseño del proyecto

El proyecto cuenta con una utilidad `Reader` que se utiliza para leer archivos JSON e importarlos como objetos. La clase `StudentService` contiene los métodos para filtrar la base de datos y obtener los emails de los estudiantes con certificación y, adicionalmente, obtener el listado de estudiantes que tienen más de 500 créditos. La clase `StudentController` se utiliza para vincular el servidor con el resto del proyecto.

![mermaid-diagram-20220429232213](https://user-images.githubusercontent.com/99144135/166090751-53bd3f4b-0777-492a-bbf7-f639371a5e88.png)

### Código

Reader

```
const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;
```

StudentService

```
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
```

StudentController

```
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
```

Server

```
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
```
Para ejecutar el servidor utilizar el comando:

```
npm run server
```

## Uso del API

>Este API tiene habilitados tres endpoints:
>
|Endpoint|Descripción|
|---|---|
|`localhost:3000/v1/students`|Aquí se puede consultar la lista completa de estudiantes con todos sus campos|
|`localhost:3000/v1/students/withcertification`|Aquí se pueden consultar los emails de los estudiantes que tienen certificación|
|`localhost:3000/v1/students/over500c`|Aquí se pueden consultar los estudiantes que tienen más de 500 créditos|

![Code_Challenge](https://user-images.githubusercontent.com/99144135/166091251-18154546-9fd2-4064-82be-5327d24d547c.gif)