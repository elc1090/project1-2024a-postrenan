
function iniciarCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const assinaturaImagem = document.getElementById("assinaturaImagem");

    let desenhando = false;
    let xAnterior = 0;
    let yAnterior = 0;

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
        const x = e.clientX - canvas.getBoundingClientRect().left;
        const y = e.clientY - canvas.getBoundingClientRect().top;

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
        const x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
        const y = e.touches[0].clientY - canvas.getBoundingClientRect().top;

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
