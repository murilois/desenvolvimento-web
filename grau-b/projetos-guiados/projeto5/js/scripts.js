// 1 Acha os elementos
const container = document.querySelector(".container");
const btn = document.querySelector("#my-btn");
const qrCodeInput = document.querySelector("#form-qrcode input");
const qrCodeImg = document.querySelector("#qrcode-container img")

// 2 Funções
function generateQRCode(){
    const qrCodeInputValue = qrCodeInput.value;
    btn.innerText = "Gerando...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
       container.classList.add("active");
       btn.innerText = "QRCode gerado!"
    })
}

// 3 Eventos
btn.addEventListener("click", () => {
    generateQRCode();
})