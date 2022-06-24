---
title: Drawing
description: Foundation is the first topic in the Creative Programmin course.
author: Rob Saunders
date: 2022-06-20
tags:
  - Creative Programming
---

Processing was originally developed as a programming environment for drawing with code and this shows in the ease with which sketches can be programmed to generate visual designs. In this section we will take a brief tour of the basics of drawing with Processing.

### The Coordinate System
Often, the first line of a simple Processing sketch contains a call to the function `size()`{.language-java}, which in Processing creates a _display window_ of with the given dimensions in pixels:  
```java
size(200, 200);
```

The equivalent in P5.js is to call `createCanvas()`{.language-js} to create an HTML `<canvas>`{.language-html} element on the webpage:
```js
createCanvas(200, 200);
```

### Drawing Functions
Functions are the basic building blocks of a Processing program. The behaviour of a function is defined by its parameters, a set of arguments enclosed in parentheses. Processing includes a collection of functions to draw basic shapes. For example, to draw a single line, we need four parameters: two for the starting location and two for the end.

::: flex flex-col

::: flex flex-row gap-4
{#line_sketch}

The `line(x1, y1, x2, y2)`{.language-java} function takes four parameters, specifying the start (`x1`{.language-java}, `y1`{.language-java}) and end (`x2`{.language-java}, `y2`{.language-java}) coordinates of the line, e.g., `line(10, 90, 70, 20)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.line(10, 90, 70, 20);
    };
  }, "line_sketch");
</script>
:::

::: flex flex-row gap-4
{#triangle_sketch}

The `triangle(x1, y1, x2, y2, x3, y3)`{.language-java} function takes six parameters, specifying the corner coordinates of the triangle, e.g., `triangle(10, 90, 70, 80, 30, 10)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.triangle(10, 90, 70, 80, 30, 10);
    };
  }, "triangle_sketch");
</script>
:::

::: flex flex-row gap-4
{#quad_sketch}

The `quad(x1, y1, x2, y2, x3, y3, x4, y4)`{.language-java} function takes eight parameters, specifying the corner coordinates of the quad, e.g., `quad(10, 90, 70, 80, 90, 30, 30, 10)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.quad(10, 90, 70, 80, 90, 30, 30, 10);
    };
  }, "quad_sketch");
</script>
:::

::: flex flex-row gap-4
{#rect_sketch}

The `rect(x, y, w, h)`{.language-java} function takes four parameters, by default these specify the top-left corner (`x`{.language-java}, `y`{.language-java}) and width (`w`{.language-java}) and height (`h`{.language-java}), e.g., `rect(30, 20, 50, 60)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.rect(30, 20, 50, 60);
    };
  }, "rect_sketch");
</script>
:::

::: flex flex-row gap-4
{#square_sketch}

The `square(x, y, s)`{.language-java} function takes three parameters, by default these specify the top-left corner (`x`{.language-java}, `y`{.language-java}) and size (`s`{.language-java}) of the square, e.g., `square(30, 20, 60)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.square(30, 20, 60);
    };
  }, "square_sketch");
</script>
:::

::: flex flex-row gap-4
{#ellipse_sketch}

The `ellipse(x, y, w, h)`{.language-java} function takes four parameters, by default these specify the center (`x`{.language-java}, `y`{.language-java}) and width (`w`{.language-java}) and height (`h`{.language-java}), e.g., `ellipse(50, 40, 60, 50)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.ellipse(50, 40, 60, 50);
    };
  }, "ellipse_sketch");
</script>
:::

::: flex flex-row gap-4
{#circle_sketch}

The `circle(x, y, d)`{.language-java} function takes three parameters, by default these specify the center (`x`{.language-java}, `y`{.language-java}) and diameter (`d`{.language-java}) of the circle, e.g., `circle(50, 40, 60)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.circle(50, 40, 60);
    };
  }, "circle_sketch");
</script>
:::

::: flex flex-row gap-4
{#arc_sketch}

The `arc(x, y, w, h, a1, a2)`{.language-java} function takes six parameters, specifying the centre (`x`{.language-java}, `y`{.language-java}), width (`w`{.language-java}), height (`h`{.language-java}), start (`a1`{.language-java}), and stop (`a2`{.language-java}) angles, e.g., `arc(50, 40, 60, 50, HALF_PI, PI)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.arc(50, 40, 60, 50, p.HALF_PI, p.PI);
    };
  }, "arc_sketch");
