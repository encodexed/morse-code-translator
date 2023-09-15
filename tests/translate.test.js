import { translate } from "../scripts/translate.js";
import { morseCode } from "../scripts/morseCode.js";

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
		expect(typeof translate("abc", "morse")).toBe("string");
	});

	it("Accepts valid arguments for stated parameters", () => {
		expect(translate("abc", 945)).toThrow("Invalid argument types.");
		expect(translate(945, "morse")).toThrow("Invalid argument types.");
	});

	it("Returns an error if incorrect amount of arguments provided", () => {
		expect(translate()).toThrow("Invalid amount of arguments provided.");
		expect(translate("abc")).toThrow("Invalid amount of arguments provided.");
		expect(translate("abc", "morse", "|", "def")).toThrow(
			"Invalid amount of arguments provided."
		);
	});
});

describe("Makes sure return values are accurate for English --> Morse", () => {
	it("Returns valid Morse code for valid English arguments", () => {
		expect(translate("abcdefg", "morse")).toBe(".- -... -.-. -.. . ..-. --.");
		expect(translate("hijklmn", "morse")).toBe(".... .. .--- -.- .-.. -- -.");
		expect(translate("opqrstu", "morse")).toBe("--- .--. --.- .-. ... - ..-");
		expect(translate("vwxyz", "morse")).toBe("...- .-- -..- -.-- --..");
	});

	it("Returns valid Morse code from strings with spaces", () => {
		expect(translate("hi joe", "morse")).toBe(".... .. | .--- --- .");
		expect(translate("a b c d e", "morse")).toBe(".- | -... | -.-. | -.. | .");
	});

	it("Trims white space off the ends of the input", () => {
		expect(translate("  hey   ", "morse")).toBe(".... . -.--");
		expect(translate(" hi joe  ", "morse")).toBe(".... .. | .--- --- .");
	});

	it("Throws error when using an illegal delimiting character", () => {
		expect(translate("abc", "morse", "-")).toThrow(
			"Cannot use - or . as a delimiter"
		);
		expect(translate("abc", "morse", ".")).toThrow(
			"Cannot use - or . as a delimiter"
		);
	});

	it("Returns valid Morse code with different delimiter settings", () => {
		expect(translate("hi joe", "morse", "|")).toBe(".... .. | .--- --- .");
		expect(translate("hi joe", "morse", "space")).toBe(
			".... .. space .--- --- ."
		);
		expect(translate("hi joe", "morse", "")).toBe(".... ..  .--- --- .");
	});

	// it("Returns valid Morse code from strings with non-alphabetic values", () => {
	// 	// TODO
	// });
});

describe("Makes sure return values are accurate for Morse --> English", () => {
	const morseInput3 = "--- .--. --.- .-. ... - ..-"; // opqrstu
	const morseInput4 = "";
	it("Returns valid English for valid Morse code arguments", () => {
		expect(translate(".- -... -.-. -.. . ..-. --.", "english")).toBe("abcdefg");
		expect(translate(".... .. .--- -.- .-.. -- -.", "english")).toBe("hijklmn");
		expect(translate("--- .--. --.- .-. ... - ..-", "english")).toBe("opqrstu");
		expect(translate("...- .-- -..- -.-- --..", "english")).toBe("vwxyz");
	});

	it("Returns valid English with different delimiter settings", () => {
		expect(translate("hi joe", "english")).toBe(".... .. | .--- --- .");
		expect(translate("hi joe", "english", "|")).toBe(".... .. | .--- --- .");
		expect(translate("hi joe", "english", "space")).toBe(
			".... .. space .--- --- ."
		);
	});

	it("Trims white space off the ends of the input", () => {
		expect(translate("  .- -... -.-.   ")).toBe("abc");
		expect(translate("  .... .. | .--- --- .   ")).toBe("hi joe");
		expect(translate(" | .- -... -.-. | |  ")).toBe("abc");
	});

	// it("Returns an error if provided argument uses illegal special characters", () => {
	// 	// TODO
	// });

	it("Returns an error if provided argument contains Morse code that has no English equivalent", () => {
		expect(translate(".....", "english")).toThrow("Invalid morse code input.");
		expect(translate("----", "english")).toThrow("Invalid morse code input.");
		expect(translate(". . . --....", "english")).toThrow(
			"Invalid morse code input."
		);
		expect(translate(". | . | .", "english", "/")).toThrow(
			"Invalid morse code input."
		);
	});
});
