/**
 * a function that splits a text with line breaks into an array
 * @param string the string to split
 * @returns a string[] broken by line breaks
 */
export const getArrayFromText = (string: string) => {
    return string.split("\r\n").filter(Boolean);
};
