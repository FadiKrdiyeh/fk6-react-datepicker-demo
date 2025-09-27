# ⚙️ Years Calendar

| Prop              | Type                                                                                                                         | Default | Description                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `range`           | `number`                                                                                                                     | 16      | Specifies how many years should be shown in the year picker view.             |
| `disabledYears`   | `(Date \| Moment)[]`                                                                                                         | —       | Array of years to disable in the calendar.                                    |
| `renderYear`      | `(renderedValue: string, date: Date, props: HTMLAttributes<any>, state: `[`YearCellState`](#year-cell-state)`) => ReactNode` | —       | A function that returns a custom element for each year cell in the calendar.  |
| `disabledDatesFn` | `(date: Date) => boolean`                                                                                                    | —       | Function to disable dates dynamically.                                        |
| `onSelect`        | `(date: Date) => void`                                                                                                       | —       | Called when a user clicks a year; receives the clicked date as a Date object. |
