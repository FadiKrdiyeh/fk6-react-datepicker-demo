import React, { useState, useRef, useEffect, SyntheticEvent, ReactNode, useMemo, JSX } from "react";

import styles from "./styles.module.css";

// Base props shared by both modes
// interface BaseSelectProps<T> {
//     options: T[];
//     placeholder?: string;
//     idProp?: keyof T;
//     labelProp?: keyof T;
//     label?: ReactNode;
// };

// // Single select props
// interface SingleSelectProps<T> extends BaseSelectProps<T> {
//     multiple?: false;
//     value: T | null;
//     onChange: (value: T | null) => void;
// };

// // Multi select props
// interface MultiSelectProps<T> extends BaseSelectProps<T> {
//     multiple: true;
//     value: T[];
//     onChange: (value: T[]) => void;
// };

// // Union type – depending on `multiple`
// type SelectProps<T> = SingleSelectProps<T> | MultiSelectProps<T>;


interface SelectFieldProps<T, IsMultiple> {
    options: T[];
    placeholder?: string;
    // value?: T | T[] | null;
    value?: (IsMultiple extends true ? T[] : (T | null));
    idProp?: keyof T;
    labelProp?: keyof T;
    label?: ReactNode;
    multiple?: IsMultiple;
    onChange?: (value: (IsMultiple extends true ? T[] : (T | null))) => void;
}

// // ---- Overloads ----
// function SelectField<T>(props: SelectFieldProps<T, false>): JSX.Element;

// function SelectField<T>(props: SelectFieldProps<T, true>): JSX.Element;

function SelectField<T extends { [key: string | number]: string | number }, IsMultiple>({ options, value, placeholder = "Select...", idProp = 'id', labelProp = 'label', label, multiple, onChange }: SelectFieldProps<T, IsMultiple>) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleSelect = (option: T) => {
        if (multiple) {
            const val = value as T[];
            if (!!val.find(i => i[idProp] === option[idProp]))
                onChange?.(val.filter(i => i[idProp] !== option[idProp]) as any);
            else
                onChange?.([...val, option] as any);

        } else {
            setIsOpen(false);
            onChange?.(option as any);
        }
    };

    const handleClear = (e: SyntheticEvent) => {
        e.stopPropagation();
        onChange?.(multiple ? [] : null as any);
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const renderValue = useMemo(() => {
        if (multiple)
            if ((value as T[]).length > 0)
                return (value as T[]).length > 1 ? `${value.length} Selected` : (value as T[])[0][labelProp];
            else
                return <span className={styles.placeholder}>{placeholder}</span>;
        else
            if (!!value)
                return (value as T)[labelProp];
            else
                return <span className={styles.placeholder}>{placeholder}</span>;
    }, [value]);

    return (
        <div className={styles["select-field"]} ref={dropdownRef}>
            {!!label && (
                <label className={styles["select-field-label"]}>{label}</label>
            )}
            <button className={styles["select-field-toggle"]} onClick={toggleDropdown}>
                {renderValue}
                {(multiple ? (value as T[]).length > 0 : !!value) && (
                    <span className={styles.clear} onClick={handleClear}>
                        x
                    </span>
                )}
                <span className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`} />
            </button>
            {isOpen && (
                <ul className={styles["select-field-menu"]}>
                    {options.map(option => (
                        <li
                            key={option[idProp]}
                            className={`${styles["select-field-item"]} ${(!!value && (multiple ? (value as T[]).find(i => i[idProp] === option[idProp]) : (value as T)[idProp] === option[idProp])) ? styles.selected : ""}`}
                            onClick={() => handleSelect(option)}
                        >
                            {typeof option === 'string' ? option : option[labelProp]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectField;
