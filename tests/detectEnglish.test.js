import { detectEnglish } from "../scripts/detectEnglish.js";

describe("Basic operations", () => {
	it("returns a boolean", () => {
		expect(typeof detectEnglish("abc", "|")).toBe("boolean");
	});
});

describe("Makes sure return values are accurate", () => {
	it("detects English", () => {
		expect(detectEnglish("hi joe", "|")).toBe(true);
		expect(detectEnglish("945", "|")).toBe(true);
		expect(detectEnglish("abcdef ghijkl mnopqr stuvwx yz", "/")).toBe(true);
	});

	it("detects English with untrimmed whitespace", () => {
		expect(detectEnglish("    hi joe   ", "|")).toBe(true);
	});

	it("detects Morse", () => {
		expect(detectEnglish(". . .", "|")).toBe(false);
		expect(detectEnglish(". | . | .", "|")).toBe(false);
		expect(detectEnglish(". / . / .", "/")).toBe(false);
	});

	it("detects Morse with untrimmed whitespace", () => {
		expect(detectEnglish("    . | . | .   ", "|")).toBe(false);
		expect(detectEnglish("/ . / . / . /", "/")).toBe(false);
	});
});
