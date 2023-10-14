import chalk from 'chalk';

export const add = (num1, num2) => {
    return num1 + num2;
}

export const showResult = (num1, num2) => {
    const result = add(num1, num2);
    if (result >= 5) {
        return chalk.green(result);
    } else {
        return chalk.red(result);
    }
}
