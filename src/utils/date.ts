import { DateTime } from 'luxon';

export interface DatePreset {
  dateModifier: (now: DateTime) => DateTime;
}

export interface DateRangePreset {
  dateFrom: DatePreset,
  dateTo: DatePreset,
  label: string,
}

export const rangeFromPreset = (preset: DateRangePreset): [string, string] => {
  const now = DateTime.now();

  let dateFrom = preset.dateFrom.dateModifier(now);

  if (dateFrom > now) {
    dateFrom = now;
  }

  let dateTo = preset.dateTo.dateModifier(now);

  if (dateTo > now) {
    dateTo = now;
  }

  return [
    dateFrom.toFormat(dateFormat.yearMonthDay),
    dateTo.toFormat(dateFormat.yearMonthDay),
  ];
};

export const dateFormat = {
  yearMonth: 'yyyy-LL',
  yearMonthDay: 'yyyy-LL-dd',
  yearMonthDayDisplay: 'dd/LL/yyyy',
};

export const dateToDisplayFormat = (date: string) => DateTime.fromFormat(date, dateFormat.yearMonthDay)
  .toFormat(dateFormat.yearMonthDayDisplay);

export const normalizeRange = (range: [string, string]): [string, string] => {
  const dateFrom = DateTime.fromFormat(range[0], dateFormat.yearMonthDay);
  const dateTo = DateTime.fromFormat(range[1], dateFormat.yearMonthDay);

  if (dateFrom > dateTo) {
    return [range[1], range[0]];
  } else {
    return [range[0], range[1]];
  }
};

export const previousRange = (range: [string, string]): [string, string] => {
  const dateFrom = DateTime.fromFormat(range[0], dateFormat.yearMonthDay);
  const dateTo = DateTime.fromFormat(range[1], dateFormat.yearMonthDay);

  return [
    dateFrom.minus(dateTo.diff(dateFrom).plus({ days: 1 })).toFormat(dateFormat.yearMonthDay),
    dateTo.minus(dateTo.diff(dateFrom).plus({ days: 1 })).toFormat(dateFormat.yearMonthDay),
  ];
};

export const previousYear = (range: [string, string]): [string, string] => {
  const dateFrom = DateTime.fromFormat(range[0], dateFormat.yearMonthDay);
  const dateTo = DateTime.fromFormat(range[1], dateFormat.yearMonthDay);

  return [
    dateFrom.minus({ year: 1 }).toFormat(dateFormat.yearMonthDay),
    dateTo.minus({ year: 1 }).toFormat(dateFormat.yearMonthDay),
  ];
};

export const rangeToDisplayFormat = (range: [string, string]) => {
  const dateFrom = dateToDisplayFormat(range[0]);
  const dateTo = dateToDisplayFormat(range[1]);

  return `${dateFrom} - ${dateTo}`;
};

export const tryRangeFromDisplayFormat = (displayRange: string): [string, string]|undefined => {
  const range = displayRange.split('-').map((date) => date.trim());

  if (range.length !== 2) {
    return undefined;
  }

  if (range.some((date) => date.length !== dateFormat.yearMonthDayDisplay.length)) {
    return undefined;
  }

  try {
    const dateFrom = DateTime.fromFormat(range[0], dateFormat.yearMonthDayDisplay);
    const dateTo = DateTime.fromFormat(range[1], dateFormat.yearMonthDayDisplay);

    if (dateFrom > dateTo) {
      return undefined;
    }

    if (dateTo > DateTime.now()) {
      return undefined;
    }

    return [
      dateFrom.toFormat(dateFormat.yearMonthDay),
      dateTo.toFormat(dateFormat.yearMonthDay),
    ];
  } catch {
    return undefined;
  }
};
