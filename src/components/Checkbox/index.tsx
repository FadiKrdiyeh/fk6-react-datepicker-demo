import React from "react";

import styles from "./styles.module.css";

interface CheckboxProps {
    label?: string;
    checked: boolean;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, checked, disabled = false, onChange }: CheckboxProps) {
    return (
        <label className={`${styles["fk-checkbox"]} ${disabled ? styles.disabled : ""}`}>
            <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className={styles.checkmark} />
            {label && <span className={styles["label-text"]}>{label}</span>}
        </label>
    );
};
