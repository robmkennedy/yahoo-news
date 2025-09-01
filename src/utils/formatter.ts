const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (sample: string): boolean => {
    return emailRegex.test(sample);
};

export const limitString = (input: string, length: number): string => {
    let result = input;
    if (result.length > length) {
        result = result.slice(0, length) + '...';
    }
    return result;
};
