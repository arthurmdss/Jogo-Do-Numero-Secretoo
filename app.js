alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// while  = loops
while (chute != numeroSecreto) {
  chute = prompt("Escolha um numero entre 1 e 30");
  // if = comando if para verificar uma expressão e executar um bloco de código caso a condição definida seja verdadeira
  if (numeroSecreto == chute) {
    break;

  }
  else {
    if (chute > numeroSecreto) {
      alert(`o numerosecreto é menorque ${chute}`);
    }
    else {
      alert(`o numero secreto é maior que${chute}`);
    }
  }   tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
if(tentativas > 1){
  alert(`Isso ai você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}
else{
  alert(`Isso ai você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
