const generateRandomIntegerFromRange = ({ min, max }: {min: number, max: number}) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default generateRandomIntegerFromRange;
