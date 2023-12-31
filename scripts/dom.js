import { detectEnglish } from "./detectEnglish.js";
import { translateToMorse } from "./translateToMorse.js";
import { translateToEnglish } from "./translateToEnglish.js";

const inputField = document.querySelector("#input");
const outputField = document.querySelector("#output");
const delimiterField = document.querySelector("#delimiter");
const feedbackPara = document.querySelector("#feedback");

// On every change to the textarea, the translation is updated
const updateOutput = () => {
	const input = inputField.value;
	const delimiter = delimiterField.value;

	try {
		const output = detectEnglish(input, delimiter)
			? translateToMorse(input, delimiter)
			: translateToEnglish(input, delimiter);

		outputField.innerHTML = output;
		feedbackPara.innerText = "";
	} catch (e) {
		feedbackPara.innerText = e.message;
	}
};

// On any change of the input or delimiter, a new translation is output
inputField.addEventListener("input", (e) => {
	updateOutput();
});

delimiterField.addEventListener("input", (e) => {
	updateOutput();
});

// Switch output with input when button is clicked
document.querySelector("#switchBtn").addEventListener("click", () => {
	inputField.value = outputField.innerText;
	updateOutput();
});
