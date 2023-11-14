// Searches a piece of text for various illegal characters, provided as an array
// Returns the illegal character if found, returns "" if all safe
export const detectIllegalChars = (text, illegalArr) => {
	for (let i = 0; i < illegalArr.length; i++) {
		if (text.includes(illegalArr[i])) {
			return illegalArr[i];
		}
	}
	return "";
};
