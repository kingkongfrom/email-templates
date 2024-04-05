import styles from "./SegmentedControl.module.css";

/**
 * Component for rendering a segmented control.
 * @param {Object} props - The props object.
 * @param {string} props.selectedOption - The currently selected option.
 * @param {Function} props.onSelectedOption - The function to call when an option is selected.
 * @returns {JSX.Element} The rendered segmented control.
 * @description This component renders a segmented control with two options: TSC and COE.
 * @author Eduardo da Silva
 */
function SegmentedControl({ selectedOption, onSelectedOption }) {
    /**
     * Handles the change in selected option.
     * @param {string} option - The selected option.
     * @returns {void}
     * @description This function is called when an option is selected and triggers the onSelectedOption function.
     */
    const handleOptionChange = (option) => {
        onSelectedOption(option);
    };

    return (
        <div className={styles.segmentedControl}>

            {/* TSC Option */}
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

            {/* COE Option */}
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
