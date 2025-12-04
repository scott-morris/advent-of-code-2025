export function isRepeatedTwice(value: number): boolean {
    const str = value.toString();
    const len = str.length;

    if (len % 2 !== 0) {
        return false;
    }

    const half = len / 2;
    const firstHalf = str.slice(0, half);
    const secondHalf = str.slice(half);

    return (firstHalf === secondHalf);
}

export function isRepeating(value: number): boolean {
    const str = value.toString();
    const len = str.length;

    for (let subLen = 1; subLen <= Math.floor(len / 2); subLen++) {
        const repeatCheck = str.slice(0, subLen);
        const regExp = new RegExp(`^(${repeatCheck})+$`);
        if (regExp.test(str)) {
            return true;
        }
    }
    return false;
}