import React, { InputHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, error, ...props }: TextFieldProps) => {
    return (
        <div className={styles.textfield}>
            {label && <label className={styles["textfield-label"]}>{label}</label>}
            <input className={`${styles["textfield-input"]} ${error ? styles.error : ""}`} {...props} />
            {error && <span className={styles["textfield-error"]}>{error}</span>}
        </div>
    );
};

export default TextField;
