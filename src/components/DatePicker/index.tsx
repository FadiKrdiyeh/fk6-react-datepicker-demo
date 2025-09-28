import React from "react";

import BrowserOnly from "@docusaurus/BrowserOnly";
import { DatePickerProps } from "@fk6/react-datepicker";

export default function FK6DatePicker(props: DatePickerProps) {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const FK6DatePicker1 = require("@fk6/react-datepicker/index.es.js").DatePicker;

                return (<FK6DatePicker1 {...props} />);
            }}
        </BrowserOnly>
    );
};