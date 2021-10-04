import { Character } from "./sanitize";

export const sanitizeDateToUTC = (data: Character[]) => {
  return data?.map((dt: any) => ({
    ...dt?.dataValues,
    date: new Date(dt?.dataValues?.createdAt).toUTCString(),
  }));
};
