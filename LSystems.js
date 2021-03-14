
class LSystem {
  constructor(rules, start) {
    this.rules = rules;
    this.start = start;
  }

  generate(count) {

    var string = this.start;

    for (var i = 0; i < count; i++) {
      var newString = "";

      for (var c of string) {
        newString += this.rules[c];
      }

      string = newString;
    }

    return string;
  }
}


class FractalBinaryTree extends LSystem {
  constructor() {
    super({
      '0': "1[0]0",
      '1': "11",
      '[': "[",
      ']': "]"
    }, "0")
  }

  display(count) {
    const string = super.generate(count);
    const len = -300 * pow(0.5, count);

    translate(width / 2, height);

    for (const c of string) {
      if (c == '0' || c == '1') {
        line(0, 0, 0, len)
        translate(0, len)
      } else if (c == '[') {
        push()
        rotate(-45)
      } else if (c == ']') {
        pop()
        rotate(45)
      }
    }
  }
}


class SierpinskiTriangle extends LSystem {
  constructor() {
    super({
      'F': "F-G+F+G-F",
      'G': "GG",
      '+': "+",
      '-': "-"
    }, "F-G-G")
  }

  display(count) {
    const string = super.generate(count);
    const len = -200 * pow(0.5, count);

    translate(width * 0.7, height * 0.7);

    for (const c of string) {
      if (c == 'F' || c == 'G') {
        line(0, 0, 0, len)
        translate(0, len)
      } else if (c == '+') {
        rotate(120)
      } else if (c == '-') {
        rotate(-120)
      }
    }
  }
}


class SierpinskiArrowheadCurve extends LSystem {
  constructor() {
    super({
      'A': "B-A-B",
      'B': "A+B+A",
      '+': "+",
      '-': "-"
    }, "A")
  }

  display(count) {
    const string = super.generate(count);
    const len = -100 * pow(0.5, count);

    translate(width * 0.35, height * 0.7);
    if (count % 2 == 0)
      scale(1.0, -1.0);    // flip x-axis backwards
    rotate(90)

    for (const c of string) {
      if (c == 'A' || c == 'B') {
        line(0, 0, 0, len)
        translate(0, len)
      } else if (c == '+') {
        rotate(60)
      } else if (c == '-') {
        rotate(-60)
      }
    }
  }
}

class DragonCurve extends LSystem {
  constructor() {
    super({
      'F': "F+G",
      'G': "F-G",
      '+': "+",
      '-': "-"
    }, "F")
  }

  display(count) {
    const string = super.generate(count);
    const len = -100 * pow(0.75, count);

    translate(width * 0.5, height * 0.5);

    for (const c of string) {
      if (c == 'F' || c == 'G') {
        line(0, 0, 0, len)
        translate(0, len)
      } else if (c == '+') {
        rotate(90)
      } else if (c == '-') {
        rotate(-90)
      }
    }
  }
}

class FractalPlant extends LSystem {
  constructor() {
    super({
      'X': "F+[[X]-X]-F[-FX]+X",
      'F': "FF",
      '+': "+",
      '-': "-",
      '[': "[",
      ']': "]"
    }, "X")
  }

  display(count) {
    const string = super.generate(count);
    const len = -160 * pow(0.5, count);

    translate(width * 0.5, height);

    for (const c of string) {
      if (c == 'F') {
        line(0, 0, 0, len)
        translate(0, len)
      } else if (c == '+') {
        rotate(25)
      } else if (c == '-') {
        rotate(-25)
      } else if (c == '[') {
        push()
      } else if (c == ']') {
        pop()
      }
    }
  }
}
