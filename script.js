var num = document.querySelector("input#txtn");
var listagem = document.querySelector("select#tabList");
var res = document.querySelector("div#res")
var valores = []

function naoValido(n) {
return (num.value.length == 0 || num.value <= 0 ||num.value >= 101) ;
}

function inLista (n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}
num.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if(key == 13) {
    adicionar();
    }
})

num.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if(key == 13) {
    verificar();
    }
})


function adicionar() {
    if(!naoValido(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado!`;
        listagem.appendChild(item);
        res.innerHTML = ""
    } else {
        alert("Valor inválido ou já existente na lista!")
    }
    num.value = " ";
    num.focus();

}

function verificar() {
    if( valores.length == 0) {
        alert("Adicione o valor antes de verificar!");
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total

        res.innerHTML = "";
        res.innerHTML += `<p>Ao total temos ${total} números cadastrados. </p>`; 
        res.innerHTML += `<p>O maior valor informado é: ${maior}. </p>`;
        res.innerHTML += `<p> O menor valor informado é: ${menor}. </p>`;
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}. </p>`;
        res.innerHTML += `<p>A média de todos os valores é: ${media}. </p>`;
    }
}