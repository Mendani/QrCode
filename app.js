const contenedorqr = document.getElementById("contenedorqr");
const formulario = document.getElementById("formulario");

const QR = new QRCode(contenedorqr);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  QR.makeCode(formulario.input.value);
});
