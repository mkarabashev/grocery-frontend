export const isEmpty = str => str.length === 0;

export const notEmptyMany = arr => !arr.some(str => isEmpty(str));
