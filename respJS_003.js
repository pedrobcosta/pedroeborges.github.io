function Q1() {
    console.log('Q1');
    var aux = Number.parseInt(document.getElementById('numerosQ1').value);
    var pares = [];
    //var parounao = (num) => {
    //    if (num%2==0)
    //    return true;
    //    else
    //    return false;
    //};
    for (let num = 0; num <= aux; num+=2) {
        pares.push(num);
    }
    var resp = pares
    document.getElementById('RQ1').innerHTML = "Texto da resposta: " + resp;
    console.log(resp)
}

function Q2() {
    console.log('Q2');
    var aux = Number.parseInt(document.getElementById('numerosQ2').value);
    var aux2 = 0
    var primos = [];
    var primoounao = (x) => {
        for (num=2; num<x; num++) {
            if (x%num==0)
            return false;
        }
        if (primoounao!=false)
        primoounao = true;
    }
    for (let num=2; num<=aux; num++) {
        if (primoounao(num)==true)
        primos.push(num);
    }
    var resp = primos
    document.getElementById('RQ2').innerHTML = "Texto da resposta: " + resp;
    console.log(resp)
    }


