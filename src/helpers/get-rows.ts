export const emptyOrRows = <T>(rows: T[]) => {
  if (!rows) {
    return [];
  }
  return rows;
};
