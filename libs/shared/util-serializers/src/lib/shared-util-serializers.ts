import { AppError } from './models/app-error.models';

const isArray = (a: unknown) => {
  return Array.isArray(a);
};

const isObject = (o: unknown) => {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const toCamel = (s: string) => {
  return s.replace(/([-_][a-z])/gi, ($1: string) => {
    return $1
      .toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const keysToCamel = (objectToTransform: any) => {
  if (!objectToTransform) return null;

  if (isObject(objectToTransform)) {
    const n: Record<string, unknown> = {};

    Object.keys(objectToTransform).forEach((k: string) => {
      const key = toCamel(k);

      n[key] = keysToCamel(objectToTransform[k]);
    });

    return n;
  }
  if (isArray(objectToTransform)) {
    return objectToTransform.map((i: unknown) => keysToCamel(i));
  }

  return objectToTransform;
};

const toAppError = (name: string, message: string, details: unknown): AppError => ({ name, message, details });

export type { AppError };
export { keysToCamel, toAppError };
