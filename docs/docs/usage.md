# 🚀 Usage

## Basic Examples

### Date Picker

```tsx
import React, { useState } from "react";
import { DatePicker } from "react-date-picker";
import "@fk6/react-datepicker/react-datepicker.css";

export default function App() {
  const [date, setDate] = useState<Date | Moment | null>(null);

  return (
    <div>
      <DatePicker value={date} onChange={setDate} />
    </div>
  );
}
```

---

### Datetime Picker

```tsx
import React, { useState } from "react";
import { DateTimePicker } from "react-date-picker";
import "@fk6/react-datepicker/react-datepicker.css";

export default function App() {
  const [date, setDate] = useState<Date | Moment | null>(null);

  return (
    <div>
      <DateTimePicker value={date} onChange={setDate} />
    </div>
  );
}
```

---

### Inline Mode

Render **Calendar** without field:

```tsx
import React, { useRef, useState } from "react";
import { Calendar } from "@fk6/react-datepicker";
import moment from "moment";

export default function App() {
  const [value, setValue] = useState(moment());
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Calendar mode="inline" value={value} onChange={setValue} />
    </div>
  );
}
```