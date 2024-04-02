
document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameter by name
    function getParameterByName(name) {
      var urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    // Get values from URL parameters
    var tituloTrabalhoParam = getParameterByName("title");
    var nomeAlunoParam = getParameterByName("stName");
    var nomeAvaliador1Param = getParameterByName("av1Name");
    var nomeAvaliador2Param = getParameterByName("av2Name");
    var nomeProfessorParam = getParameterByName("orName");
    var dataParam = getParameterByName("date");
    var horaParam = getParameterByName("time");
    var cursoParam = getParameterByName("course");
    var salaParam = getParameterByName("room");

    // Fill form fields with URL parameter values
    document.getElementById("title").value = tituloTrabalhoParam || "";
    document.getElementById("stName").value = nomeAlunoParam || "";
    document.getElementById("av1Name").value = nomeAvaliador1Param || "";
    document.getElementById("av2Name").value = nomeAvaliador2Param || "";
    document.getElementById("orName").value = nomeProfessorParam || "";
    document.getElementById("date").value = dataParam || "";
    document.getElementById("time").value = horaParam || "";
    document.getElementById("course").value = cursoParam || "";
    document.getElementById("room").value = salaParam || "";
  });


const btn = document.querySelector("#gerarLink");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const nomeAluno = encodeURIComponent(document.getElementById("stName").value);
    const tituloTrabalho = encodeURIComponent(document.getElementById("title").value);
    const nomeAvaliador1 = encodeURIComponent(document.getElementById("av1Name").value);
    const nomeAvaliador2 = encodeURIComponent(document.getElementById("av2Name").value);
    const nomeProfessor = encodeURIComponent(document.getElementById("orName").value);
    const dataValue = encodeURIComponent(document.getElementById("date").value);
    const horaValue = encodeURIComponent(document.getElementById("time").value);
    const curso = encodeURIComponent(document.getElementById("course").value);
    const sala = encodeURIComponent(document.getElementById("room").value);


    const url = `index.html?tituloTrabalho=${tituloTrabalho}&nomeAluno=${nomeAluno}&nomeProfessor=${nomeProfessor}&nomeAvaliador1=${nomeAvaliador1}&nomeAvaliador2=${nomeAvaliador2}&curso=${curso}&data=${dataValue}&hora=${horaValue}&sala=${sala}`;

    window.open(url, '_blank');
});
