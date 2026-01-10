# `tryCatch`

## `try-catch.ts`

```ts
export type TryCatchOnTryFn<T> = () => T;
export type TryCatchOnTryAsyncFn<T> = () => Promise<T>;
export type TryCatchOnCatchFn<C> = (error: unknown) => C;
export type TryCatchOnCatchAsyncFn<C> = (error: unknown) => Promise<C>;

export function tryCatch<T, C>(onTry: TryCatchOnTryFn<T>, onCatch: TryCatchOnCatchFn<C>): T | C;
export function tryCatch<T, C>(onTry: TryCatchOnTryAsyncFn<T>, onCatch: TryCatchOnCatchAsyncFn<C>): Promise<T | C>;
export function tryCatch<T, C>(onTry: TryCatchOnTryAsyncFn<T>, onCatch: TryCatchOnCatchFn<C>): Promise<T> | C;
export function tryCatch<T, C>(onTry: TryCatchOnTryFn<T>, onCatch: TryCatchOnCatchAsyncFn<C>): T | Promise<C>;
export function tryCatch<T, C>(
  onTry: TryCatchOnTryFn<T> | TryCatchOnTryAsyncFn<T>,
  onCatch: TryCatchOnCatchFn<C> | TryCatchOnCatchAsyncFn<C>
): T | C | Promise<T> | Promise<C> | Promise<T | C> {
  try {
    const result = onTry();
    return result instanceof Promise ? result.catch(onCatch) : result;
  } catch (error) {
    return onCatch(error);
  }
}
```

## `try-catch.test.ts`

```ts
import { describe, expect, test } from 'bun:test';
import { tryCatch } from './try-catch';

describe('tryCatch utility', async () => {
  test('sync', async () => {
    const r1 = tryCatch(
      () => 'success',
      () => 'failed'
    );
    const r2 = tryCatch(
      () => true,
      () => false
    );
    const r3 = tryCatch(
      () => {
        throw true;
        // biome-ignore lint/correctness/noUnreachable: testing.
        return true;
      },
      () => false
    );

    expect(r1).toBeString();
    expect(r1).toBe('success');
    expect(r2).toBeBoolean();
    expect(r2).toBeTrue();
    expect(r3).toBeBoolean();
    expect(r3).toBeFalse();
  });

  test('async', async () => {
    const r1 = await tryCatch(
      async () => 'success',
      async () => 'failed'
    );
    const r2 = await tryCatch(
      async () => true,
      async () => false
    );
    const r3 = await tryCatch(
      async () => {
        new Promise((resolve) => setTimeout(resolve, 100));
        throw true;
        // biome-ignore lint/correctness/noUnreachable: testing.
        return true;
      },
      async () => false
    );

    expect(r1).toBeString();
    expect(r1).toBe('success');
    expect(r2).toBeBoolean();
    expect(r2).toBeTrue();
    expect(r3).toBeBoolean();
    expect(r3).toBeFalse();
  });

  test('mixed', async () => {
    const r1 = await tryCatch(
      () => 'success',
      async () => 'failed'
    );
    const r2 = await tryCatch(
      async () => true,
      () => false
    );
    const r3 = await tryCatch(
      async () => {
        new Promise((resolve) => setTimeout(resolve, 100));
        throw true;
        // biome-ignore lint/correctness/noUnreachable: testing.
        return true;
      },
      () => false
    );

    expect(r1).toBeString();
    expect(r1).toBe('success');
    expect(r2).toBeBoolean();
    expect(r2).toBeTrue();
    expect(r3).toBeBoolean();
    expect(r3).toBeFalse();
  });
});
```
