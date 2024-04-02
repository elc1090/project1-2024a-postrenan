
function iniciarCanvas(canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    var assinaturaImagem = document.getElementById("assinaturaImagem");

    var desenhando = false;
    var xAnterior = 0;
    var yAnterior = 0;

    canvas.addEventListener("mousedown", function (e) {
        desenhando = true;
        xAnterior = e.clientX - canvas.getBoundingClientRect().left;
        yAnterior = e.clientY - canvas.getBoundingClientRect().top;
    });

    canvas.addEventListener("touchstart", function (e) {
        e.preventDefault();
        desenhando = true;
        xAnterior = e.touches[0].clientX - canvas.getBoundingClientRect().left;
        yAnterior = e.touches[0].clientY - canvas.getBoundingClientRect().top;
    });

    canvas.addEventListener("mousemove", function (e) {
        if (!desenhando) return;
        var x = e.clientX - canvas.getBoundingClientRect().left;
        var y = e.clientY - canvas.getBoundingClientRect().top;

        ctx.beginPath();
        ctx.moveTo(xAnterior, yAnterior);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.stroke();

        xAnterior = x;
        yAnterior = y;
    });

    canvas.addEventListener("touchmove", function (e) {
        e.preventDefault(); // Impede o comportamento padrão do toque
        if (!desenhando) return;
        var x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
        var y = e.touches[0].clientY - canvas.getBoundingClientRect().top;

        ctx.beginPath();
        ctx.moveTo(xAnterior, yAnterior);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.stroke();

        xAnterior = x;
        yAnterior = y;
    });

    canvas.addEventListener("mouseup", function () {
        desenhando = false;
    });

    canvas.addEventListener("touchend", function (e) {
        e.preventDefault();
        desenhando = false;
    });
}

iniciarCanvas("assinaturaOr");
iniciarCanvas("assinaturaAl");
iniciarCanvas("assinaturaAval1");
iniciarCanvas("assinaturaAval2");

function limparAssinatura(canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function limparTodasAsAssinaturas() {
    limparAssinatura("assinaturaOr");
    limparAssinatura("assinaturaAl");
    limparAssinatura("assinaturaAval1");
    limparAssinatura("assinaturaAval2");
}
