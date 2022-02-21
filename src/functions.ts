/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return (temperature - 32) * (5 / 9);
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum = 0;
    if (first < 0) {
        sum = second + third;
    } else if (second < 0) {
        sum = first + third;
    } else if (third < 0) {
        sum = first + second;
    } else {
        sum = first + second + third;
    }

    if (sum <= 0) {
        return 0;
    } else {
        return sum;
    }
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let new_string = "";
    for (let i = 0; i < message.length; i++) {
        new_string += message[i].toUpperCase();
    }
    return new_string + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let bool = true;
    message[message.length - 1] === "?" ? (bool = true) : (bool = false);
    return bool;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word === "yes" || word === "YES" || word == "yes") {
        return true;
    } else if (word === "no" || word === "NO" || word == "No") {
        return false;
    } else {
        return null;
    }
}