import { detectIllegalChars } from "./detectIllegalChars.js";

export const detectEnglish = (input, delimiter) => {
	// While input is not empty...
	if (input.length) {
		// ...check for illegal delimiters
		let illegalChar = detectIllegalChars(delimiter, [".", "-", "<", ">"]);
		if (illegalChar) {
			throw new Error(`Cannot use ${illegalChar} as delimiter`);
		}

		// ...check for delimiter match and return as morse code
		if (delimiter && input.includes(delimiter)) {
			return false;
		}
		// ...trim white space and grab first character
		const trimmed = input.trim();
		const firstChar = trimmed[0];
		if (firstChar) {
			if (firstChar === "." || firstChar === "-") {
				return false;
			}
		}
	}
	return true;
};
