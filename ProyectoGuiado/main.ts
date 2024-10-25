import {Aprendiz, NivelEducativo} from './aprendiz.js';
import {Curso} from './curso.js';

let cursos= [new Curso("Dalgo", 80, 10, false, 2024), 
    new Curso("Desarrollo", 50, 45, true, 2024),
    new Curso("Arquiemp", 100, 41, true, 2024),
    new Curso("Sistrans", 55, 35, false, 2025)];

export const ap= new Aprendiz("Angie Camila", "Gutiérrez Trujillo", "avatar.jpg", 19, NivelEducativo.UNIVERSIDAD,  cursos); 

let aprendizTable: HTMLElement = document.getElementById('aprendiz')!;
let estadisticasTable: HTMLElement = document.getElementById('estadisticas')!;
let cursosTable: HTMLElement= document.getElementById('cursos')!;
let filtroButton: HTMLElement= document.getElementById('boton-filtro')!;
let textoBusqueda: HTMLInputElement= <HTMLInputElement>document.getElementById('texto-busqueda')!;

filtroButton.onclick= () => {
    let text: string=textoBusqueda.value;
    text= (text==null)?"":text; 
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[]= ap.cursos.filter(c => c.nombre.match(text));
    mostrarCursosAprendiz(cursosFiltrados);
}

mostrarDatosAprendiz(ap);
mostrarEstadisticasAprendiz(ap);
mostrarCursosAprendiz(ap.cursos);


function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tbodyAprendiz= document.createElement("tbody");
    tbodyAprendiz.innerHTML=`<tr><td colspan=2><img src="./${aprendiz.avatar}" height=100 </td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel Educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticasAprendiz(aprendiz: Aprendiz): void{
    let numeroCertificados: number= aprendiz.cursosCertificados();
    let trElement: HTMLElement= document.createElement("tr");
    trElement.innerHTML=`<td><b>Cursos Certificados</b></td><td>${numeroCertificados}</td>`;
    estadisticasTable.appendChild(trElement);
}

function mostrarCursosAprendiz(cursos: Curso[]): void{
    let cursosTbody: HTMLElement= document.createElement("tbody");
    for(let curso of cursos){
        let trElement: HTMLElement= document.createElement("tr");
        trElement.innerHTML=`<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td>${curso.calificacion}</td>
        <td>${curso.certificacion}</td>
        <td>${curso.anio}</td>`;	
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
