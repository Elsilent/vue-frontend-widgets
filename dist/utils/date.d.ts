import { DateTime } from 'luxon';
export interface DatePreset {
    dateModifier: (now: DateTime) => DateTime;
}
export interface DateRangePreset {
    dateFrom: DatePreset;
    dateTo: DatePreset;
    label: string;
}
export declare const rangeFromPreset: (preset: DateRangePreset) => [string, string];
export declare const dateFormat: {
    yearMonth: string;
    yearMonthDay: string;
    yearMonthDayDisplay: string;
};
export declare const dateToDisplayFormat: (date: string) => string;
export declare const normalizeRange: (range: [string, string]) => [string, string];
export declare const previousRange: (range: [string, string]) => [string, string];
export declare const previousYear: (range: [string, string]) => [string, string];
export declare const rangeToDisplayFormat: (range: [string, string]) => string;
export declare const tryRangeFromDisplayFormat: (displayRange: string) => [
    string,
    string
] | undefined;
