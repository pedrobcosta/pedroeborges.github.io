function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('X = ' + x);
    console.log('Y = ' + y);
    console.log('Quociente = ' + Math.floor(x/y));
    console.log('Resto = ' + (x%y));
}

function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('x').value);
    var y = Number.parseFloat(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('Cateto 1 = ' + x)
    console.log('Cateto 2 = ' + y)
    console.log('Hipotenusa = ' +  Math.sqrt(Math.pow(x,2) + Math.pow(y,2)))
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    switch (profissao) {
        case 'Ator':
        console.log('Masculino');
        break;
        
    }
}

