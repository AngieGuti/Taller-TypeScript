import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Dalgo", 80, 10, false, 2024),
    new Curso("Desarrollo", 50, 45, true, 2024),
    new Curso("Arquiemp", 100, 41, true, 2024),
    new Curso("Sistrans", 55, 35, false, 2025)];
export var ap = new Aprendiz("Angie Camila", "Gutiérrez Trujillo", "avatar.jpg", 19, NivelEducativo.UNIVERSIDAD, cursos);
var aprendizTable = document.getElementById('aprendiz');
var estadisticasTable = document.getElementById('estadisticas');
var cursosTable = document.getElementById('cursos');
var filtroButton = document.getElementById('boton-filtro');
var textoBusqueda = document.getElementById('texto-busqueda');
filtroButton.onclick = function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticasAprendiz(ap);
mostrarCursosAprendiz(ap.cursos);
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
function mostrarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td>").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificacion, "</td>\n        <td>").concat(curso.anio, "</td>");
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
