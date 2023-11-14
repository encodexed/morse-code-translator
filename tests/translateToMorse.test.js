import { translateToMorse } from "../scripts/translateToMorse.js";

describe("Basic operations", () => {
	it("returns a string", () => {
		expect(typeof translateToMorse("abc", "|")).toBe("string");
	});
});

describe("Makes sure return values are accurate for English --> Morse", () => {
	it("returns valid Morse code for valid English arguments", () => {
		expect(translateToMorse("abcdefg", "|")).toBe(
			".- -... -.-. -.. . ..-. --."
		);
		expect(translateToMorse("hijklmn", "|")).toBe(
			".... .. .--- -.- .-.. -- -."
		);
		expect(translateToMorse("opqrstu", "|")).toBe(
			"--- .--. --.- .-. ... - ..-"
		);
		expect(translateToMorse("vwxyz", "|")).toBe("...- .-- -..- -.-- --..");
	});

	it("returns valid Morse code from strings with spaces", () => {
		expect(translateToMorse("hi joe", "|")).toBe(".... .. | .--- --- .");
		expect(translateToMorse("a b c d e", "|")).toBe(
			".- | -... | -.-. | -.. | ."
		);
	});

	it("returns valid Morse code with different delimiter settings", () => {
		expect(translateToMorse("hi joe", "/")).toBe(".... .. / .--- --- .");
		expect(translateToMorse("hi joe", "space")).toBe(
			".... .. space .--- --- ."
		);
		expect(translateToMorse("hi joe", "")).toBe(".... ..  .--- --- .");
	});
});

describe("Applies proper formatting", () => {
	it("trims white space off the ends of the input", () => {
		expect(translateToMorse("  hey   ", "|")).toBe(".... . -.--");
		expect(translateToMorse(" hi joe  ", "|")).toBe(".... .. | .--- --- .");
	});
});

describe("Handles edge cases and errors", () => {
	it("throws an error with invalid input", () => {
		expect(() => translateToMorse("%", "|")).toThrow(
			"You can only translate alphanumerical characters (A-Z, a-z, 0-9)"
		);
		expect(() => translateToMorse("<", "|")).toThrow(
			"You can only translate alphanumerical characters (A-Z, a-z, 0-9)"
		);
	});

	// it("throws error when using an illegal delimiting character", () => {
	// 	expect(() => translateToMorse("abc", "-")).toThrow(
	// 		"Cannot use - as delimiter"
	// 	);
	// 	expect(() => translateToMorse("abc", ".")).toThrow(
	// 		"Cannot use . as delimiter"
	// 	);
	// 	expect(() => translateToMorse("abc", "<")).toThrow(
	// 		"Cannot use < as delimiter"
	// 	);
	// 	expect(() => translateToMorse("abc", ">")).toThrow(
	// 		"Cannot use > as delimiter"
	// 	);
	// });
});
