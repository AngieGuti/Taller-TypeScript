import {Curso} from "./curso.js";

export enum NivelEducativo {
    BACHILLERATO = "Bachillerato",
    UNIVERSIDAD = "Universidad",
    POSTGRADO = "Postgrado"
}

export class Aprendiz  {
    constructor(public nombres: string, public apellidos: string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo, public cursos: Curso[]) 
    {

    }

    public cursosCertificados(): number{
        let totalCursos: number = 0;
        for (let i=0; i<this.cursos.length; i++){
            let curso = this.cursos[i];
            if (curso.certificacion){
                totalCursos++;
            }
        }
        return totalCursos;
    }

}