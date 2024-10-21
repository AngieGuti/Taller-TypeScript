import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Dalgo", 80, 10, false, 2024),
    new Curso("Desarrollo", 50, 45, true, 2024),
    new Curso("Arquiemp", 100, 41, true, 2024),
    new Curso("Sistrans", 55, 35, false, 2025)];
export var ap = new Aprendiz("Angie Camila", "Gutiérrez Trujillo", "avatar.jpg", 19, NivelEducativo.UNIVERSIDAD, cursos);
var aprendizTable = document.getElementById('aprendiz');
var estadisticasTable = document.getElementById('estadisticas');
mostrarDatosAprendiz(ap);
mostrarEstadisticasAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=100 </td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel Educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticasAprendiz(aprendiz) {
    var numeroCertificados = aprendiz.cursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos Certificados</b></td><td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
