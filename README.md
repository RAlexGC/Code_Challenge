# Visual Thinking API

Code_Challenge realizado en la semana 4 de LaunchX (Backend JS)

## Instalación del proyecto

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

## Uso del API

>Este API tiene habilitados tres endpoints:
>
|Endpoint|Descripción|
|---|---|
|`localhost:3000/v1/students`|Aquí se puede consultar la lista completa de estudiantes con todos sus campos|
|`localhost:3000/v1/students/withcertification`|Aquí se pueden consultar los emails de los estudiantes que tienen certificación|
|`localhost:3000/v1/students/over500c`|Aquí se pueden consultar los estudiantes que tienen más de 500 créditos|

![Code_Challenge](https://user-images.githubusercontent.com/99144135/166091251-18154546-9fd2-4064-82be-5327d24d547c.gif)