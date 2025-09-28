import React from "react";

import BrowserOnly from "@docusaurus/BrowserOnly";
import { DateTimePickerProps } from "@fk6/react-datepicker";

import "@fk6/react-datepicker/react-datepicker.css";

export default function FK6DateTimePicker(props: DateTimePickerProps) {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const FK6DateTimePicker1 = require("@fk6/react-datepicker/index.es.js").DateTimePicker;

                return (
                    <FK6DateTimePicker1 {...props} />
                )
            }}
        </BrowserOnly>
    );
};