</script>
:::

::: flex flex-row gap-4
{#curve_sketch}

The `curve(x1, y1, x2, y2, x3, y3, x4, y4)`{.language-java} function takes eight parameters, specifying the coordinates of the control points that define a Catmull-Rom spline, e.g., `curve(10, 90, 70, 80, 90, 30, 30, 10)`{.language-java}
<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.curve(10, 90, 70, 80, 90, 30, 30, 10);
    };
  }, "curve_sketch");
</script>
:::

::: flex flex-row gap-4
{#bezier_sketch}

The `bezier(x1, y1, x2, y2, x3, y3, x4, y4)`{.language-java} function takes eight parameters, specifying coordinates of the control points that define the Bezier spline, e.g., `curve(10, 90, 70, 80, 90, 30, 30, 10)`{.language-java}
<script>
  new p5( p => {
      p.setup = () => {
        p.createCanvas(100, 100);
        p.background(223);
        p.bezier(10, 90, 70, 80, 90, 30, 30, 10);
      };
    }, "bezier_sketch");
</script>
:::

:::

#### Curves

The `arc()`{.language-java}, `curve()`{.language-java} and `bezier()`{.language-java} drawing functions are worth spending additional time to understand.

From the examples above, you can observe that the curves are drawn such that the interior of the curves are filled with a colour. This may not be what you expect but is consistent with the drawing of other shape primitives. You can easily remove the filled interior of these curves by calling the `noFill()`{.language-java} function before drawing them, as we will see below in [Drawing Styles](#drawing-styles).

::: flex flex-row gap-4

{#arc_construction_sketches .flex .flex-col .gap-4}

To better understand the `arc()`{.language-java} function we can draw the ellipse described by the first four coordinates (`x`{.language-java}, `y`{.language-java}, `w`{.language-java}, `h`{.language-java}). This sketch does just that (drawn in blue) together with lines that show the start and stop angles.
<script>
  new p5(
    p => {
      p.setup = () => {
        p.createCanvas(100, 100);
        p.background(223);
        p.arc(50, 40, 60, 50, p.HALF_PI, p.PI);
        p.push();
          p.noFill();
          p.strokeWeight(2);
          p.stroke(0, 0, 192, 48);
          p.ellipse(50, 40, 60, 50);
          p.push();
            p.stroke(0, 192, 0, 48);
            p.translate(50, 40);
            p.rotate(p.HALF_PI);
            p.line(0, 0, 50, 0);
          p.pop();
          p.push();
            p.stroke(192, 0, 0, 48);
            p.translate(50, 40);
            p.rotate(p.PI);
            p.line(0, 0, 50, 0);
          p.pop();
          p.strokeWeight(4);
          p.stroke(0, 0, 192, 48);
          p.point(50, 40);
        p.pop();
      };
    }, "arc_construction_sketches");

  new p5(
    p => {
      p.setup = () => {
        p.createCanvas(100, 100);
        p.background(223);
        p.arc(50, 40, 60, 50, p.PI/4, 3 * p.PI/5);
        p.push();
          p.noFill();
          p.strokeWeight(2);
          p.stroke(0, 0, 192, 48);
          p.ellipse(50, 40, 60, 50);
          p.push();
            p.stroke(0, 192, 0, 48);
            p.translate(50, 40);
            p.rotate(p.PI/4);
            p.line(0, 0, 50, 0);
          p.pop();
          p.push();
            p.stroke(192, 0, 0, 48);
            p.translate(50, 40);
            p.rotate(3 * p.PI/5);
            p.line(0, 0, 50, 0);
          p.pop();
          p.strokeWeight(4);
          p.stroke(0, 0, 192, 48);
          p.point(50, 40);
        p.pop();
      };
    }, "arc_construction_sketches");
</script>
:::

::: flex flex-row gap-4
{#curve_construction_sketch}

<script>
  new p5(
    p => {
      p.setup = () => {
        p.createCanvas(100, 100);
        p.background(223);
        p.curve(10, 90, 70, 80, 90, 30, 30, 10);
        p.push();
          p.noFill();
          p.strokeWeight(2);
          p.push();
            p.stroke(0, 192, 0, 48);
            p.curve(10, 90, 10, 90, 70, 80, 90, 30);
          p.pop();
          p.push();
            p.stroke(192, 0, 0, 48);
            p.curve(70, 80, 90, 30, 30, 10, 30, 10);
          p.pop();
          p.strokeWeight(4);
          p.stroke(0, 192, 0, 48);
          p.point(10, 90);
          p.point(70, 80);
          p.stroke(192, 0, 0, 48);
          p.point(90, 30);
          p.point(30, 10);
        p.pop();
      };
    }, "curve_construction_sketch");
</script>
:::

::: flex flex-row gap-4
{#bezier_construction_sketch}

<script>
  new p5(
    p => {
      p.setup = () => {
        p.createCanvas(100, 100);
        p.background(223);
        p.bezier(10, 90, 70, 80, 90, 30, 30, 10);
        p.push();
          p.noFill();
          p.strokeWeight(2);
          p.push();
            p.stroke(0, 192, 0, 48);
            p.line(10, 90, 70, 80);
          p.pop();
          p.push();
            p.stroke(192, 0, 0, 48);
            p.line(90, 30, 30, 10);
          p.pop();
          p.strokeWeight(4);
          p.stroke(0, 192, 0, 48);
          p.point(10, 90);
          p.point(70, 80);
          p.stroke(192, 0, 0, 48);
          p.point(90, 30);
          p.point(30, 10);
        p.pop();
      };
    }, "bezier_construction_sketch");
</script>
:::

#### Vertices

::: flex flex-row gap-4
{#vertex_sketch}

<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.beginShape();
        p.vertex(30, 20);
        p.vertex(70, 20);
        p.vertex(90, 50);
        p.vertex(70, 80);
        p.vertex(30, 80);
        p.vertex(10, 50);
      p.endShape(p.CLOSE);
    };
  }, "vertex_sketch");
</script>
:::

::: flex flex-row gap-4
{#beziervertex_sketch}

<script>
  new p5( p => {
    p.setup = () => {
      p.createCanvas(100, 100);
      p.background(223);
      p.beginShape();
        p.vertex(30, 20);
        p.bezierVertex(70, 20, 90, 50, 70, 80);
        p.bezierVertex(30, 80, 10, 50, 30, 20);
      p.endShape(p.CLOSE);
    };
  }, "beziervertex_sketch");
</script>
:::

### Drawing Order
When a program runs, the computer starts at the top and reads each line of code until it reaches the last line and then stops. If you want a shape to be drawn on top of all other shapes, it needs to follow the others in the code.

::: flex flex-row gap-4
{#order_sketch1}

```java
rect(20, 20, 40, 60);
ellipse(60, 50, 30, 30);
```

<script>
  new p5( p => {
    p.setup = function() {
      p.createCanvas(100, 100);
      p.background(223);
      p.rect(20, 20, 40, 60);
      p.ellipse(60, 50, 30, 30);
    };
  }, "order_sketch1");
</script>
:::

::: flex flex-row gap-4
{#order_sketch2}

```java
ellipse(60, 50, 30, 30);
rect(20, 20, 40, 60);
```

<script>
  new p5( p => {
    p.setup = function() {
      p.createCanvas(100, 100);
      p.background(223);
      p.ellipse(60, 50, 30, 30);
      p.rect(20, 20, 40, 60);
    };
  }, "order_sketch2");
</script>
:::

### Drawing Modes {#drawing-modes}

### Drawing Styles {#drawing-styles}
