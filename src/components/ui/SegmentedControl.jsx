import styles from "./SegmentedControl.module.css";

function SegmentedControl({ selectedOption, onSelectedOption}) {
    const handleOptionChange = (option) => {
        onSelectedOption(option);
    };

    return (
        <div className={styles.segmentedControl}>

            <input
                type="radio"
                id="tscOption"
                className={styles.segmentedControlInput}
                value="TSC"
                checked={selectedOption === "TSC"}
                onChange={() => handleOptionChange("TSC")}
            />
            <label htmlFor="tscOption" className={styles.segmentedControlLabel}>
                TSC
            </label>
            <input
                type="radio"
                id="coeOption"
                className={styles.segmentedControlInput}
                value="COE"
                checked={selectedOption === "COE"}
                onChange={() => handleOptionChange("COE")}
            />
            <label htmlFor="coeOption" className={styles.segmentedControlLabel}>
                COE
            </label>

        </div>
    );
}

export default SegmentedControl;
