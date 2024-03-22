import styles from "./Switch.module.css";

function Switch({ isChecked, setIsChecked }) {

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.switch}>
            <input
                type="checkbox"
                id="toggle"
                className={styles.toggleInput}
                checked={isChecked}
                onChange={handleToggle}
            />
            <label htmlFor="toggle" className={styles.toggleLabel}>
                {!isChecked ? "COE":
                    "TSC"}
            </label>
        </div>
    );
}
export default Switch;
