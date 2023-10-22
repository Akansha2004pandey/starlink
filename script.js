var accelerationXSlider = document.getElementById("accelerationXSlider");
var accelerationYSlider = document.getElementById("accelerationYSlider");
var accelerationZSlider = document.getElementById("accelerationZSlider");
var distanceSlider = document.getElementById("distanceSlider");
var resultElement = document.getElementById("result");
function calculateAngleChange() {
    // Parse the values from the sliders
    var accelerationX = parseFloat(accelerationXSlider.value);
    var accelerationY = parseFloat(accelerationYSlider.value);
    var accelerationZ = parseFloat(accelerationZSlider.value);
    var distance = parseFloat(distanceSlider.value);
    var accelerationMagnitude = Math.sqrt(
        accelerationX * accelerationX +
        accelerationY * accelerationY +
        accelerationZ * accelerationZ
    );
    var angleChangeRad = Math.atan(accelerationMagnitude / 9.81);
    var angleChangeDegrees = (angleChangeRad * 180) / Math.PI;
    var horizontalAngleChangeRad = Math.atan(distance * 1000 / distance);
    var horizontalAngleChangeDegrees = (horizontalAngleChangeRad * 180) / Math.PI;
    var totalAngleChangeDegrees = angleChangeDegrees + horizontalAngleChangeDegrees;
    resultElement.textContent = "Angle Change: " + totalAngleChangeDegrees.toFixed(2) + " degrees";
}
accelerationXSlider.attachEvent("onchange", calculateAngleChange);
accelerationYSlider.attachEvent("onchange", calculateAngleChange);
accelerationZSlider.attachEvent("onchange", calculateAngleChange);
distanceSlider.attachEvent("onchange", calculateAngleChange);
calculateAngleChange();
