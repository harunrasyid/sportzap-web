export const isEmptyList = <T>(arr?: T[] | null): boolean => {
  return !arr || arr.length === 0;
};
