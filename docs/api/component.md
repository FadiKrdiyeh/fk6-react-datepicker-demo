# ⚙️ Date & Date-Time Picker

| Prop              | Type                                                            | Default        | Description                                                                              |
| ----------------- | --------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------- |
| `value`           | `Date \| Moment \| null`                                        | `null`         | The currently selected date.                                                             |
| `defaultValue`    | `Date \| Moment \| null`                                        | `null`         | Uncontrolled selected date.                                                              |
| `onChange`        | `(date: Date \| null) => void`                                  | —              | Callback fired when a date is selected.                                                  |
| `minDate`         | `Date \| Moment`                                                | `"1937-03-14"` | The earliest date a user can select. Dates before this are disabled.                     |
| `maxDate`         | `Date \| Moment`                                                | `"2077-10-17"` | The latest date a user can select. Dates after this are disabled.                        |
| `disabledDates`   | `(Date \| Moment)[]`                                            | —              | Array of Date objects that should be disabled in the calendar.                           |
| `disabledDatesFn` | `(date: Date) => boolean`                                       | —              | Function to disable dates dynamically.                                                   |
| `locale`          | `string`                                                        | `"en"`         | Moment.js locale (e.g. `"ar"`, `"ar-sa"`, `"en-gb"`).                                    |
| `format`          | `string`                                                        | `"YYYY/MM/DD"` | Specifies the format pattern used to display and interpret dates.                        |
| `calendar`        | `gregorian` \| `hijri`                                          | `"gregorian"`  | Specifies the calendar system used for date calculations and display.                    |
| `anchorEl`        | `HTMLElement \| null`                                           | `null`         | When in popover mode, the element to anchor the calendar to.                             |
| `closeOnSelect`   | `boolean`                                                       | `true`         | Determines whether the calendar should close immediately after a date is selected.       |
| `readOnly`        | `boolean`                                                       | `false`        | Prevents manual input/editing but still allows interaction (e.g. calendar popover).      |
| `disabled`        | `boolean`                                                       | `false`        | Fully disables the component—no input, no interaction, and typically styled as inactive. |
| `theme`           | `light` \| `dark`                                               | `light`        | Sets the calendar's color scheme to either light or dark mode.                           |
| `renderInput`     | `(props: `[`DateFieldExtraProps`](#field-props)`) => ReactNode` | —              | A function that receives input props and returns a custom input component.               |
| `renderCalendar`  | `(props: `[`CalendarProps`](calendar)`) => ReactNode`    | —              | A function that receives calendar props and returns a custom calendar layout.            |
| `onOpenChange`    | `(open: boolean) => void`                                       | —              | Called with a boolean value whenever the calendar's visibility changes.                  |
| `calendarProps`   | [`CalendarProps`](calendar)                                     | —              | An object containing props that customize the rendering and behavior of the calendar.    |
| `fieldProps`      | [`FieldProps`](#field-props)                                    | —              | An object containing props that customize the rendering and behavior of the date field.  |

---
