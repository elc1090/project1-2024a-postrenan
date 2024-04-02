document.getElementById("generatePdfBtn").addEventListener("click", function () {
  alert("PDF está sendo gerado, aguarde um momento");
  const doc = new jspdf.jsPDF();
  doc.setFontSize(12);
  doc.setFont('arial');
  doc.setLineHeightFactor(1.5);

  const img = 'aaa.png'
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  doc.addImage(img, "PNG", 0, 0, width, height);

  const nomeAluno = document.getElementById("studentName").value;
  const nomeProfessor = document.getElementById("teacherName").value;
  const dataValue = document.getElementById("date").value;
  const hora = document.getElementById("time").value;
  const nomeAvaliador1 = document.getElementById("av1Name").value;
  const nomeAvaliador2 = document.getElementById("av2Name").value;
  const curso = document.getElementById("course").value;
  const notaFinal = document.getElementById("finalNote").value;
  const dataFim = document.getElementById("finalDate").value;
  const sala = document.getElementById("room").value;
  const titulo = document.getElementById("title").value;

  const contentAv1 = document.getElementById("presentationContentAv1").value;
  const domainAv1 = document.getElementById("domainPresentationAv1").value;
  const sintersAv1 = document.getElementById("timeAndSintersAv1").value;
  const valuePresentationAv1 = document.getElementById("subPresentationAv1").value;

  const structAv1 = document.getElementById("structAv1").value;
  const qualityAv1 = document.getElementById("qualityAv1").value;
  const knowledgeAv1 = document.getElementById("knowledgeAv1").value;
  const adequationAv1 = document.getElementById("adequationAv1").value;
  const writerContentSubAv1 = document.getElementById("subWriteAv1").value;
  const writerContentTotalAv1 = document.getElementById("totalWriteAv1").value;

  const contentAv2 = document.getElementById("presentationContentAv2").value;
  const domainAv2 = document.getElementById("domainPresentationAv2").value;
  const sintersAv2 = document.getElementById("timeAndSintersAv2").value;
  const valuePresentationAv2 = document.getElementById("subPresentationAv2").value;

  const structAv2 = document.getElementById("structAv2").value;
  const qualityAv2 = document.getElementById("qualityAv2").value;
  const knowledgeAv2 = document.getElementById("knowledgeAv2").value;
  const adequationAv2 = document.getElementById("adequationAv2").value;
  const writerContentSubAv2 = document.getElementById("subWriteAv2").value;
  const writerContentTotalAv2 = document.getElementById("totalWriteAv2").value;

  const mediaValuesPresentationContet = (valuePresentationAv1 + valuePresentationAv2) / 2;
  const mediaSubWrite = (writerContentSubAv1 + writerContentSubAv2) / 2;
  const mediaTotalWrite = (writerContentTotalAv1 + writerContentTotalAv2) / 2;

  const radio = document.getElementsByName("radioAv1");

  const selectedYesAv1 = Array.from(radio).find(radio => radio.checked);
  const selectedNoAv1 = Array.from(radio).find(radio => radio.checked);

  const assinaturaProf = document.getElementById("assinaturaOr");
  const imgProf = assinaturaProf.toDataURL("image/png");

  const assinaturaAval1 = document.getElementById("assinaturaAval1");
  const imgAval1 = assinaturaAval1.toDataURL("image/png");

  const assinaturaAval2 = document.getElementById("assinaturaAval2");
  const imgAval2 = assinaturaAval2.toDataURL("image/png");

  const assinaturaAl = document.getElementById("assinaturaAl");
  const imgAl = assinaturaAl.toDataURL("image/png");

  doc.addImage(imgProf, "PNG", 30, 205, 50, 20);
  doc.addImage(imgAval1, "PNG", 30, 230, 50, 20);
  doc.addImage(imgAval2, "PNG", 120, 205, 50, 20);
  doc.addImage(imgAl, "PNG", 120, 230, 50, 20);

  const data = new Date(dataValue);
  const dataF = new Date(dataFim);

  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const mesExt = numeroParaMes(mes);
  const ano = data.getFullYear();

  const diaF = dataF.getDate();
  const mesF = dataF.getMonth() + 1;
  const mesExtF = numeroParaMes(mesF);
  const anoF = dataF.getFullYear();

  const Texto = `
    Aos ${dia} dias do mês de ${mesExt} de ${ano} às ${hora}, na sala ${sala}, realizou-se o Exame da Defesa do Trabalho de Conclusão de Curso intitulado: ${titulo}, de autoria de ${nomeAluno},
    acadêmico (a) do Curso de Graduação em ${curso} da UFSM.
    A Banca Examinadora esteve constituída por ${nomeProfessor}, professor(a) orientador(a) do Trabalho de Conclusão de Curso, e por ${nomeAvaliador1} e  ${nomeAvaliador2}, 
    membros avaliadores. O(a) acadêmico(a) recebeu a nota final ${notaFinal}. Foi concedido até a data de ${diaF} do mês de ${mesExtF} de ${anoF} para o(a) acadêmico(a) realizar as 
    alterações sugeridas pela Banca Examinadora e entregar o trabalho em sua redação definitiva. 
    E para constar foi lavrada a presente Ata, que será assinada pelos membros da Banca Examinadora e pelo(a) acadêmico(a).
  `;

  const local = `
    Santa Maria, RS ${dia} de ${mesExt} de ${ano} 
  `;

  // Função para dividir o texto em várias linhas
  function splitText(text, maxWidth) {
    const splitText = doc.splitTextToSize(text, maxWidth);
    return splitText;
  }

  const maxWidth = 177; // Largura máxima do texto
  const splitTexto = splitText(Texto, maxWidth);

  doc.text(splitTexto, 20, 90);
  doc.text(local, 115, 190);

  // Save the PDF
  doc.save("filled_form.pdf");
});

function numeroParaMes(numero) {
  switch (numero) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Mês inválido";
  }
}
