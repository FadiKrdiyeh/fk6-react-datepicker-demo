import { CalendarPositionsEnum, CalendarsEnum, CalendarViewsEnum, ThemesEnum } from "@fk6/react-datepicker";
import Heading from '@theme/Heading';
import clsx from 'clsx';
import moment from 'moment-hijri';
import { useEffect, useMemo, useState } from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";

import Checkbox from '@site/src/components/Checkbox';
import SelectField from '@site/src/components/SelectField';
import TextField from "@site/src/components/TextField";
import FK6DatePicker from "@site/src/components/DatePicker";
import FK6DateTimePicker from "@site/src/components/DateTimePicker";
import styles from './styles.module.css';

import "@fk6/react-datepicker/react-datepicker.css";

//#region...
import "moment/locale/af";
import "moment/locale/ar";
import "moment/locale/ar-dz";
import "moment/locale/ar-kw";
import "moment/locale/ar-ly";
import "moment/locale/ar-ma";
import "moment/locale/ar-ps";
import "moment/locale/ar-sa";
import "moment/locale/ar-tn";
import "moment/locale/az";
import "moment/locale/be";
import "moment/locale/bg";
import "moment/locale/bm";
import "moment/locale/bn";
import "moment/locale/bn-bd";
import "moment/locale/bo";
import "moment/locale/br";
import "moment/locale/bs";
import "moment/locale/ca";
import "moment/locale/cs";
import "moment/locale/cv";
import "moment/locale/cy";
import "moment/locale/da";
import "moment/locale/de";
import "moment/locale/de-at";
import "moment/locale/de-ch";
import "moment/locale/dv";
import "moment/locale/el";
import "moment/locale/en-au";
import "moment/locale/en-ca";
import "moment/locale/en-gb";
import "moment/locale/en-ie";
import "moment/locale/en-il";
import "moment/locale/en-in";
import "moment/locale/en-nz";
import "moment/locale/en-sg";
import "moment/locale/eo";
import "moment/locale/es";
import "moment/locale/es-do";
import "moment/locale/es-mx";
import "moment/locale/es-us";
import "moment/locale/et";
import "moment/locale/eu";
import "moment/locale/fa";
import "moment/locale/fi";
import "moment/locale/fil";
import "moment/locale/fo";
import "moment/locale/fr";
import "moment/locale/fr-ca";
import "moment/locale/fr-ch";
import "moment/locale/fy";
import "moment/locale/ga";
import "moment/locale/gd";
import "moment/locale/gl";
import "moment/locale/gom-deva";
import "moment/locale/gom-latn";
import "moment/locale/gu";
import "moment/locale/he";
import "moment/locale/hi";
import "moment/locale/hr";
import "moment/locale/hu";
import "moment/locale/hy-am";
import "moment/locale/id";
import "moment/locale/is";
import "moment/locale/it";
import "moment/locale/it-ch";
import "moment/locale/ja";
import "moment/locale/jv";
import "moment/locale/ka";
import "moment/locale/kk";
import "moment/locale/km";
import "moment/locale/kn";
import "moment/locale/ko";
import "moment/locale/ku";
import "moment/locale/ku-kmr";
import "moment/locale/ky";
import "moment/locale/lb";
import "moment/locale/lo";
import "moment/locale/lt";
import "moment/locale/lv";
import "moment/locale/me";
import "moment/locale/mi";
import "moment/locale/mk";
import "moment/locale/ml";
import "moment/locale/mn";
import "moment/locale/mr";
import "moment/locale/ms";
import "moment/locale/ms-my";
import "moment/locale/mt";
import "moment/locale/my";
import "moment/locale/nb";
import "moment/locale/ne";
import "moment/locale/nl";
import "moment/locale/nl-be";
import "moment/locale/nn";
import "moment/locale/oc-lnc";
import "moment/locale/pa-in";
import "moment/locale/pl";
import "moment/locale/pt";
import "moment/locale/pt-br";
import "moment/locale/ro";
import "moment/locale/ru";
import "moment/locale/sd";
import "moment/locale/se";
import "moment/locale/si";
import "moment/locale/sk";
import "moment/locale/sl";
import "moment/locale/sq";
import "moment/locale/sr";
import "moment/locale/sr-cyrl";
import "moment/locale/ss";
import "moment/locale/sv";
import "moment/locale/sw";
import "moment/locale/ta";
import "moment/locale/te";
import "moment/locale/tet";
import "moment/locale/tg";
import "moment/locale/th";
import "moment/locale/tk";
import "moment/locale/tl-ph";
import "moment/locale/tlh";
import "moment/locale/tr";
import "moment/locale/tzl";
import "moment/locale/tzm";
import "moment/locale/tzm-latn";
import "moment/locale/ug-cn";
import "moment/locale/uk";
import "moment/locale/ur";
import "moment/locale/uz";
import "moment/locale/uz-latn";
import "moment/locale/vi";
import "moment/locale/x-pseudo";
import "moment/locale/yo";
import "moment/locale/zh-cn";
import "moment/locale/zh-hk";
import "moment/locale/zh-mo";
import "moment/locale/zh-tw";
//#endregion

