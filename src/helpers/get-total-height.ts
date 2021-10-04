import { Character } from "./sanitize";

const feetConstant = 0.032808;

export const totalHeight = (data: Character[]): string => {
  const total = data?.reduce(
    (acc, val) => (acc += parseInt(val.height, 10)),
    0
  );

  const feet = Math.floor(total * feetConstant);
  const inch = (total / feetConstant).toFixed(2).split(".")[1];

  const measure = `${total} cm (${feet}ft/${inch}in)`;

  return measure;
};
