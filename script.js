


const canvasSt = document.getElementById("signature-pad");
const canvasOr = document.getElementById("signature-padOr");
const canvasAv1 = document.getElementById("signature-padAv1");
const canvasAv2 = document.getElementById("signature-padAv2");
const name = document.getElementById("stName");
const professor = document.getElementById("orName");
const avaliator1 = document.getElementById("av1Name")
const avaliator2 = document.getElementById("av2Name");
const course = document.getElementById("course");
const note = document.getElementById("note");
const date = document.getElementById("date");
const time = document.getElementById("time");
const finalDate = document.getElementById("finalDate");
const observations = document.getElementById("observations");


function generatePDF() {
    const doc = new jsPDF();
    const elementHandler = {
        '#ignorePDF': function (element, renderer) {
            return true;
        }
    };
    const source = window.document.getElementsByTagName("body")[50];
    doc.fromHTML = function (source) {

    };
    doc.fromHTML(source, 15, 15,
        {
            'width': 180, 'elementHandlers': elementHandler
        });

    doc.output("dataurlnewwindow");

}

function submit(name, professor, avaliator1, avaliator2, course, note, date, time, finalDate, observations) {

    alert("deu certo porra");
}


function resizeCanvas() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvasSt.width = canvasSt.offsetWidth * ratio;
    canvasSt.height = canvasSt.offsetHeight * ratio;
    canvasSt.getContext("2d").scale(ratio, ratio);
    canvasOr.width = canvasOr.offsetWidth * ratio;
    canvasOr.height = canvasOr.offsetHeight * ratio;
    canvasOr.getContext("2d").scale(ratio, ratio);
    canvasAv1.width = canvasAv1.offsetWidth * ratio;
    canvasAv1.height = canvasAv1.offsetHeight * ratio;
    canvasAv1.getContext("2d").scale(ratio, ratio);
    canvasAv2.width = canvasAv2.offsetWidth * ratio;
    canvasAv2.height = canvasAv2.offsetHeight * ratio;
    canvasAv2.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

const signaturePad = new SignaturePad(canvasSt, {
    backgroundColor: 'rgb(250,250,250)'
});

const signaturePadOr = new SignaturePad(canvasOr, {
    backgroundColor: 'rgb(250,250,250)'
});

const signaturePadAv1 = new SignaturePad(canvasAv1, {
    backgroundColor: 'rgb(250,250,250)'
});

const signaturePadAv2 = new SignaturePad(canvasAv2, {
    backgroundColor: 'rgb(250,250,250)'
});


document.getElementById("clear").addEventListener('click', function () {
    signaturePad.clear();
})


document.getElementById("clearOr").addEventListener('click', function () {
    signaturePadOr.clear();
})


document.getElementById("clearAv1").addEventListener('click', function () {
    signaturePadAv1.clear();
})

document.getElementById("clearAv2").addEventListener('click', function () {
    signaturePadAv2.clear();
})