type SelectOption<IDT = string, LabelT = string> = {
    id: IDT,
    label: LabelT,
}

const weekDays: SelectOption<number, string>[] = [
    { id: 0, label: 'Sunday' },
    { id: 1, label: 'Monday' },
    { id: 2, label: 'Thursday' },
    { id: 3, label: 'Wednesday' },
    { id: 4, label: 'Thursday' },
    { id: 5, label: 'Friday' },
    { id: 6, label: 'Saturday' },
];

const timeColumns: SelectOption<'hours' | 'minutes' | 'seconds', string>[] = [
    { id: 'hours', label: 'Hours' },
    { id: 'minutes', label: 'Minutes' },
    { id: 'seconds', label: 'Seconds' },
];

export default function Examples() {
    const [datePickerValue, setDatePickerValue] = useState<Date | null>(null);
    const [datetimePickerValue, setDatetimePickerValue] = useState<Date | null>(null);
    const [copied1, setCopied1] = useState(false);
    const [copied2, setCopied2] = useState(false);

    const [theme, setTheme] = useState<(SelectOption<ThemesEnum, keyof typeof ThemesEnum>) | null>(null);
    const [locale, setLocale] = useState<SelectOption | null>({ id: 'en', label: 'en' });
    const [calendar, setCalendar] = useState<SelectOption<CalendarsEnum, keyof typeof CalendarsEnum> | null>(null);
    const [position, setPosition] = useState<SelectOption<CalendarPositionsEnum, keyof typeof CalendarPositionsEnum> | null>(null);
    const [format, setFormat] = useState<string>('');
    const [minDate, setMinDate] = useState<Date | null>(null);
    const [maxDate, setMaxDate] = useState<Date | null>(null);
    const [initialDate, setInitialDate] = useState<Date | null>(null);
    const [initialView, setInitialView] = useState<SelectOption<CalendarViewsEnum, keyof typeof CalendarViewsEnum> | null>(null);
    const [views, setViews] = useState<SelectOption<CalendarViewsEnum, keyof typeof CalendarViewsEnum>[]>([]);
    const [placeholder, setPlaceholder] = useState<string>('');
    const [yearsRange, setYearsRange] = useState<number>(12);
    const [showWeeksNumber, setShowWeeksNumber] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [readOnly, setReadOnly] = useState<boolean>(false);
    const [closeOnSelect, setCloseOnSelect] = useState<boolean>(true);
    const [disablePortal, setDisablePortal] = useState<boolean>(false);
    const [enableGoToToday, setEnableGoToToday] = useState<boolean>(false);
    const [disableLocaleDigits, setDisableLocaleDigits] = useState<boolean>(false);
    const [hideFooter, setHideFooter] = useState<boolean>(false);
    const [firstDayOfWeek, setFirstDayOfWeek] = useState<SelectOption<number, string> | null>(null);
    const [weekends, setWeekends] = useState<SelectOption<number, string>[]>([]);
    const [hideOutsideDays, setHideOutsideDays] = useState<boolean>(false);
    const [disableWeekends, setDisableWeekends] = useState<boolean>(false);
    const [highlightDate, setHighlightDate] = useState<Date | null>(null);
    const [is12h, setIs12h] = useState<boolean>(false);
    const [showScrollbars, setShowScrollbars] = useState<boolean>(false);
    const [selectOnScrolling, setSelectOnScrolling] = useState<boolean>(false);
    const [visibleColumns, setVisibleColumns] = useState<SelectOption<'hours' | 'minutes' | 'seconds', string>[]>([]);
    const [disabledHours, setDisabledHours] = useState<number[]>([]);
    const [disabledMinutes, setDisabledMinutes] = useState<number[]>([]);
    const [disabledSeconds, setDisabledSeconds] = useState<number[]>([]);
    const [disabledMeridiem, setDisabledMeridiem] = useState<('AM' | 'PM')[]>([]);

    const [state, setState] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const CalendarPositionsEnum1: (typeof CalendarPositionsEnum) = require('@fk6/react-datepicker/index.es.js').CalendarPositionsEnum;
        const ThemesEnum1: (typeof ThemesEnum) = require('@fk6/react-datepicker/index.es.js').ThemesEnum;
        const CalendarsEnum1: (typeof CalendarsEnum) = require('@fk6/react-datepicker/index.es.js').CalendarsEnum;
        const CalendarViewsEnum1: (typeof CalendarViewsEnum) = require('@fk6/react-datepicker/index.es.js').CalendarViewsEnum;

        setState({
            hasPosition: !!position && position?.id !== CalendarPositionsEnum1.Bottom,
            hasLocale: !!locale && locale?.id !== 'en',
            hasTheme: (!!theme && theme?.id !== ThemesEnum1.Light),
            hasCalendar: !!calendar && calendar?.id !== CalendarsEnum1.Gregorian,
            hasInitialView: !!initialView && initialView?.id !== CalendarViewsEnum1.Days,
            hasCloseOnSelect: closeOnSelect !== undefined && !closeOnSelect,
            hasViews: views.length > 0,
            hasYearsRange: yearsRange !== 12,
            hasFirstDayOfWeek: !!firstDayOfWeek && firstDayOfWeek?.id !== 0,
            hasWeekends: weekends.length > 0,
            hasVisibleColumns: visibleColumns.length > 0,
            hasDisabledHours: disabledHours.length > 0,
            hasDisabledMinutes: disabledMinutes.length > 0,
            hasDisabledSeconds: disabledSeconds.length > 0,
            hasDisabledMeridiem: disabledMeridiem.length > 0,
        });
    }, [position, locale, theme, calendar, initialView, closeOnSelect, views, yearsRange, firstDayOfWeek, weekends, visibleColumns, disabledHours, disabledMinutes, disabledSeconds, disabledMeridiem]);

    const hasDaysCalendarProps = showWeeksNumber || state.hasFirstDayOfWeek || state.hasWeekends || !!highlightDate;
    const hasYearsCalendarProps = state.hasYearsRange;
    const hasTimePickerProps = showScrollbars || selectOnScrolling || state.hasVisibleColumns || state.hasDisabledHours || state.hasDisabledMinutes || state.hasDisabledSeconds || state.hasDisabledMeridiem || is12h;
    const hasCalendarProps = hasDaysCalendarProps || hasYearsCalendarProps || hasTimePickerProps || state.hasPosition || showWeeksNumber || disablePortal || enableGoToToday || disableLocaleDigits || hideFooter || state.hasInitialView || state.hasViews;

    const componentsBody = (timePickerBody?: string) => {
        return `
            ${state.hasTheme ? `theme="${theme?.id}"` : ''}
            ${state.hasLocale ? `locale="${locale?.id}"` : ''}
            ${state.hasCalendar ? `calendar="${calendar?.id}"` : ''}
            ${!!minDate ? `minDate={new Date(${minDate.getDate()}, ${minDate.getMonth() + 1}, ${minDate.getFullYear()})} // You can use Moment...` : ''}
            ${!!maxDate ? `maxDate={new Date(${maxDate.getDate()}, ${maxDate.getMonth() + 1}, ${maxDate.getFullYear()})} // You can use Moment...` : ''}
            ${!!initialDate ? `initialDate={new Date(${initialDate.getDate()}, ${initialDate.getMonth() + 1}, ${initialDate.getFullYear()})} // You can use Moment...` : ''}
            ${!!format ? `format="${format}"` : ''}
            ${!!placeholder ? `placeholder="${placeholder}"` : ''}
            ${!!disabled ? `disabled={${disabled}}` : ''}
            ${!!readOnly ? `readOnly={${readOnly}}` : ''}
            ${!!state.hasCloseOnSelect ? `closeOnSelect={${closeOnSelect}}` : ''}
            ${hasCalendarProps ? `calendarProps={{
                ${state.hasPosition ? `position: "${position?.id}",` : ''}
                ${state.hasInitialView ? `initialView: "${initialView?.id}",` : ''}
                ${disablePortal ? `disablePortal: ${disablePortal},` : ''}
                ${enableGoToToday ? `enableGoToToday: ${enableGoToToday},` : ''}
                ${disableLocaleDigits ? `disableLocaleDigits: ${disableLocaleDigits},` : ''}
                ${hideFooter ? `hideFooter: ${hideFooter},` : ''}
                ${state.hasViews ? `views: [${views.map(v => `"${v.id}"`)}],` : ''}
                ${hasDaysCalendarProps ? `daysCalendarProps: {
                    ${showWeeksNumber ? `showWeeksNumber: ${showWeeksNumber},` : ''}
                    ${firstDayOfWeek ? `firstDayOfWeek: ${firstDayOfWeek.id}, // 0 -> Sunday, 1 -> Monday...` : ''}
                    ${hideOutsideDays ? `hideOutsideDays: ${hideOutsideDays},` : ''}
                    ${weekends.length > 0 ? `weekends: [${weekends.map(w => `${w.id}`)}], // 0 -> Sunday, 1 -> Monday...` : ''}
                    ${disableWeekends ? `disableWeekends: ${disableWeekends},` : ''}
                    ${!!highlightDate ? `highlightDates: [new Date(${highlightDate.getDate()}, ${highlightDate.getMonth() + 1}, ${highlightDate.getFullYear()})], // You can set as many as you want, including Moment objects...` : ''}
                },` : ''}
                ${hasYearsCalendarProps ? `yearsCalendarProps: {
                    ${state.hasYearsRange ? `range: ${yearsRange},` : ''}
                },` : ''}
                ${(timePickerBody && hasTimePickerProps) ? `timePickerProps: {
                    ${timePickerBody}
                },` : ''}
            }}` : ''}
        `;
    }

    const datePickerCode = `
        ${state.hasLocale ? `import "moment/locale/${locale?.id}";` : ''}

        <DatePicker
            value={datePickerValue}
            ${componentsBody()}
            onChange={setDatePickerValue}
        />
    `;

    const dateTimePickerCode = `
        ${state.hasLocale ? `import "moment/locale/${locale?.id}";` : ''}

        <DateTimePicker
            value={dateTimePickerValue}
                ${componentsBody(`
                    ${is12h ? `is12h: ${is12h},` : ''}
                    ${showScrollbars ? `showScrollbars: ${showScrollbars},` : ''}
                    ${selectOnScrolling ? `selectOnScrolling: ${selectOnScrolling},` : ''}
                    ${visibleColumns.length > 0 ? `visibleColumns: [${visibleColumns.map(c => `"${c.id}"`)}],` : ''}
                    ${disabledHours.length > 0 ? `disabledHours: [${disabledHours}],` : ''}
                    ${disabledMinutes.length > 0 ? `disabledMinutes: [${disabledMinutes}],` : ''}
                    ${disabledSeconds.length > 0 ? `disabledSeconds: [${disabledSeconds}],` : ''}
                    ${disabledMeridiem.length > 0 ? `disabledMeridiem: [${disabledMeridiem.map(mer => `"${mer}"`)}],` : ''}
                `)}
            onChange={setTimeDatePickerValue}
        />
    `;

    const cleanCode = (code: string): string => {
        return code
            .split("\n")
            .filter((line, index, array) => (index === 0 && index === array.length - 1) || line.trim() !== "")
            .join("\n");
    }

    const copyToClipboard = async (codeBlock: number) => {
        if (codeBlock === 1) {
            await navigator.clipboard.writeText(datePickerCode);
            setCopied1(true);
            setTimeout(() => setCopied1(false), 2000);
        } else {
            await navigator.clipboard.writeText(dateTimePickerCode);
            setCopied2(true);
            setTimeout(() => setCopied2(false), 2000);
        }
    };

    const generateListFromEnum = <T extends Record<string, string>>(test: T) => {
        if (!test)
            return [];
        return Object.entries(test).map(([key, value]) => ({ id: value as T[keyof T], label: key as keyof T }));
    }

    const switchesArr = useMemo(() => [
        {
            key: 'show-week-numbers',
            checked: showWeeksNumber,
            label: "Show week numbers",
            onChange: value => setShowWeeksNumber(value),
        },
        {
            key: 'disable-locale-digits',
            checked: disableLocaleDigits,
            label: "Disable locale digits",
            onChange: value => setDisableLocaleDigits(value),
        },
        {
            key: 'close-on-select',
            checked: closeOnSelect,
            label: "Close on select",
            onChange: value => setCloseOnSelect(value),
        },
        {
            key: 'enable-go-to-today',
            checked: enableGoToToday,
            label: "Enable go to today button",
            onChange: value => setEnableGoToToday(value),
        },
        {
            key: 'hide-footer',
            checked: hideFooter,
            label: "Hide footer",
            onChange: value => setHideFooter(value),
        },
        {
            key: 'hide-outside-days',
            checked: hideOutsideDays,
            label: "Hide outside days",
            onChange: value => setHideOutsideDays(value),
        },
        {
            key: 'disable-weekends',
            checked: disableWeekends,
            label: "Disable weekends",
            onChange: value => setDisableWeekends(value),
        },
        {
            key: 'is-12-h',
            checked: is12h,
            label: "12h mode (Time picker)",
            onChange: value => setIs12h(value),
        },
        {
            key: 'show-scrollbars',
            checked: showScrollbars,
            label: "Show scrollbars (Time picker)",
            onChange: value => setShowScrollbars(value),
        },
        {
            key: 'select-on-scrolling',
            checked: selectOnScrolling,
            label: "Select on scrolling (Time picker)",
            onChange: value => setSelectOnScrolling(value),
        },
        {
            key: 'diabled-portal',
            checked: disablePortal,
            label: "Disable portal",
            onChange: value => setDisablePortal(value),
        },
        {
            key: 'disabled',
            checked: disabled,
            label: "Disabled",
            onChange: value => setDisabled(value),
        },
        {
            key: 'read-only',
            checked: readOnly,
            label: "Read only",
            onChange: value => setReadOnly(value),
        },
    ], [showWeeksNumber, disabled, closeOnSelect, readOnly, disablePortal, enableGoToToday, disableLocaleDigits, hideFooter, hideOutsideDays, disableWeekends, is12h, showScrollbars, selectOnScrolling]);

    return (
        <Layout>
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <Heading as="h1" className="hero__title">
                        Live Demo
                    </Heading>
                    <p className="hero__subtitle">Play around with this examples...</p>
                </div>
            </header>

            <main>
                <div className={styles.container}>
                    <div
                        className={styles.grid}
                        style={{
                            padding: '20px 70px',
                            gridTemplateColumns: `repeat(${2}, 1fr)`,
                            gap: `${50}px`,
                        }}
                    >
                        <div className={styles['datepicker-container']}>
                            <div style={{ position: "relative", height: "100%", maxHeight: "300px", marginBottom: "20px" }}>
                                <button
                                    onClick={() => copyToClipboard(1)}
                                    style={{
                                        position: "absolute",
                                        right: "18px",
                                        top: "10px",
                                        background: "#eee",
                                        border: "none",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                        borderRadius: "5px",
                                        backgroundColor: "var(--ifm-background-surface-color)",
                                    }}
                                >
                                    {copied1 ? "Copied!" : "Copy"}
                                </button>
                                <SyntaxHighlighter customStyle={{ padding: '25px', height: '100%' }} language="tsx" style={dracula}>
                                    {cleanCode(datePickerCode)}
                                </SyntaxHighlighter>
                            </div>

                            {!!datePickerValue ? (!!format ? moment(datePickerValue).format(format) : datePickerValue.toString()) : 'Select Value...'}

                            <FK6DatePicker
                                value={datePickerValue}
                                theme={theme?.id}
                                locale={locale?.id}
                                calendar={calendar?.id}
                                minDate={minDate}
                                maxDate={maxDate}
                                initialDate={initialDate}
                                format={!!format ? format : undefined}
                                placeholder={placeholder}
                                disabled={disabled}
                                readOnly={readOnly}
                                closeOnSelect={closeOnSelect}
                                calendarProps={{
                                    position: position?.id,
                                    initialView: initialView?.id,
                                    disablePortal,
                                    enableGoToToday,
                                    hideFooter,
                                    disableLocaleDigits,
                                    views: views.length > 0 ? views.map(v => v.id) : undefined,
                                    daysCalendarProps: {
                                        showWeeksNumber,
                                        firstDayOfWeek: firstDayOfWeek?.id,
                                        hideOutsideDays,
                                        weekends: weekends.length > 0 ? weekends.map(w => w.id) : undefined,
                                        disableWeekends,
                                        highlightDates: !!highlightDate ? [highlightDate] : undefined,
                                    },
                                    yearsCalendarProps: {
                                        range: yearsRange,
                                    },
                                }}
                                onChange={setDatePickerValue}
                            />
                        </div>
                        <div className={styles['datepicker-container']}>
                            <div style={{ position: "relative", height: "100%", maxHeight: "300px", marginBottom: "20px" }}>
                                <button
                                    onClick={() => copyToClipboard(2)}
                                    style={{
                                        position: "absolute",
                                        right: "18px",
                                        top: "10px",
                                        background: "#eee",
                                        border: "none",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                        borderRadius: "5px",
                                        backgroundColor: "var(--ifm-background-surface-color)",
                                    }}
                                >
                                    {copied2 ? "Copied!" : "Copy"}
                                </button>

                                {/* <BrowserOnly>
                                    {() => {
                                        const SyntaxHighlighter = require("react-syntax-highlighter").Prism;
                                        const dracula = require("react-syntax-highlighter/dist/esm/styles/prism").dracula;

                                        return (
                                            <SyntaxHighlighter customStyle={{ padding: '25px', height: '100%' }} language="tsx" style={dracula}>
                                                {cleanCode(dateTimePickerCode)}
                                            </SyntaxHighlighter>
                                        )
                                    }}
                                </BrowserOnly> */}
                                <SyntaxHighlighter customStyle={{ padding: '25px', height: '100%' }} language="tsx" style={dracula}>
                                    {cleanCode(dateTimePickerCode)}
                                </SyntaxHighlighter>
                            </div>

                            {!!datetimePickerValue ? (!!format ? moment(datetimePickerValue).format(format) : datetimePickerValue.toString()) : 'Select Value...'}

                            <FK6DateTimePicker
                                value={datetimePickerValue}
                                theme={theme?.id}
                                locale={locale?.id}
                                calendar={calendar?.id}
                                minDate={minDate}
                                maxDate={maxDate}
                                initialDate={initialDate}
                                format={!!format ? format : undefined}
                                placeholder={placeholder}
                                disabled={disabled}
                                readOnly={readOnly}
                                closeOnSelect={closeOnSelect}
                                calendarProps={{
                                    position: position?.id,
                                    initialView: initialView?.id,
                                    disablePortal,
                                    enableGoToToday,
                                    hideFooter,
                                    disableLocaleDigits,
                                    views: views.length > 0 ? views.map(v => v.id) : undefined,
                                    daysCalendarProps: {
                                        showWeeksNumber,
                                        firstDayOfWeek: firstDayOfWeek?.id,
                                        hideOutsideDays,
                                        weekends: weekends.length > 0 ? weekends.map(w => w.id) : undefined,
                                        disableWeekends,
                                        highlightDates: !!highlightDate ? [highlightDate] : undefined,
                                    },
                                    yearsCalendarProps: {
                                        range: yearsRange,
                                    },
                                    timePickerProps: {
                                        is12h,
                                        showScrollbars,
                                        selectOnScrolling,
                                        visibleColumns: visibleColumns.length > 0 ? visibleColumns.map(c => c.id) : undefined,
                                        disabledHours: disabledHours.length > 0 ? disabledHours : undefined,
                                        disabledMinutes: disabledMinutes.length > 0 ? disabledMinutes : undefined,
                                        disabledSeconds: disabledSeconds.length > 0 ? disabledSeconds : undefined,
                                        disabledMeridiem: disabledMeridiem.length > 0 ? disabledMeridiem : undefined,
                                    },
                                }}
                                onChange={setDatetimePickerValue}
                            />
                        </div>
                    </div>
                </div>

                <hr />


                <div className={styles.container} style={{ padding: '20px 100px' }}>
                    <div
                        className={styles.grid}
                        style={{
                            gridTemplateColumns: `repeat(${4}, 1fr)`,
                            gap: `${20}px`,
                        }}
                    >
                        <div className={styles["grid-item"]}>
                            {/* Calendar */}
                            <BrowserOnly>
                                {() => {
                                    const CalendarsEnum1: typeof CalendarsEnum = require("@fk6/react-datepicker/index.es.js").CalendarsEnum;
                                    return (
                                        <SelectField
                                            options={generateListFromEnum(CalendarsEnum1)}
                                            value={calendar}
                                            placeholder="Select Calendar..."
                                            label="Calendar:"
                                            onChange={value => setCalendar(value)}
                                        />
                                    )
                                }}
                            </BrowserOnly>
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Locale */}
                            <SelectField
                                options={moment.locales().map(l => ({ id: l, label: l }))}
                                value={locale}
                                placeholder="Select Language..."
                                label="Language:"
                                onChange={value => setLocale(value)}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Position */}
                            <BrowserOnly>
                                {() => {
                                    const CalendarPositionsEnum1: typeof CalendarPositionsEnum = require("@fk6/react-datepicker/index.es.js").CalendarPositionsEnum;
                                    return (
                                        <SelectField
                                            options={generateListFromEnum(CalendarPositionsEnum1)}
                                            value={position}
                                            placeholder="Select Position..."
                                            label="Position:"
                                            onChange={value => setPosition(value)}
                                        />
                                    )
                                }}
                            </BrowserOnly>
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Theme */}
                            <BrowserOnly>
                                {() => {
                                    const ThemesEnum1: typeof ThemesEnum = require("@fk6/react-datepicker/index.es.js").ThemesEnum;
                                    return (
                                        <SelectField
                                            options={generateListFromEnum(ThemesEnum1)}
                                            value={theme}
                                            placeholder="Select Theme..."
                                            label="Theme: "
                                            onChange={value => setTheme(value)}
                                        />
                                    )
                                }}
                            </BrowserOnly>
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Format */}
                            <TextField
                                label={"Date Format:"}
                                value={format}
                                placeholder="Enter date format..."
                                onChange={e => setFormat(e.target.value)}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Min Date */}
                            <label className={styles.label}>Min Date:</label>

                            <FK6DatePicker
                                className={styles.datepicker}
                                value={minDate}
                                locale="en"
                                placeholder="YYYY/MM/DD"
                                maxDate={maxDate}
                                fieldProps={{
                                    className: styles["datepicker-input-container"],
                                    htmlInputProps: {
                                        className: styles["datepicker-input"],
                                    },
                                }}
                                onChange={date => setMinDate(date)}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Max Date */}
                            <label className={styles.label}>Max Date:</label>
                            <FK6DatePicker
                                className={styles.datepicker}
                                value={maxDate}
                                locale="en"
                                placeholder="YYYY/MM/DD"
                                minDate={minDate}
                                fieldProps={{
                                    className: styles["datepicker-input-container"],
                                    htmlInputProps: {
                                        className: styles["datepicker-input"],
                                    },
                                }}
                                onChange={date => setMaxDate(date)}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Initial Date */}
                            <label className={styles.label}>Initial Date:</label>
                            <FK6DatePicker
                                className={styles.datepicker}
                                value={initialDate}
                                locale="en"
                                placeholder="YYYY/MM/DD"
                                initialDate={new Date(2024, 0, 1)}
                                fieldProps={{
                                    className: styles["datepicker-input-container"],
                                    htmlInputProps: {
                                        className: styles["datepicker-input"],
                                    },
                                }}
                                onChange={date => setInitialDate(date)}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Initial View */}
                            <BrowserOnly>
                                {() => {
                                    const CalendarViewsEnum1: typeof CalendarViewsEnum = require("@fk6/react-datepicker/index.es.js").CalendarViewsEnum;
                                    return (
                                        <SelectField
                                            options={generateListFromEnum(CalendarViewsEnum1)}
                                            value={initialView}
                                            placeholder="Select Initial View..."
                                            label="Initial View:"
                                            onChange={value => setInitialView(value)}
                                        />
                                    )
                                }}
                            </BrowserOnly>
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Views */}
                            <BrowserOnly>
                                {() => {
                                    const CalendarViewsEnum1: typeof CalendarViewsEnum = require("@fk6/react-datepicker/index.es.js").CalendarViewsEnum;
                                    return (
                                        <SelectField
                                            multiple
                                            options={generateListFromEnum(CalendarViewsEnum1)}
                                            value={views}
                                            placeholder="Select Views..."
                                            label="Views:"
                                            onChange={value => setViews(value)}
                                        />
                                    )
                                }}
                            </BrowserOnly>
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* First Day Of Week */}
                            <SelectField
                                options={weekDays}
                                label={"First Day Of Week:"}
                                value={firstDayOfWeek}
                                onChange={setFirstDayOfWeek}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Weekends */}
                            <SelectField
                                multiple
                                options={weekDays}
                                label={"Weekends:"}
                                value={weekends}
                                onChange={setWeekends}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Years Range */}
                            <TextField
                                type="number"
                                label={"Years Range:"}
                                value={yearsRange}
                                min={1}
                                max={52}
                                onChange={e => setYearsRange((!!e.target.value && +e.target.value > 0 && +e.target.value < 53) ? +e.target.value : 12)}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Highlight Date */}
                            <label className={styles.label}>Highlight Date:</label>
                            <FK6DatePicker
                                className={styles.datepicker}
                                value={highlightDate}
                                locale="en"
                                placeholder="YYYY/MM/DD"
                                fieldProps={{
                                    className: styles["datepicker-input-container"],
                                    htmlInputProps: {
                                        className: styles["datepicker-input"],
                                    },
                                }}
                                onChange={date => setHighlightDate(date)}
                            />
                        </div>

                        {/* const [disabledHours, setDisabledHours] = useState<number[]>([]);
    const [disabledMinutes, setDisabledMinutes] = useState<number[]>([]);
    const [disabledSeconds, setDisabledSeconds] = useState<number[]>([]);
    const [disabledMeridiem, setDisabledMeridiem] = useState<('AM' | 'PM')[]>([]); */}
                        <div className={styles["grid-item"]}>
                            {/* Visible Columns */}
                            <label className={styles.label}>Visible Columns (Time Picker):</label>
                            <SelectField
                                multiple
                                value={visibleColumns}
                                options={timeColumns}
                                onChange={setVisibleColumns}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Disabled Hours */}
                            <label className={styles.label}>Disabled Hours (Time Picker):</label>
                            <SelectField
                                multiple
                                value={disabledHours.map(i => ({ id: i, label: i }))}
                                options={Array.from({ length: 24 }).map((_, i) => ({ id: i, label: i }))}
                                onChange={value => setDisabledHours(value.map(v => v.id))}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Disabled Minutes */}
                            <label className={styles.label}>Disabled Minutes (Time Picker):</label>
                            <SelectField
                                multiple
                                value={disabledMinutes.map(i => ({ id: i, label: i }))}
                                options={Array.from({ length: 60 }).map((_, i) => ({ id: i, label: i }))}
                                onChange={value => setDisabledMinutes(value.map(v => v.id))}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Disabled Seconds */}
                            <label className={styles.label}>Disabled Seconds (Time Picker):</label>
                            <SelectField
                                multiple
                                value={disabledSeconds.map(i => ({ id: i, label: i }))}
                                options={Array.from({ length: 60 }).map((_, i) => ({ id: i, label: i }))}
                                onChange={value => setDisabledSeconds(value.map(v => v.id))}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Disabled Meridiem */}
                            <label className={styles.label}>Disabled Meridiem (Time Picker):</label>
                            <SelectField
                                multiple
                                value={disabledMeridiem.map(i => ({ id: i, label: i }))}
                                options={[{ id: "AM", label: "AM" }, { id: "PM", label: "PM" }]}
                                onChange={value => setDisabledMeridiem(value.map(v => v.id as ("AM" | "PM")))}
                            />
                        </div>

                        <div className={styles["grid-item"]}>
                            {/* Placeholder */}
                            <TextField
                                label={"Placeholder:"}
                                value={placeholder}
                                placeholder="Enter a text..."
                                onChange={e => setPlaceholder(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.container} style={{ padding: '20px 100px' }}>
                    <div
                        className={styles.grid}
                        style={{
                            gridTemplateColumns: `repeat(${4}, 1fr)`,
                            gap: `${20}px`,
                        }}
                    >
                        {switchesArr.map(item => (
                            <div key={item.key} className={styles["grid-item"]}>
                                <Checkbox
                                    checked={item.checked}
                                    label={item.label}
                                    onChange={item.onChange}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
}