import { translator } from "../scripts/translator.js";

// Our translator should do the following things:
// - Return a string
// - Take a string and a mode as an argument
// - Give the correct output for various strings (eng -> mor)
//    - Words without spaces or special characters
//    - Outputting with different delimiter settings
//    - Words with spaces, without special characters/numbers
//    - Words without spaces, with special characters/numbers
//        - How do we want to handle that? Throw an error?
// - Give the correct output for various strings (mor -> eng)
//    - Regular morse code strings
//    - Being able to handle different delimiters
//    - Handling incorrect morse code that doesn't correlate to english
//    - Handling when delimiters aren't included
// - Handle empty entries
// - XSS and other vulnerabilities: cleaning the HTML if we are putting it on the page
// - Bonus: Detect language?

describe("Basic operations", () => {
	it("Returns a string", () => {
		// TODO
	});

	it("Accepts valid arguments for stated parameters", () => {
		// TODO
	});

	it("Returns an error if no arguments provided", () => {
		// TODO
	});
});

describe("Makes sure return values are accurate for English --> Morse", () => {
	it("Returns valid Morse code for valid English arguments", () => {
		// TODO
	});

	it("Returns valid Morse code with different delimiter settings", () => {
		// TODO
	});

	it("Returns valid Morse code from strings with spaces", () => {
		// Don't forget to .trim()
		// TODO
	});

	it("Returns valid Morse code from strings with non-alphabetic values", () => {
		// TODO
	});
});

describe("Makes sure return values are accurate for Morse --> English", () => {
	it("Returns valid English for valid Morse code arguments", () => {
		// TODO
	});

	it("Returns valid English with different delimiter settings", () => {
		// TODO
	});

	it("Returns an error if provided argument uses illegal special characters", () => {
		// TODO
	});

	it("Returns an error if provided argument contains Morse code that has no English equivalent", () => {
		// TODO
	});
});
