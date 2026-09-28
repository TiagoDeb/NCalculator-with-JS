const display = document.getElementById("display");

let valorAtual = "";
let valorAnterior = null;
let operacao = null;
let iniciarNovoNumero = false;

function adicionarNumero(numero) {
  if (iniciarNovoNumero) {
    valorAtual = "";
    iniciarNovoNumero = false;
  }

  valorAtual += numero;
  display.value = valorAtual;
}

function escolherOperacao(simbolo) {
  if (valorAtual === "") return;

  valorAnterior = Number(valorAtual);
  operacao = simbolo;
  iniciarNovoNumero = true;
}

function calcular() {
  if (valorAnterior === null || operacao === null || valorAtual === "") return;

  const segundoValor = Number(valorAtual);
  let resultado;

  if (operacao === "+") resultado = valorAnterior + segundoValor;
  if (operacao === "-") resultado = valorAnterior - segundoValor;
  if (operacao === "*") resultado = valorAnterior * segundoValor;
  if (operacao === "/") {
    if (segundoValor === 0) {
      display.value = "Erro";
      valorAtual = "";
      valorAnterior = null;
      operacao = null;
      iniciarNovoNumero = true;
      return;
    }
    resultado = valorAnterior / segundoValor;
  }

  valorAtual = String(resultado);
  display.value = valorAtual;
  valorAnterior = null;
  operacao = null;
  iniciarNovoNumero = true;
}

function limpar() {
  valorAtual = "";
  valorAnterior = null;
  operacao = null;
  iniciarNovoNumero = false;
  display.value = "";
}

document.getElementById("btn0").addEventListener("click", () => adicionarNumero("0"));
document.getElementById("btn1").addEventListener("click", () => adicionarNumero("1"));
document.getElementById("btn2").addEventListener("click", () => adicionarNumero("2"));
document.getElementById("btn3").addEventListener("click", () => adicionarNumero("3"));
document.getElementById("btn4").addEventListener("click", () => adicionarNumero("4"));
document.getElementById("btn5").addEventListener("click", () => adicionarNumero("5"));
document.getElementById("btn6").addEventListener("click", () => adicionarNumero("6"));
document.getElementById("btn7").addEventListener("click", () => adicionarNumero("7"));
document.getElementById("btn8").addEventListener("click", () => adicionarNumero("8"));
document.getElementById("btn9").addEventListener("click", () => adicionarNumero("9"));

document.getElementById("btnSoma").addEventListener("click", () => escolherOperacao("+"));
document.getElementById("btnSubtracao").addEventListener("click", () => escolherOperacao("-"));
document.getElementById("btnMultiplicacao").addEventListener("click", () => escolherOperacao("*"));
document.getElementById("btnDivisao").addEventListener("click", () => escolherOperacao("/"));
document.getElementById("btnIgual").addEventListener("click", calcular);
document.getElementById("btnLimpar").addEventListener("click", limpar);
