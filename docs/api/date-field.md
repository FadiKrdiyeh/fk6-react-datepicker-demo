# ⚙️ Date Field

| Prop            | Type                                          | Default        | Description                                                                                                                   |
| --------------- | --------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `ref`           | `React.Ref`                                   | —              | Provides direct access to the date input field, enabling actions like focusing or reading the selected date programmatically. |
| `value`         | `Date \| Moment \| null`                      | `null`         | The currently selected date.                                                                                                  |
| `defaultValue`  | `Date \| Moment \| null`                      | `null`         | Uncontrolled selected date.                                                                                                   |
| `format`        | `string`                                      | `"YYYY/MM/DD"` | Specifies the format pattern used to display and interpret dates.                                                             |
| `clearable`     | `boolean`                                     | `true`         | Enables a UI control to clear the selected date, resetting the input.                                                         |
| `showIcon`      | `boolean`                                     | `true`         | Toggles visibility of the calendar icon in the calendar input.                                                                |
| `readOnly`      | `boolean`                                     | —              | Prevents manual input/editing but still allows interaction (e.g. calendar popover).                                           |
| `disabled`      | `boolean`                                     | —              | Fully disables the component—no input, no interaction, and typically styled as inactive.                                      |
| `renderIcon`    | `(onClick: () => void) => ReactNode`          | —              | A function that returns a custom calendar icon element, replacing the default icon.                                           |
| `onChange`      | `(date: Date \|null) => void`                 | —              | Called when the selected date changes. Receives the new value.                                                                |
| `onInputChange` | `(date: Date \|null) => void`                 | —              | Called whenever the input value changes. Receives the raw string entered.                                                     |
| `onOpenRequest` | `(e: HTMLElement \| boolean \| null) => void` | —              | Called when the calendar or popover requests to open. Useful for controlled components.                                       |
