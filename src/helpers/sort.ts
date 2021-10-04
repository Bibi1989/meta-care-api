export const sortData = (data: any, field: string) => {
  return data?.sort((a: any, b: any) => a[field].localeCompare(b[field]));
};
