// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
const area = altura * largura
console.log(area)
}
calculaAreaRetangulo(2, 3)

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
const idade = anoAtual - anoDeNascimento
console.log(idade)
}
imprimeIdade(2023, 1994)

// EXERCÍCIO 03
function calculaIM(peso, altura) {
const IMC = peso /(altura * altura)
console.log(IMC)
}
calculaIM(85, 1.8)


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
console.log("meu nome é", nome, ",tenho", idade,"anos,","meu email é", email)
}
imprimeInformacoesUsuario("Jeferson", 29, "jefersonabreu9494@gmail.com")


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
let coresFavoritas = [cor1, cor2, cor3]
console.log(coresFavoritas)
}
imprimeTresCoresFavoritas("vermelho", "azul", "amarelo")

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string = "oi") {
const letraMaiuscula = string.toUpperCase()
console.log(letraMaiuscula)
}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo , valorIngresso) {
const calculoDoEvento = custo / valorIngresso;
console.log(calculoDoEvento);
}
calculaIngressosEspetaculo(3000, 100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1 = "ola", string2 = "abc") {
const tamanho = string1 === string2;
console.log(tamanho)
}
checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0])
}
retornaPrimeiroElemento()

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
const frutas = ["banana", "laranja", "goiaba"]
console.log(frutas[2])
}
retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const alunos = ["wesley", "marina", "bruno"];
console.log(alunos);
const removeAlunos = alunos.pop();
console.log(removeAlunos);
const removeAlunos2 = alunos.shift();
console.log(removeAlunos2);
alunos.unshift("bruno")
alunos.push("wesley")
console.log(alunos)
}
trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {



}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}