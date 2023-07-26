//Reference needed Elements
var Logo = document.getElementById("logo")
var RotateLogoBtn = document.getElementById("rotate-logo-btn");

//Listen for Rotate Button to be clicked
RotateLogoBtn.addEventListener("click", () => {
    RotateLogo();
})

//Stores Current Rotation Value
var CurrentRotation = 0;

function RotateLogo(){
    CurrentRotation += 45;
    Logo.style.transform = 'rotate(' + CurrentRotation + 'deg)';
}