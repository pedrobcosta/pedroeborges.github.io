function Q1() {
    console.log('Q1');
    var aux = Number.parseInt(document.getElementById('numerosQ1').value);
    var pares = [];
    for (let num = 0; num <= aux; num += 2) {
        pares.push(num);
    }
    var resp = pares
    document.getElementById('RQ1').innerHTML = "Texto da resposta: " + resp;
    console.log(resp)
}

function Q2() {
    console.log('Q2');
    var aux = Number.parseInt(document.getElementById('numerosQ2').value);
    var primos = [];
    function primoounao(x) {
        for (let num = 2; num < x; num++) {
            if (x % num == 0)
                return false;
        }
        if (primoounao != false)
            primoounao = true;
    }
    for (let num1 = 2; num1 <= aux; num1++) {
        if (primoounao(num1) == true)
            primos.push(num1);
    }
    var resp = primos
    document.getElementById('RQ2').innerHTML = "Texto da resposta: " + resp;
    console.log(resp)
    console.log(primoounao(2))
    console.log(primouounao(7))
    console.log(primoounao(8))
}


