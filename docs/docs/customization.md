# 🧩 Customization

You can customize how individual cells are rendered in the date and time picker using render props like `renderDay`, `renderMonth`, `renderYear` or `renderTimeItem` and more. Each render function receives useful context including the formatted renderedValue, the associated date, a props object containing default HTML attributes like className, style, and event handlers, and a state object with metadata such as selected, disabled, focused, etc... This allows you to return custom JSX while preserving or extending the default behavior and styling—perfect for adding icons, conditional formatting, tooltips, or fully personalized UI elements, making it easy to tailor the picker to your design needs. There's an example for customizing days, months, years, time cells.

---

## Customize Date Field

Customize the look and feel of the input field with full control. The renderDateField prop lets you override the default date input rendering, so you can inject your own components, styles, or behavior. Whether you're integrating with a design system or adding advanced UI logic, this prop makes it easy to match your picker to your app’s unique vibe. Just pass a function that returns your custom field—simple, powerful, and flexible.

```tsx
<DatePicker
  renderInput={(dateFieldProps) => (
    <MyCustomInput
      readOnly
      ref={dateFieldProps.ref}
      value={dateFieldProps.value}
      onClick={dateFieldProps.onOpenRequest}
    />
  )}
/>
```

---

## Customize Day Cells

Take full control of how each day is rendered in the calendar. With customizable day cells, you can highlight special dates, add icons, tooltips, or even embed interactive elements like buttons or badges. Whether you're marking holidays, events, or availability, this feature lets you tailor the calendar to your app’s unique needs. Just pass a custom render function and make each day count—literally.

```tsx
<DatePicker
  calendarProps={{
    daysCalendarProps: {
      renderDay: (renderedValue, date, props, state) => (
        <div {...props}>
          {state.selected ? "#" : "*"}
          {renderedValue}
        </div>
      ),
    },
  }}
/>
```

---

## Customize Month Cells

Design your calendar with personality and purpose. With customizable month cells, you can modify how each month is displayed—perfect for highlighting fiscal quarters, seasonal themes, or special periods like school terms or promotional cycles. Inject custom styles, labels, icons, or even interactive elements to make your calendar truly dynamic. Just plug in your render function and shape the calendar to match your app’s rhythm.

```tsx
<DatePicker
  calendarProps={{
    monthsCalendarProps: {
      renderMonth: (renderedValue, date, props, state) => (
        <div {...props}>
          {state.selected ? "# " : "* "}
          {renderedValue}
          {state.selected ? " #" : " *"}
        </div>
      ),
    },
  }}
/>
```

---

## Customize Year Cells

Make your calendar truly yours by customizing how each year is displayed. Whether you're emphasizing leap years, fiscal cycles, historical milestones, or future plans, the ability to tailor year cells gives you the flexibility to highlight what matters most. Inject custom styles, labels, icons, or interactive elements—just pass a render function and transform the year view into a meaningful, branded experience.

```tsx
<DatePicker
  calendarProps={{
    yearsCalendarProps: {
      renderYear: (renderedValue, date, props, state) => (
        <div {...props}>
          {state.selected ? ". " : "- "}
          {renderedValue}
          {state.selected ? " ." : " -"}
        </div>
      ),
    },
  }}
/>
```

---

## Customize Time Cells

The `renderTimeItem` prop gives you full design control over how individual time items—hours, minutes, seconds, and meridiem—are displayed in the **DateTimePicker** component. By passing a custom render function, you can style each unit to match your app’s visual identity, from typography and spacing to hover effects and selected states. This feature is exclusive to the DateTimePicker, making it ideal for crafting a polished, cohesive time selection experience that feels native to your UI.


```tsx
<DateTimePicker
  calendarProps={{
    timePickerProps: {
      visibleColumns: ["hours"],
      renderTimeItem: (renderedValue, date, props, state) => (
        <div {...props}>{renderedValue}:00</div>
      ),
    },
  }}
/>
```

---

## Customize Week Numbers

The `renderWeekNumbers` prop allows you to customize the visual rendering of week numbers in the calendar. It only takes effect when the `showWeekNumbers` prop is set to `true`. Once enabled, you can pass a render function to style week number cells with your own layout, colors, or components—making them feel like a natural part of your calendar design.

```tsx
<DatePicker
  calendarProps={{
    daysCalendarProps: {
      showWeeksNumber: true,
      renderWeekNumber: (renderedValue, weekNumber) => (
        <div>#{renderedValue}</div>
      ),
    },
  }}
/>
```

---

## Customize Go To Today Button

The `renderGoToTodayButton` prop lets you customize the appearance of the "Go to Today" button in the calendar. It only takes effect when `enableGoToToday` is set to `true`. Once enabled, you can pass a render function to style the button with your own layout, colors, icons, or text—making it feel native to your app’s design while keeping the functionality intact.


```tsx
<DatePicker
  calendarProps={{
      enableGoToToday: true,
      renderGoToToday: (onClick) => (
        <button onClick={onClick}>Today</button>
      ),
  }}
/>
```

---

## Customize OK Button

The `renderOkButton` prop allows you to fully customize the appearance of the OK button in the datetime picker. By passing a render function, you can style the button to match your app’s design system—adjusting layout, colors, typography, or even replacing it with a custom component. This gives you complete visual control while preserving the button’s core functionality.


```tsx
<DateTimePicker
  calendarProps={{
      renderConfirmBtn: (onClick) => (
        <button onClick={onClick}>Okay!</button>
      ),
  }}
/>
```

---
