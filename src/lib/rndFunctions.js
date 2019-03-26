export const createRndNumber = () => Math.floor((Math.random() * 100));

export const createRndOperator = () => Math.floor((Math.random() * 3));

export const createMinMaxRnd = (min, max) => Math.floor((Math.random() * (max - min)) + min);
