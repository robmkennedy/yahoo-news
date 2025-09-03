/**
 * Regex used to validate email format.
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Checks if a string is a valid email address.
 * @param sample - text to check
 */
export const validateEmail = (sample: string): boolean => {
    return emailRegex.test(sample);
};

/**
 * Limits a string to a certain number of characters.
 * If the string has been truncated, an ellipses is appended to the end.
 * @param input - the string to limit
 * @param length - the number of allowed characters
 */
export const limitString = (input: string, length: number): string => {
    let result = input;
    if (result.length > length) {
        result = result.slice(0, length) + '...';
    }
    return result;
};

/**
 * Ensures the string is safe to display to avoid xss scripts.
 * @param input - the string to decode
 */
export const decodeString = (input: string): string => {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent || '';
};
