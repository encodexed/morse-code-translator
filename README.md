# Morse Code Translator

## Demo & Snippets

Image goes here

---

## Requirements / Purpose

Morse Code Translator is a translation tool, for translating from English to Morse Code and the reverse too. The project was built as part of my participation during the \_nology bootcamp. We were given one week to build the application. The main purpose of the project was for us to practice our test writing, as well as get some more practice working with JavaScript.

**Tech Stack:** HTML, SCSS, JavaScript and Jest as a testing suite

---

## Build Steps

To get this project running in your local environment, you will need to have the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension installed (see below for why). Then, paste this into your terminal:

```bash
git clone git@github.com:encodexed/morse-code-translator.git
cd morse-code-translator
npm install #for tests
code .
```

Then click the "Go Live" button in the bottom right of the VSCode window.

### Why do I need Live Server?

From testing, it seems that trying to just open the `index.html` file in your browser will throw some errors in the console. The errors refer to a violation of the CORS policy originating from trying to run or import the `dom.js` script. After some very brief research, I'm led to believe that the source of this problem for this project is that the script is a module. As a result, the project will become relatively useless without its DOM interactions.

---

## Design Goals / Approach

- This project utilised a Test-Driven Development (TDD) approach which worked well
- The design and styling aspects of this project were very simple so that we could focus on writing our tests and functions.

---

## Features

This project is very simple, but the key features include:

- Entering text in the Input textarea will translate into the Output div
- Language (English/Morse) is auto-detected
- An error message is displayed for unrecognised/untranslatable input
- Tests to ensure quality and accuracy

---

## Known issues

- None, that I know of.

---

## Future Goals

This project is wrapped up and I will likely not be working on it anymore, instead focusing on new projects of greater learning potential. If I were to dedicate time to this project, I would:

- Add more tests that utilise Jest's mocking functionality

---

## Licensing Details

Copyright 2023 Robert Gollan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without limitation in the rights to use, copy, modify, merge, publish, and/ or distribute copies of the Software in an educational or personal context, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

Permission is granted to sell and/ or distribute copies of the Software in a commercial context, subject to the following conditions:

- Substantial changes: adding, removing, or modifying large parts, shall be developed in the Software. Reorganizing logic in the software does not warrant a substantial change.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
