var slider;
var system;
var lastSliderValue;

function setSystem(newSystem) {
    system = newSystem;
    lastSliderValue = slider.value() - 1;
}

function setup() {
    createCanvas(700, 400);
    slider = createSlider(0, 10, 5, 1);

    setSystem(new FractalBinaryTree())
}

function draw() {
    if (slider.value() != lastSliderValue) {
        background(60, 64, 73);
        stroke(0, 255, 255);
        strokeWeight(2);
        angleMode(DEGREES);
        system.display(slider.value());
        lastSliderValue = slider.value();
    }
}