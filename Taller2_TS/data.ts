import { Serie } from "./serie.js";

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer." ,
    "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpeg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary.", 
    "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpeg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama.", "https://www.hbo.com/game-of-thrones",
      "https://i.imgur.com/TDCEV1S.jpeg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpeg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps.",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpeg"),

    new Serie (6, "A Very English Scandal"  , "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpeg"),
  ];


let seriesTable: HTMLElement = document.getElementById('series')!;
let filtroButton: HTMLElement= document.getElementById('boton-filtro')!;
let textoBusqueda: HTMLInputElement= <HTMLInputElement>document.getElementById('texto-busqueda')!;

filtroButton.onclick= () => { //Filtro de busqueda de series por nombre
    let text: string=textoBusqueda.value;
    text= (text==null)?"":text; 
    seriesTable.getElementsByTagName("tbody")[1].remove();
    let seriesFiltradas: Serie[]= series.filter(s => s.nombre.match(text));
    mostrarSeries(seriesFiltradas);
}

function mostrarSeries(series: Serie[]): void{
    console.log("mostrarSeries");
    let seriesTbody: HTMLElement= document.createElement("tbody");
    for(let serie of series){
        let trElement: HTMLElement= document.createElement("tr");
        trElement.innerHTML=`
        <td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;	

        trElement.onclick = () => mostrarDetallesSerie(serie);
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function mostrarDetallesSerie(serie: Serie): void {
    const cardImagen: HTMLImageElement = document.getElementById('card-imagen') as HTMLImageElement;
    const cardTitulo: HTMLElement = document.getElementById('card-titulo')!;
    const cardDescripcion: HTMLElement = document.getElementById('card-descripcion')!;
    const cardEnlace: HTMLAnchorElement = document.getElementById('card-enlace') as HTMLAnchorElement;

    console.log(serie.imagen);
    cardImagen.src = '';
    cardImagen.src = serie.imagen; 
    cardTitulo.innerText = serie.nombre;
    cardDescripcion.innerText = serie.descripcion;
    cardEnlace.href = serie.link; 
    cardEnlace.innerText = serie.link; 

    const detalleSerie: HTMLElement = document.getElementById('detalle-serie')!;
    detalleSerie.style.display = 'block'; // Muestra la tarjeta
}

mostrarSeries(series);
const seasonsAverage = series.reduce((sum, serie) => sum + serie.temporadas, 0) / series.length;

// add seasons average
function addSeasonsAverage(average: number){
    let averageElement: HTMLElement= document.createElement("p");
    averageElement.innerHTML=`Promedio de temporadas: ${average}`;
    document.body.appendChild(averageElement);
}
addSeasonsAverage(seasonsAverage);