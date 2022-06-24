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
Often, the first line of a simple Processing sketch contains a call to the function `size(200, 200)`{.language-java}, which in Processing creates a _display window_ of with the given dimensions in pixels:  
```java
size(200, 200);
```

The equivalent in P5.js is to call `createCanvas()`{.language-js} to create an HTML `<canvas>`{.language-html} element on the webpage:
```js
createCanvas(200, 200);
```

### Drawing Functions
Functions are the basic building blocks of a Processing program. The behaviour of a function is defined by its parameters, a set of arguments enclosed in parentheses. Processing includes a collection of functions to draw basic shapes. For example, to draw a single line, we need four parameters: two for the starting location and two for the end.

::: flex flex-col gap-4

::: flex flex-row gap-4
{#line_sketch_container}

The `line(x1, y1, x2, y2)`{.language-java} function takes four parameters, specifying the start (`x1`{.language-java}, `y1`{.language-java}) and end (`x2`{.language-java}, `y2`{.language-java}) coordinates of the line, e.g., `line(10, 90, 70, 20)`{.language-java}
<script>new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.line(10, 90, 70, 20); }; }, "line_sketch_container");</script>
:::

::: flex flex-row gap-4
{#triangle_sketch_container}

The `triangle(x1, y1, x2, y2, x3, y3)`{.language-java} function takes six parameters, specifying the corner coordinates of the triangle, e.g., `triangle(10, 90, 70, 80, 30, 10)`{.language-java}
<script>new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.triangle(10, 90, 70, 80, 30, 10); }; }, "triangle_sketch_container");</script>
:::

::: flex flex-row gap-4
{#quad_sketch_container}

The `quad(x1, y1, x2, y2, x3, y3, x4, y4)`{.language-java} function takes eight parameters, specifying the corner coordinates of the quad, e.g., `quad(10, 90, 70, 80, 90, 30, 30, 10)`{.language-java}
<script>new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.quad(10, 90, 70, 80, 90, 30, 30, 10); }; }, "quad_sketch_container");</script>
:::

::: flex flex-row gap-4
{#rect_sketch_container}

The `rect(x, y, w, h)`{.language-java} function takes four parameters, by default these specify the top-left corner (`x`{.language-java}, `y`{.language-java}) and width (`w`{.language-java}) and height (`h`{.language-java}), e.g., `rect(30, 20, 50, 60)`{.language-java}
<script>new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.rect(30, 20, 50, 60); }; }, "rect_sketch_container");</script>
:::

::: flex flex-row gap-4
{#ellipse_sketch_container}

The `ellipse(x, y, w, h)`{.language-java} function takes four parameters, by default these specify the center (`x`{.language-java}, `y`{.language-java}) and width (`w`{.language-java}) and height (`h`{.language-java}), e.g., `ellipse(50, 40, 60, 50)`{.language-java}
<script>new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.ellipse(50, 40, 60, 50); }; }, "ellipse_sketch_container");</script>
:::

::: flex flex-row gap-4
{#arc_sketch_container}

The `arc(x, y, w, h, a1, a2)`{.language-java} function takes four parameters, specifying the centre coordinate (`x`{.language-java}, `y`{.language-java}), the width (`w`{.language-java}) and height (`h`{.language-java}), and the start (`a1`{.language-java}) and stop (`a2`{.language-java}) angles (in radians) for an arc, e.g., `arc(50, 40, 60, 50, 0, PI)`{.language-java}
<script>new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.arc(50, 40, 60, 50, p.HALF_PI, p.PI); }; }, "arc_sketch_container");</script>
:::

::: flex flex-row gap-4
{#curve_sketch_container}

The `curve(x1, y1, x2, y2, x3, y3, x4, y4)`{.language-java} function takes eight parameters, specifying coordinates that the curve will pass through, e.g., `curve(10, 90, 70, 80, 90, 30, 30, 10)`{.language-java}
<script>new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.curve(10, 90, 70, 80, 90, 30, 30, 10); }; }, "curve_sketch_container");</script>
:::

:::

### Drawing Order
When a program runs, the computer starts at the top and reads each line of code until it reaches the last line and then stops. If you want a shape to be drawn on top of all other shapes, it needs to follow the others in the code.

```java
rect(20, 20, 40, 60);
ellipse(60, 50, 30, 30);
```

<div id="order_sketch1_container"></div>
<script>
  const order_sketch1 = p => {
    p.setup = function() {
      p.createCanvas(100, 100);
      p.background(255 - 32);
      p.rect(20, 20, 40, 60);
      p.ellipse(60, 50, 30, 30);
    };
  };
  new p5(order_sketch1, "order_sketch1_container");
</script>

```java
ellipse(60, 50, 30, 30);
rect(20, 20, 40, 60);
```

<div id="order_sketch2_container"></div>
<script>
  const order_sketch2 = p => {
    p.setup = function() {
      p.createCanvas(100, 100);
      p.background(255 - 32);
      p.ellipse(60, 50, 30, 30);
      p.rect(20, 20, 40, 60);
    };
  };
  new p5(order_sketch2, "order_sketch2_container");
</script>

> TODO: Drawing Modes

> TODO: Drawing Styles?
