---
title: Introduction - Foundation - Creative Programming
description: Foundation is the first topic in the Creative Programmin course.
author: Rob Saunders
date: 2022-06-20
tags:
  - Creative Programming
---

# Foundation

## Introduction
Processing is a programming environment that was first created to make it easier to develop visual applications with an emphasis on generative techniques, animation and interaction. The original developers of Processing wanted to be able to "sketch" ideas in code, this idea of quickly implementing ideas in code remains evident in the use of the terms "sketch" and "sketchbook" to refer to individual programs and collections of programs that you create over time. As its capabilities have expanded over the past two decades, Processing has come to be used for more advanced applications. Originally developed around a domain-specific extension to the Java programming language, intended for digital artists and designers, Processing has evolved into a full-blown design and prototyping tool used for large-scale art installations, motion graphics production, complex data visualisation, and creative tools development. Case studies of Processing used in production can be found at https://processing.org/exhibition/

> TODO: Something about Processing being translated to Javascript and Python

> NOTE: Should I try to cover both Processing and P5.js in a single document or create two versions of the same document, one using Processing and the other using P5.js?

> NOTE: Can P5.js send OSC messages? Can P5.js talk to Arduino? {.text-orange-500}

The latest version of Processing can be downloaded from https://processing.org/download/

## The Processing Development Environment
A Processing program is called a sketch. The idea behind Processing is that we often want to quickly try out some code, much like we might want to sketch out some ideas on a piece of paper. Sketches are stored in your sketchbook, which is simply a folder on your computer that is used as the default location for saving all of your projects. Sketches stored in your sketchbook can be accessed from the menu `File > Sketchbook`. If you want to load a file from an alternative location, use the menu `File > Open...`

### The Main Window

> _Figure 1. The Processing Development Environment_

The above figure shows the Processing Development Environment. The large area in the main window is the _text editor_ and the row of buttons across the top of the window is the _toolbar_, which is where you can quickly Run, Stop and Debug your sketch. Directly above the _text editor_ are tabs, which show the names of the files that currently make up your sketch. For a simple sketch we will have only one tab, because we have only one file, and this tab will show the name of our sketch, which is always displayed as the first tab. The area below the _text editor_ is called the _console_, you will see messages from Processing appear here, e.g., if there is a problem with your code you will wee errors here, and you can display text here from within your running program, which can be very helpful, e.g., if you quickly want to check the value of a calculation. The small square window is the _display window_, the graphical output of a running sketch.

### The Library Manager

> _Figure 2. The Libraries Manager_

The core functionality of Processing is sufficient for developing many sketches. When you need to do something that's not available in Processing directly, you can use a library to add the functionality you need. Libraries can be installed by navigating to the menu `Sketch > Import Library... > Add Library...`

### The Processing Reference
An overview of the functionality available in Processing can be found on the Processing web site (https://processing.org/reference/). To quickly access the reference page explaining the usage of a certain function from within Processing, highlight the code in the _text editor_ and either right-click and select `Find in Reference` from the pop-up menu or use the main menu and select `Help > Find in Reference`.

## Your First Processing Sketch
Create a new sketch in Processing using the menu `File > New`, in the _text editor_ of the window that opens, type the following:

```java
ellipse(50, 50, 80, 80);
```

This line of code means "draw an ellipse, with the center 50 pixels over from the left and 50 pixels down from the top, with a width and height of 80 pixels." Click the Run button in the _toolbar_ or choose `Sketch > Run` from the menu bar.

<div id="sketch1_container"></div>
<script>
  const sketch1 = p => {
    p.setup = function() {
      p.createCanvas(100, 100);
      p.background(255-32);
      p.ellipse(50, 50, 80, 80);
    };
  };
  let sketch1_instance = new p5(sketch1, "sketch1_container");
</script>

If you've typed everything correctly, you’ll see the ellipse image appear in a _display window_.

If you didn't type it correctly, the _console_ will display some text about the error. If this happens, don't worry, this is a normal part of programming. Here are some things you might want to check:

1. The spelling of `ellipse`, notice that the text is all lowercase
2. After `ellipse` are four numbers in round parentheses (i.e. brackets)
3. Between each of the four numbers is a comma (`,`)
4. At the end of the line there is a semicolon (`;`)

One of the most difficult things about getting started with programming is that you have to be very specific about the syntax. The Processing software isn’t always smart enough to know what you mean, and can be quite fussy about the placement of punctuation. You’ll get used to it with a little practice.
