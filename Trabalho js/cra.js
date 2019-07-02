function cra() {
    var nota = [];
    var cargahoraria = [];
    var cargareprov = [];
    function multiplicalista(lst1, lst2) {
        // array array -> array
        // multipica elemento i de uma lista pelo 
        // correspondente em outra lista (sobrescreve na primeira array argumento)
        var aux = lst1
        for (i = 0; lst1[i] != null || lst2[i] != null; i++) {
            aux[i] = lst1[i] * lst2[i];
        }
        return aux;
    }
    function somalista(lst) {
        // array -> array
        // retorna a soma dos elementos de uma array
        var aux = lst;
        while (aux.length > 1) {
            aux[0] = lst[0] + lst[lst.length - 1];
            lst.pop();
        }
        return aux[0];
    }
    var aux = multiplicalista(nota, cargahoraria);
    var somadetudo = somalista(aux);
    var totalhoras = somalista(cargahoraria);
    var total = somadetudo / totalhoras;
    var reprovacao = 1 - (0.5 * (cargareprov / totalhoras));
    return total * reprovacao;
}