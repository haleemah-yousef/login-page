
import styles from "./Button.module.css"

type ButtonProps = {
    text: string;               // The text shown on the button
    onClick: () => void;        // The function to run when the button is clicked
    type?: "button" | "submit"; // Optional: HTML button type
};

export function Button({ text, onClick, type = "button" }: ButtonProps) {
    return (
        <button 
        type={type} 
        onClick={onClick}
        className={styles.button}
        >
        {text}
        </button>
    );
}