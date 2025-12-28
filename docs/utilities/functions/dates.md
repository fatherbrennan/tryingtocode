# dates

## `dates.ts`

```ts
/**
 * **date.ts**
 *
 * keep in mind that every Date object is a utc date internally.
 *
 * unix timestamp is always assumed to be in utc.
 *
 * keywords:
 * - `iso` (ISO 8601) is the international standard format for representing dates and times. `YYYY-MM-DDThh:mm:ss.sss`
 * - `utc` is the is the primary time standard.
 * - `local` is the local time, which is to be the chosen time zone relative to utc.
 * - `common` is for variables used for utc and local time.
 * - `time` is to specify `hour`, `minute`, `second`, `millisecond`, `microsecond`. `Thh:mm:ss.sss`
 * - `date` is to specify `year`, `month`, `day`. `YYYY-MM-DD`
 * - `timeZone` is to specify the time zone. `Z` is for UTC, and `±hh:mm` for local time.
 */

/** unix timestamp in seconds. */
export type UnixTimestampSeconds = number;
/** unix timestamp in milliseconds. */
export type UnixTimestamp = number;
/** `YYYY-MM-DDThh:mm:ss.sss<IsoTimeOffset>` */
export type IsoDatetime = string;
/** `YYYY-MM-DD` */
export type IsoDate = string;
/** `hh:mm:ss` */
export type IsoTime = string;
/** `hh:mm:ss.sss` */
export type IsoTimeMs = string;
/**
 * - `'Z'` (utc)
 * - `'±hh:mm'`
 */
export type IsoTimeOffset = string;

type DeconstructedIsoDatetime = {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
  offset?: string;
};

export const LOCAL_LANGUAGE_CODE = 'en-AU';
export const LOCAL_TIME_ZONE = 'Australia/Adelaide';

/**
 * - `'2025-12-28'`
 * - `'04:24'`
 * - `'04:24:17'`
 * - `'04:24:17+10:30'`
 * - `'04:24:17-10:30'`
 * - `'04:24:17Z'`
 * - `'04:24:17.71'`
 * - `'04:24:17.71+10:30'`
 * - `'04:24:17.71-10:30'`
 * - `'04:24:17.71Z'`
 * - `'T04:24'`
 * - `'T04:24:17'`
 * - `'T04:24:17+10:30'`
 * - `'T04:24:17-10:30'`
 * - `'T04:24:17Z'`
 * - `'T04:24:17.71'`
 * - `'T04:24:17.71+10:30'`
 * - `'T04:24:17.71-10:30'`
 * - `'T04:24:17.71Z'`
 * - `'2025-12-28T04:24'`
 * - `'2025-12-28T04:24+10:30'`
 * - `'2025-12-28T04:24-10:30'`
 * - `'2025-12-28T04:24Z'`
 * - `'2025-12-28T04:24:17'`
 * - `'2025-12-28T04:24:17+10:30'`
 * - `'2025-12-28T04:24:17-10:30'`
 * - `'2025-12-28T04:24:17Z'`
 * - `'2025-12-28T04:24:17.71'`
 * - `'2025-12-28T04:24:17.71+10:30'`
 * - `'2025-12-28T04:24:17.71-10:30'`
 * - `'2025-12-28T04:24:17.71Z'`
 */
export const rIsoDatetime = /^((\d\d\d\d)-([0-1][0-2])-([0-3]\d))?(T?([0-2]\d):([0-5]\d)(:([0-5]\d))?)?(\.(\d{1,3}))?([+-][0-2]\d:[0-5]\d|Z)?$/m;

const commonTimeOptions = {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
} as const satisfies Parameters<typeof Intl.DateTimeFormat>[1];

export const utcTime = new Intl.DateTimeFormat(LOCAL_LANGUAGE_CODE, {
  ...commonTimeOptions,
  timeZone: 'UTC',
});

export const localTime = new Intl.DateTimeFormat(LOCAL_LANGUAGE_CODE, {
  ...commonTimeOptions,
  timeZone: LOCAL_TIME_ZONE,
});

export const getLocalTimeZoneOffset = (): { offset: IsoTimeOffset; ms: UnixTimestamp } => {
  const utcDate = new Date();
  const timeZoneOffset = utcDate.toLocaleString(LOCAL_LANGUAGE_CODE, { timeZone: LOCAL_TIME_ZONE, timeZoneName: 'longOffset' }).match(/GMT(.+)$/m)?.[1] ?? '';
  // only add the timezone offset if it is not utc.
  const timeZoneDate = timeZoneOffset.length === 0 ? utcDate : new Date(utcDate.toISOString().replace('Z', timeZoneOffset));
  const timeZoneOffsetMs = utcDate.getTime() - timeZoneDate.getTime();
  return {
    offset: timeZoneOffset,
    ms: timeZoneOffsetMs,
  };
};

export const buildIsoDatetime = ({ day, month, year, hour, minute, second, millisecond, offset }: DeconstructedIsoDatetime): string => {
  /** add leading `'0'` to string based on `length`. */
  const padZero = (value: number | string, length: number) => {
    const valueString = value.toString();
    let v = '';
    for (let i = 0; i < length - valueString.length; i++) v += '0';
    return v + valueString;
  };

  return `${padZero(year ?? '0000', 4)}-${padZero(month ?? '01', 2)}-${padZero(day ?? '01', 2)}T${padZero(hour ?? '00', 2)}:${padZero(minute ?? '00', 2)}:${padZero(
    second ?? '00',
    2
  )}.${padZero(millisecond ?? '000', 3)}${offset ?? 'Z'}`;
};

/** return deconstructed date and time from an iso-like datetime string. see `rIsoDatetime` for valid patterns. */
export const deconstructIsoLikeDatetime = (isoLikeDatetime: IsoDate | IsoDatetime | IsoTime | IsoTimeMs): DeconstructedIsoDatetime => {
  const [_match, __, year, month, day, ___, hour, minute, ____, second, _____, millisecond, offset] = isoLikeDatetime.match(rIsoDatetime);
  const numberOrUndefined = (n: string | undefined) => (n === undefined ? undefined : +n);

  return {
    year: numberOrUndefined(year),
    month: numberOrUndefined(month),
    day: numberOrUndefined(day),
    hour: numberOrUndefined(hour),
    minute: numberOrUndefined(minute),
    second: numberOrUndefined(second),
    millisecond: numberOrUndefined(millisecond),
    offset: offset,
  };
};
```

