import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import { DatePicker, DateTimePicker } from "@fk6/react-datepicker";
import moment from 'moment';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";

import styles from './examples.module.css';
import "@fk6/react-datepicker/react-datepicker.css";

export default function DatepickerPlayground() {

    const [theme, setTheme] = useState('light');
    const [locale, setLocale] = useState('en');

    const code = `
() => <DatePicker placeholder="Pick a date" />
    `;

    const datePickerCode = <pre>{`
    <DatePicker
        value={datePickerValue}
        ${theme !== 'light' ? 'theme={theme}' : ''}
        locale={locale}
        onChange={setDatePickerValue}
    />
    `}</pre>

    return (
        <LiveProvider enableTypeScript code={code} scope={{ DatePicker }}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
    );
}