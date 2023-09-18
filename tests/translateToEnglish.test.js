import { translateToEnglish } from "../scripts/translateToEnglish.js";

describe("Basic operations", () => {
	it("returns a string", () => {
		expect(typeof translateToEnglish("... --- ...", "|")).toBe("string");
	});
});

describe("Makes sure return values are accurate for Morse --> English", () => {
	it("returns valid English for valid Morse code arguments", () => {
		expect(translateToEnglish(".- -... -.-. -.. . ..-. --.", "|")).toBe(
			"abcdefg"
		);
		expect(translateToEnglish(".... .. .--- -.- .-.. -- -.", "|")).toBe(
			"hijklmn"
		);
		expect(translateToEnglish("--- .--. --.- .-. ... - ..-", "|")).toBe(
			"opqrstu"
		);
		expect(translateToEnglish("...- .-- -..- -.-- --..", "|")).toBe("vwxyz");
	});

	it("returns valid English from strings with spaces", () => {
		expect(translateToEnglish(".... .. | .--- --- .", "|")).toBe("hi joe");
		expect(translateToEnglish(".- | -... | -.-. | -.. | .", "|")).toBe(
			"a b c d e"
		);
	});

	it("returns valid English with different delimiter settings", () => {
		expect(translateToEnglish(".... .. / .--- --- .", "/")).toBe("hi joe");
		expect(translateToEnglish(".... .. space .--- --- .", "space")).toBe(
			"hi joe"
		);
		expect(translateToEnglish(".... ..  .--- --- .", "")).toBe("hi joe");
	});
});

describe("Applies proper formatting", () => {
	it("trims white space off the ends of the input", () => {
		expect(translateToEnglish("  .... . -.--   ", "|")).toBe("hey");
		expect(translateToEnglish("| | .... .. | .--- --- . | |", "|")).toBe(
			"hi joe"
		);
	});
});

describe("Handles edge cases and errors", () => {
	it("throws an error with invalid input", () => {
		expect(() => translateToEnglish("%", "|")).toThrow(
			"Input contains unrecogniseable characters"
		);
		expect(() => translateToEnglish("<", "|")).toThrow(
			"Input contains unrecogniseable characters"
		);
	});
});
