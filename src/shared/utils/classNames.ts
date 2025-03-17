export type ClassValue = string | undefined | null | false | Record<string, boolean | undefined>;

export const classNames = (...classes: ClassValue[]): string => {
  const result: string[] = [];

  classes.forEach(value => {
    if (!value) return;

    if (typeof value === 'string') {
      result.push(value);
    } else if (typeof value === 'object') {
      Object.entries(value).forEach(([key, condition]) => {
        if (condition) {
          result.push(key);
        }
      });
    }
  });

  return result.filter(Boolean).join(' ');
};
