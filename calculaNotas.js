function verificarValorAv1(input) {
    const valor = parseFloat(input.value);
    if (valor > 1) {
        input.value = '';
        alert('O valor inserido é maior que 1. O campo foi zerado.');
    }
    calcularApresentacaoAv1()
    calcularRelatorioAv1()
}
function verificarValor2Av1(input) {
    const valor = parseFloat(input.value);
    if (valor > 2) {
        input.value = '';
        alert('O valor inserido é maior que 2. O campo foi zerado.');
    }
    calcularApresentacaoAv1()
    calcularRelatorioAv1()
}
function verificarValor3Av1(input) {
    const valor = parseFloat(input.value);
    if (valor > 3) {
        input.value = '';
        alert('O valor inserido é maior que 3. O campo foi zerado.');
    }
    calcularApresentacaoAv1()
    calcularRelatorioAv1()
}

function verificarValorAv2(input) {
    const valor = parseFloat(input.value);
    if (valor > 1) {
        input.value = '';
        alert('O valor inserido é maior que 1. O campo foi zerado.');
    }
    calcularApresentacaoAv2()
    calcularRelatorioAv2()
}
function verificarValor2Av2(input) {
    const valor = parseFloat(input.value);
    if (valor > 2) {
        input.value = '';
        alert('O valor inserido é maior que 2. O campo foi zerado.');
    }
    calcularApresentacaoAv2()
    calcularRelatorioAv2()
}
function verificarValor3Av2(input) {
    const valor = parseFloat(input.value);
    if (valor > 3) {
        input.value = '';
        alert('O valor inserido é maior que 3. O campo foi zerado.');
    }
    calcularApresentacaoAv2()
    calcularRelatorioAv2()
}


$(document).ready(function() {
    formatarNotas();
  });
  
  function formatarNotas() {
    $(".nota-input").maskMoney({
      thousands: '',
      decimal: '.',
      precision: 2,
      allowZero: true,
      allowNegative: false
    });

}

function calcularApresentacaoAv1() {
    const notaConteudo = parseFloat(document.getElementById("presentationContentAv1").value);
    const notaDominio = parseFloat(document.getElementById("domainPresentationAv1").value);
    const notaPoderSintese = parseFloat(document.getElementById("timeAndSintersAv1").value);
  
    if (!isNaN(notaConteudo) && !isNaN(notaDominio) && !isNaN(notaPoderSintese)) {

        const subTotal3 = notaConteudo + notaDominio + notaPoderSintese;

        document.getElementById("subPresentationAv1").value = subTotal3.toFixed(2);
    } else {
      document.getElementById("subPresentationAv1").value = "";
    }
    calcularTotalAv1();
  }
  
  function calcularRelatorioAv1() {

      const notaEstrutura = parseFloat(document.getElementById("structAv1").value);
      const notaRelOriQual = parseFloat(document.getElementById("qualityAv1").value);
      const notaConhecimento = parseFloat(document.getElementById("knowledgeAv1").value);
      const notaAdequacao = parseFloat(document.getElementById("adequationAv1").value);
  
    if (!isNaN(notaEstrutura) && !isNaN(notaRelOriQual) && !isNaN(notaConhecimento) && !isNaN(notaAdequacao)) {

        const subTotal7 = notaEstrutura + notaRelOriQual + notaConhecimento + notaAdequacao;

        document.getElementById("subWriteAv1").value = subTotal7.toFixed(2);
    } else {
      document.getElementById("subWriteAv1").value = "";
    }
  
    calcularTotalAv1();
  }
  
  function calcularTotalAv1() {
    const subTotal3 = parseFloat(document.getElementById("subPresentationAv1").value);
    const subTotal7 = parseFloat(document.getElementById("subWriteAv1").value);
  
    if (!isNaN(subTotal3) && !isNaN(subTotal7)) {
        const total = subTotal3 + subTotal7;
      document.getElementById("totalWriteAv1").value = total.toFixed(2);
    } else {
      document.getElementById("totalWriteAv1").value = "";
    }
  }
  
  document.getElementById("presentationContentAv1").addEventListener("input", calcularApresentacaoAv1)
  document.getElementById("domainPresentationAv1").addEventListener("input", calcularApresentacaoAv1);
  document.getElementById("timeAndSintersAv1").addEventListener("input", calcularApresentacaoAv1);
  
  document.getElementById("adequationAv1").addEventListener("input", calcularRelatorioAv1);
  document.getElementById("knowledgeAv1").addEventListener("input", calcularRelatorioAv1);
  document.getElementById("qualityAv1").addEventListener("input", calcularRelatorioAv1);
  document.getElementById("structAv1").addEventListener("input", calcularRelatorioAv1);




function calcularApresentacaoAv2() {
    const notaConteudo = parseFloat(document.getElementById("presentationContentAv2").value);
    const notaDominio = parseFloat(document.getElementById("domainPresentationAv2").value);
    const notaPoderSintese = parseFloat(document.getElementById("timeAndSintersAv2").value);

    if (!isNaN(notaConteudo) && !isNaN(notaDominio) && !isNaN(notaPoderSintese)) {

        const subTotal3 = notaConteudo + notaDominio + notaPoderSintese;

        document.getElementById("subPresentationAv2").value = subTotal3.toFixed(2);
    } else {
        document.getElementById("subPresentationAv2").value = "";
    }
    calcularTotalAv2();
}

function calcularRelatorioAv2() {

    const notaEstrutura = parseFloat(document.getElementById("structAv2").value);
    const notaRelOriQual = parseFloat(document.getElementById("qualityAv2").value);
    const notaConhecimento = parseFloat(document.getElementById("knowledgeAv2").value);
    const notaAdequacao = parseFloat(document.getElementById("adequationAv2").value);

    if (!isNaN(notaEstrutura) && !isNaN(notaRelOriQual) && !isNaN(notaConhecimento) && !isNaN(notaAdequacao)) {

        const subTotal7 = notaEstrutura + notaRelOriQual + notaConhecimento + notaAdequacao;

        document.getElementById("subWriteAv2").value = subTotal7.toFixed(2);
    } else {
        document.getElementById("subWriteAv2").value = "";
    }

    calcularTotalAv2();
}

function calcularTotalAv2() {
    const subTotal3 = parseFloat(document.getElementById("subPresentationAv2").value);
    const subTotal7 = parseFloat(document.getElementById("subWriteAv2").value);

    if (!isNaN(subTotal3) && !isNaN(subTotal7)) {
        const total = subTotal3 + subTotal7;
        document.getElementById("totalWriteAv2").value = total.toFixed(2);
    } else {
        document.getElementById("totalWriteAv2").value = "";
    }
}

document.getElementById("presentationContentAv2").addEventListener("input", calcularApresentacaoAv2)
document.getElementById("domainPresentationAv2").addEventListener("input", calcularApresentacaoAv2);
document.getElementById("timeAndSintersAv2").addEventListener("input", calcularApresentacaoAv2);

document.getElementById("adequationAv2").addEventListener("input", calcularRelatorioAv2);
document.getElementById("knowledgeAv2").addEventListener("input", calcularRelatorioAv2);
document.getElementById("qualityAv2").addEventListener("input", calcularRelatorioAv2);
document.getElementById("structAv2").addEventListener("input", calcularRelatorioAv2);
