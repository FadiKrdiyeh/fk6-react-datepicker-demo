# ⚙️ Months Calendar

| Prop              | Type                                                                                                                           | Default | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------ |
| `disabledMonths`  | `(Date \| Moment)[]`                                                                                                           | —       | Array of objects specifying which months to disable.                           |
| `disabledYears`   | `(Date \| Moment)[]`                                                                                                           | —       | Array of years to disable in the calendar.                                     |
| `renderMonth`     | `(renderedValue: string, date: Date, props: HTMLAttributes<any>, state: `[`MonthCellState`](#month-cell-state)`) => ReactNode` | —       | A function that returns a custom element for each month cell in the calendar.  |
| `disabledDatesFn` | `(date: Date) => boolean`                                                                                                      | —       | Function to disable dates dynamically.                                         |
| `onSelect`        | `(date: Date) => void`                                                                                                         | —       | Called when a user clicks a month; receives the clicked date as a Date object. |
