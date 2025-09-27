# 🎨 Theming

Easily match your app’s style with built-in light and dark mode support. For deeper customization, override CSS variables to fine-tune colors, spacing, and typography—giving you full control over the look and feel.

## Light & Dark Mode Support
The datetime picker naturally blends into light-themed applications with clean, bright styling. It uses soft shadows, subtle borders, and high-contrast text to ensure readability and visual harmony. Whether your app is minimalist or vibrant, light mode feels crisp and intuitive right out of the box.

```tsx
<DatePicker theme="light" />
<DatePicker theme="dark" />
```

---

## Overriding CSS Variables

CSS Variable Overrides
For full design control, you can override built-in CSS variables to customize colors, spacing, typography, and more. This allows you to fine-tune the picker’s appearance without rewriting styles or breaking functionality. Whether you're aligning with brand guidelines or experimenting with unique layouts, CSS variables make theming flexible and developer-friendly.

```css
:root {
  --fkdp-primary: #4caf50;
  --fkdp-secondary: #977e7e;
  --fkdp-highlight: #5da064cd;
  --fkdp-text: #000000ff;
  --fkdp-light-text: #c6c6c6ff;

  /* DateField */
  --fkdp-field-bg: #c2e2d0ff;
  --fkdp-field-color: #222;
  --fkdp-field-icon-color: #222;

  /* Calendar */
  --fkdp-calendar-bg: #c2e2d0ff;
  --fkdp-calendar-highlighted-bg: #459588cd;
  --fkdp-calendar-holiday-bg: #5a3434ff;
}
```
