var slider;
var system;
var lastSliderValue;

function setSystem(newSystem) {
    system = newSystem;
    lastSliderValue = slider.value() - 1;
}

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, 10, 5, 1);

    var button;
    button = createButton('Fractal Binary Tree');
    button.mousePressed(() => setSystem(new FractalBinaryTree()));

    button = createButton('Sierpinski Triangle');
    button.mousePressed(() => setSystem(new SierpinskiTriangle()));

    button = createButton('Sierpinski Arrowhead Curve');
    button.mousePressed(() => setSystem(new SierpinskiArrowheadCurve()));

    button = createButton('Dragon Curve');
    button.mousePressed(() => setSystem(new DragonCurve()));

    button = createButton('Fractal Plant');
    button.mousePressed(() => setSystem(new FractalPlant()));

    setSystem(new FractalBinaryTree())
}

function draw() {
    if (slider.value() != lastSliderValue) {
        background(220);
        stroke(0);
        strokeWeight(2);
        angleMode(DEGREES);
        system.display(slider.value());
        lastSliderValue = slider.value();
    }
}