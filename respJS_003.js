function Q1() {
    console.log('Q1');
    var aux = Number.parseInt(document.getElementById('numerosQ1').value);
    var pares = [];
    for (let num = 0; num <= aux; num += 2) {
        pares.push(num);
    }
    var resp = pares
    document.getElementById('RQ1').innerHTML = "Texto da resposta: " + resp;
    console.log(resp);
}

function Q2() {
    console.log('Q2');
    var aux = Number.parseInt(document.getElementById('numerosQ2').value);
    var primos = [];
    function primoounao(x) {
        if (x != 1) {
        for (let j = 2; j < x; j++) 
            if (x % j == 0) return false;
                return x !== 1;
    }
}
    for (let i = 2; i <= aux; i++) {
        if (primoounao(i) == true)
            primos.push(i);
    }
    document.getElementById('RQ2').innerHTML = "Texto da resposta: " + primos;
    console.log(primos);
}

function Q3() {
    console.log('Q3'); 
    var listaStrings = [];
    var novaString = document.getElementById('novaString').value;
    listaStrings.push(novaString);
    for (let i = 0; i <= listaStrings.length; i++) {
        listaStrings = listaStrings[i].toUpperCase();
    }
    document.getElementById('RQ3').innerHTML = "Texto da resposta: " + listaStrings;
    console.log(listaStrings);
}


