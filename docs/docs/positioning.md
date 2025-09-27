# 🎯 Positioning

<!-- Control exactly where the calendar popup appears for a smoother, more intuitive user experience. Whether you want it to open above, below, beside, or aligned with the input field, positioning options let you tailor the layout to fit your app’s flow. It adapts to screen space and scroll behavior, ensuring the picker stays accessible and visually consistent—no awkward overlaps or cut-offs. Perfect for responsive designs and polished UI interactions. -->

The calendar popup is designed for smart, responsive positioning that keeps it both accessible and visually consistent. You can control where it appears—above, below, beside, or aligned with the input field—ensuring it fits naturally into your layout. Whether you're working with compact forms or spacious dashboards, the popup adapts to screen space and avoids awkward overlaps.
Even better, it stays anchored in view while scrolling. This sticky behavior ensures users don’t lose access to the picker in long forms or scrollable containers, making interactions smooth and uninterrupted. Together, these features create a polished, user-friendly experience that feels intuitive across devices and layouts.

```tsx
<DateTimePicker calendarProps={{ position: 'top' }} />
<DateTimePicker calendarProps={{ position: 'top-right' }} />
<DateTimePicker calendarProps={{ position: 'right' }} />
<DateTimePicker calendarProps={{ position: 'bottom-right' }} />
<DateTimePicker calendarProps={{ position: 'bottom' }} />
<DateTimePicker calendarProps={{ position: 'bottom-left' }} />
<DateTimePicker calendarProps={{ position: 'left' }} />
<DateTimePicker calendarProps={{ position: 'top-left' }} />
<DateTimePicker calendarProps={{ position: 'start' }} />
<DateTimePicker calendarProps={{ position: 'top-start' }} />
<DateTimePicker calendarProps={{ position: 'bottom-start' }} />
<DateTimePicker calendarProps={{ position: 'end' }} />
<DateTimePicker calendarProps={{ position: 'top-end' }} />
<DateTimePicker calendarProps={{ position: 'bottom-end' }} />
```