## `dates.test.ts`

```ts
import { describe, expect, test } from 'bun:test';
import { deconstructIsoLikeDatetime } from './dates';

describe('deconstructIsoLikeDatetime', () => {
  const d1 = '2025-12-28';
  test(d1, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d1);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(undefined);
    expect(minute).toBe(undefined);
    expect(second).toBe(undefined);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe(undefined);
  });

  const d2 = '04:24';
  test(d2, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d2);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(undefined);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe(undefined);
  });

  const d3 = '04:24:17';
  test(d3, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d3);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe(undefined);
  });

  const d4 = '04:24:17+10:30';
  test(d4, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d4);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('+10:30');
  });

  const d5 = '04:24:17-10:30';
  test(d5, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d5);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('-10:30');
  });

  const d6 = '04:24:17Z';
  test(d6, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d6);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('Z');
  });

  const d7 = '04:24:17.71';
  test(d7, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d7);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe(undefined);
  });

  const d8 = '04:24:17.71+10:30';
  test(d8, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d8);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('+10:30');
  });

  const d9 = '04:24:17.71-10:30';
  test(d9, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d9);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('-10:30');
  });

  const d10 = '04:24:17.71Z';
  test(d10, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d10);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('Z');
  });

  const d11 = 'T04:24';
  test(d11, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d11);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(undefined);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe(undefined);
  });

  const d12 = 'T04:24:17';
  test(d12, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d12);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe(undefined);
  });

  const d13 = 'T04:24:17+10:30';
  test(d13, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d13);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('+10:30');
  });

  const d14 = 'T04:24:17-10:30';
  test(d14, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d14);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('-10:30');
  });

  const d15 = 'T04:24:17Z';
  test(d15, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d15);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('Z');
  });

  const d16 = 'T04:24:17.71';
  test(d16, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d16);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe(undefined);
  });

  const d17 = 'T04:24:17.71+10:30';
  test(d17, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d17);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('+10:30');
  });

  const d18 = 'T04:24:17.71-10:30';
  test(d18, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d18);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('-10:30');
  });

  const d19 = 'T04:24:17.71Z';
  test(d19, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d19);
    expect(year).toBe(undefined);
    expect(month).toBe(undefined);
    expect(day).toBe(undefined);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('Z');
  });

  const d20 = '2025-12-28T04:24';
  test(d20, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d20);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(undefined);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe(undefined);
  });

  const d21 = '2025-12-28T04:24+10:30';
  test(d21, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d21);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(undefined);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('+10:30');
  });

  const d22 = '2025-12-28T04:24-10:30';
  test(d22, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d22);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(undefined);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('-10:30');
  });

  const d23 = '2025-12-28T04:24Z';
  test(d23, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d23);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(undefined);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('Z');
  });

  const d24 = '2025-12-28T04:24:17';
  test(d24, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d24);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe(undefined);
  });

  const d25 = '2025-12-28T04:24:17+10:30';
  test(d25, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d25);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('+10:30');
  });

  const d26 = '2025-12-28T04:24:17-10:30';
  test(d26, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d26);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('-10:30');
  });

  const d27 = '2025-12-28T04:24:17Z';
  test(d27, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d27);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(undefined);
    expect(offset).toBe('Z');
  });

  const d28 = '2025-12-28T04:24:17.71';
  test(d28, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d28);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe(undefined);
  });

  const d29 = '2025-12-28T04:24:17.71+10:30';
  test(d29, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d29);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('+10:30');
  });

  const d30 = '2025-12-28T04:24:17.71-10:30';
  test(d30, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d30);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('-10:30');
  });

  const d31 = '2025-12-28T04:24:17.71Z';
  test(d31, () => {
    const { year, month, day, hour, minute, second, millisecond, offset } = deconstructIsoLikeDatetime(d31);
    expect(year).toBe(2025);
    expect(month).toBe(12);
    expect(day).toBe(28);
    expect(hour).toBe(4);
    expect(minute).toBe(24);
    expect(second).toBe(17);
    expect(millisecond).toBe(71);
    expect(offset).toBe('Z');
  });
});
```
