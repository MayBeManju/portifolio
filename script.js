
function chama() {
    //document.body.style.backgroundColor = "red";
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let soma = a + b;
    //alert("SOMA IGUAL A " + soma)
    console.log("SOMA IGUAL A " + soma)
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "SOMA IGUAL A " + soma
}
//ponto de mínimo / máximo
function exercicio1() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let xv = -b/(2*a)
    let delta = b*b - 4*a*c
    let yv = -delta/(4*a)
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "O PONTO É (" + xv.toFixed(2) + "," + yv.toFixed(2) + ")";
}

//conversão de temperatura
function exercicio2(){
    //alert("teste");
    //vai usar uma variável pq muda de valor dependendo do que for digitado
    let resultado;
    let t = document.getElementById("temp").value;
    console.log("TEMP=" + t)
    let escala = document.getElementById("converter") . value;
    console.log("PARA= " + escala ) 
    if(escala == "c"){
        //C = (F-32) * 5 /9
        resultado = (t-32)*5/9;
        document.getElementById("saida").innerHTML = t + "<sup>o</sup>F vale " + resultado + "<sup>o</sup>C"
    }
    else {
        resultado = 9*t/5 + 32
        document.getElementById("saida").innerHTML = t + "<sup>o</sup>C vale " + resultado + "<sup>o</sup>F"

        }
    }

function exercicio3(){
    //alert("teste");
    let resultado;
    //pegar o que foi inserido no form e converter para float
    let valor = parseFloat(document.getElementById("valor").value);
    console.log("VALOR=" + valor)
    //pegar a opção e converter para inteiro
    let opcao = parseInt(document.getElementById("opcao").value);
    console.log("OPCAO= " + opcao ) 

    if(opcao == 1){
        //30% do valor
        resultado = 0.3*valor;
        document.getElementById("saida").innerHTML = resultado + " é 30% de  " + valor 
    }
    else if(opcao == 2) {
        //acréscimo de 30%
        resultado = 1.3*valor;
        document.getElementById("saida").innerHTML = resultado + " com acréscimo em " + valor 
}
    else{
        //desconto de 30%
        resultado = 0.7*valor;
        document.getElementById("saida").innerHTML = resultado + " descontando 30% de " + valor 
}
}
