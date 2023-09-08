const { AwesomeQR } = require("awesome-qr");
const { generateKey } = require("crypto");
const fs = require("fs");

// ...

//const background = fs.readFileSync("background.png");

async function generateQRCode() {

const buffer = await new AwesomeQR({
    text: "https://www.luriechildrens.org/campaignFEC/",
    size: 500,
    margin: 20,
    colorDark: "#007DC3",
    colorLight: "#FFFFFF",
    logoImage: fs.readFileSync("Hand.png"),
    logoScale: 0.25,
    correctLevel: AwesomeQR.CorrectLevel.M


}).draw();

fs.writeFileSync("qrcode.png", buffer);
}

generateQRCode();
