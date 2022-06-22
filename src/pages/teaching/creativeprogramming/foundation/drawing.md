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

<div class="flex">
  <div class="grid grid-cols-2 gap-4 place-content-start">

<div id="line_sketch_container" class="rounded w-[100px] h-[100px]"></div>

`line(10, 90, 70, 20)`{.language-java}

{#triangle_sketch_container .rounded .w-[100px] .h-[100px]}

`triangle(10, 90, 70, 80, 30, 10)`{.language-java}

{#rect_sketch_container .rounded}

`rect(30, 20, 50, 60)`{.language-java}

{#ellipse_sketch_container .rounded}

`ellipse(50, 40, 60, 50)`{.language-java}

  </div>
</div>

<script>
  new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.line(10, 90, 70, 20); }; }, "line_sketch_container");

  new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.triangle(10, 90, 70, 80, 30, 10); }; }, "triangle_sketch_container");

  new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.rect(30, 20, 50, 60); }; }, "rect_sketch_container");

  new p5( p => { p.setup = () => { p.createCanvas(100, 100); p.background(223); p.ellipse(50, 40, 60, 50); }; }, "ellipse_sketch_container");
</script>

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
