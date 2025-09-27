# 📅 Calendar Type

The calendar component supports both Hijri and Gregorian systems, allowing you to tailor the experience to cultural or regional needs.
- **Gregorian Calendar** is the default and most widely used internationally, ideal for general-purpose apps, scheduling tools, and global audiences.
- **Hijri Calendar** follows the Islamic lunar system, making it essential for religious observances, culturally specific applications, and users in regions where Hijri dates are standard.
Switching between calendar types ensures your date picker feels intuitive and relevant, whether you're building for business, education, or faith-based platforms.

---

## Gregorian Calendar

The Gregorian calendar is the default and most widely used calendar system globally. It’s based on a solar year and structured around 12 months, making it ideal for general-purpose applications like scheduling, planning, and international date handling.
When using the Gregorian calendar type, the datetime picker aligns with familiar conventions—week starts, leap years, and standard month lengths—ensuring clarity and consistency for users across regions. It supports full localization, so month and weekday names, formats, and numerals adapt to the user’s language and cultural settings while maintaining the Gregorian structure underneath.
Perfect for business tools, global platforms, and everyday apps, the Gregorian calendar type offers reliability, familiarity, and broad compatibility. It's the default calendar system for the **DatePicker**

---

## Hijri Calendar

The Hijri calendar, also known as the Islamic calendar, is a lunar system used primarily in Muslim-majority regions and for religious observances. When selected as the calendar type, the datetime picker adjusts its structure to reflect Hijri months and years—such as Muharram, Safar, and Ramadan—based on the lunar cycle.
This calendar type is ideal for applications that support Islamic events, prayer schedules, or culturally specific workflows. It maintains full compatibility with internationalization features, including localized digit formats, right-to-left layout support, and language-specific labels. By using the Hijri calendar, your app can offer a more authentic and respectful experience for users who rely on this system in daily life.

```tsx
<DatePicker calendar="hijri" />
```
