/*function validar(){

    var valor = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;

    if(valor.length > 2){
        alert("Digite dois numeros ou menos!");
        document.formulario.numero.focus();
        return false;
    }else if(nomeValor.length < 3){
        alert("Digite um nome com mais letras...");
        document.formulario.nome.focus();

        return false;  
    }else{
        alert("Formulado enviado com sucesso!");
        return true;
    }
}

<!----------------------------------->
@Renata Cristina

TABLE IMC
Abaixo de 17    Muito abaixo do peso
Entre 17 e 18,49    Abaido do peso
Entre 18.5 e 24,99    Peso normal
Entre 25 e 29.99   Acima do peso

FORMULA = peso/(altura*altura)
*/

var peso;
var altura;
var imc;
var resultado;

function calcular(){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso/(altura*altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:  '+imc.toFixed(2)+'<h3 style="color: #FF0000"><br/>Muito abaixo do peso</h3><br/>';
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if(imc > 17 && imc < 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:  '+imc.toFixed(2)+'<h3><br/>Abaixo do peso</h3><br/>'
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if(imc > 18.5 && imc < 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:  '+imc.toFixed(2)+'<h3><br/>Peso normal</h3><br/>'
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else if(imc > 15 && imc < 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:  '+imc.toFixed(2)+'<h3 style="color: #FF0000"><br/>Acima do peso</h3><br/>'
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else{
        return false;
    }
}
