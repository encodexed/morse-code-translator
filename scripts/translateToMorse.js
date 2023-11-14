import { morseCode } from "../data/morseCode.js";
import { detectIllegalChars } from "./detectIllegalChars.js";

export const translateToMorse = (input, delimiter = "|") => {
	// Checks for illegal delimiters
	let illegalChar = detectIllegalChars(delimiter, [".", "-", "<", ">"]);
	if (illegalChar) {
		throw new Error(`Cannot use ${illegalChar} as delimiter`);
	}

	// Converts to, and iterates over, an array created from the input and...
	const morse = input.split("").reduce((code, next) => {
		// ...replaces space characters with a delimiter string
		if (next === " ") {
			return `${code}${delimiter} `;
		}

		// ...treats new line characters as formatting
		if (next === "\n") {
			return `${code}\n`;
		}

		// ...tests to make sure character is valid
		const valid = /[A-Za-z\d]/.test(next);
		if (!valid) {
			throw new Error(
				"You can only translate alphanumerical characters (A-Z, a-z, 0-9)"
			);
		}

		// ...converts character to lowercase and returns the morse code
		const letter = next.toLowerCase();
		return (code += morseCode[letter] + " ");
	}, "");

	// Trims white space and delimiters off of the start of the returned code...
	let firstDot = morse.indexOf(".");
	let firstDash = morse.indexOf("-");
	let codeStartsAt = 0;

	if (firstDot < 0) codeStartsAt = firstDash;
	else if (firstDash < 0) codeStartsAt = firstDot;
	else codeStartsAt = firstDot < firstDash ? firstDot : firstDash;

	const slicedAndReversed = morse
		.slice(codeStartsAt)
		.split("")
		.reverse()
		.join("");

	// ...spins it around to knock of the end white spaces and delimiters
	firstDot = slicedAndReversed.indexOf(".");
	firstDash = slicedAndReversed.indexOf("-");

	if (firstDot < 0) codeStartsAt = firstDash;
	else if (firstDash < 0) codeStartsAt = firstDot;
	else codeStartsAt = firstDot < firstDash ? firstDot : firstDash;

	const trimmedCode = slicedAndReversed
		.slice(codeStartsAt)
		.split("")
		.reverse()
		.join("");

	return trimmedCode;
};
