function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('X = ' + x);
    console.log('Y = ' + y);
    console.log('Quociente = ' + Math.floor(x / y));
    console.log('Resto = ' + (x % y));
}

function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('x').value);
    var y = Number.parseFloat(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('Cateto 1 = ' + x)
    console.log('Cateto 2 = ' + y)
    console.log('Hipotenusa = ' + Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)))
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    switch (profissao) {
        case 'Bombeiro':
            console.log('Masculino');
            break;
        case 'Ator':
            console.log('Masculino');
            break;
        case 'Atriz':
            console.log('Feminino');
            break;
        case 'Enfermeira':
            console.log('Feminino');
            break;
        case 'Médica':
            console.log('Feminino');
            break;
        case 'Musicista':
            console.log('Ambos');
            break;
        case 'Presidente':
            console.log('Ambos');
            break;
        case 'Musico':
            console.log('Masculino');
            break;
        case 'Médico':
            console.log('Masculino');
            break;
        case 'Engenheiro':
            console.log('Masculino');
            break;
        case 'Professor':
            console.log('Masculino');
            break;
        case 'Engenheira':
            console.log('Feminino');
            break;
        case 'Professora':
            console.log('Feminino');
            break;
        case 'Farmacêutica':
            console.log('Feminino');
            break;
    }
}

function Q4() {
    console.log('Q4');
    var a_str = document.getElementById('a').value;
    var b_str = document.getElementById('b').value;
    var c_str = document.getElementById('c').value;
    // Segue aqui seu código
    if (!a_str) {
        console.log('A = ' + Math.sqrt(Math.pow(b_str, 2) + Math.pow(c_str, 2)))
        console.log('B = ' + b_str)
        console.log('C = ' + c_str)
    } else if (!b_str) {
        console.log('A = ' + a_str)
        console.log('B = ' + Math.sqrt(Math.pow(a_str, 2) - Math.pow(c_str, 2)))
        console.log('C = ' + c_str)
    } else if (!c_str) {
        console.log('A = ' + a_str)
        console.log('B = ' + b_str)
        console.log('C = ' + Math.sqrt(Math.pow(a_str, 2) - Math.pow(b_str, 2)))
    } else {
        console.log('É necessário informar exatamente dois lados do triângulo')
    }
}

function Q5() {
    console.log('Q5');
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    var imc = peso / Math.pow(altura, 2)
    switch (genero) {
        case 'Masculino':
            console.log('Altura = ' + altura);
            console.log('Massa = ' + peso);
            console.log('IMC = ' + imc);
            if (imc <= 18.5) {
                console.log('Magro')
            };
            if (imc > 18.5 && imc <= 24.9) {
                console.log('Sarado')
            };
            if (imc > 24.9 && imc <= 29.9) {
                console.log('Rechonchudo')
            };
            if (imc > 29.9) {
                console.log('Obeso')
            };
            break
        case 'Feminino':
            console.log('Altura = ' + altura);
            console.log('Massa = ' + peso);
            console.log('IMC = ' + imc);
            if (imc <= 18.5) {
                console.log('Magra')
            };
            if (imc > 18.5 && imc <= 24.9) {
                console.log('Sarada')
            };
            if (imc > 24.9 && imc <= 29.9) {
                console.log('Rechonchuda')
            };
            if (imc > 29.9) {
                console.log('Obesa')
            };
    }
}

