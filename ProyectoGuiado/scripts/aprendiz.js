export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSIDAD"] = "Universidad";
    NivelEducativo["POSTGRADO"] = "Postgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, cursos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.cursosCertificados = function () {
        var totalCursos = 0;
        for (var i = 0; i < this.cursos.length; i++) {
            var curso = this.cursos[i];
            if (curso.certificacion) {
                totalCursos++;
            }
        }
        return totalCursos;
    };
    return Aprendiz;
}());
export { Aprendiz };
