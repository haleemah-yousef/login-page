import React from "react";
import styles from "./Input.module.css";

type InputProps = {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
};

export function Input({ label, value, onChange, type = "text" }: InputProps) {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type={type}
                value={value}
                onChange={onChange}
                className={styles.input}
            />
        </div>
    );
}
