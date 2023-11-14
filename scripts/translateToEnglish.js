import { morseCode } from "../data/morseCode.js";
const keys = Object.keys(morseCode);
const values = Object.values(morseCode);

export const translateToEnglish = (input, delimiter) => {
	// Take the input, trim the whitespace and split into an array of morse characters
	const morseArray = input.trim().split(" ");

	// Construct the english from the morse code
	const english = morseArray.reduce((english, next) => {
		if (next === delimiter) {
			return english + " ";
		}

		if (next[0] === "." || next[0] === "-") {
			const index = values.indexOf(next);
			if (index < 0) {
				throw new Error("Morse code character not recognised");
			}
			return english + keys[index];
		} else {
			throw new Error("Input contains unrecogniseable characters");
		}
	}, "");

	return english.trim();
};
