// Ao clicar em calcular é ativada a função
function calcular() {
  var nota1 = parseFloat(document.getElementById('nota1').value);
  var nota2 = parseFloat(document.getElementById('nota2').value);
  var nota3 = parseFloat(document.getElementById('nota3').value);
  var nota4 = parseFloat(document.getElementById('nota4').value);
 
    var media = (nota1 + nota2 + nota3 + nota4) / 4 ;
 
    if(media >= 6) {
    resultado = "Uhuu, você foi aprovado! </br> Sua média foi: " + media;
    } else {
    resultado = "Poxa! Você não passou :( </br> Sua media foi: " + media;
    }
 
    document.getElementById('resultado').innerHTML = resultado;
 }