export enum NivelEducativo {
    BACHILLERATO = "Bachillerato",
    UNIVERSIDAD = "Universidad",
    POSTGRADO = "Postgrado"
}

export class Aprendiz  {
    constructor(public nombres: string, public apellidos: string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo)
    {

    }

}