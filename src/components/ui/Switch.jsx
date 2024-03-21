import styles from "./Switch.module.css";
import { Fragment } from "react";
import { FaRightLong } from "react-icons/fa6";

function Switch({isChecked, setIsChecked}) {

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
                {!isChecked ? <Fragment>COE <FaRightLong className="arrow"/></Fragment> : <Fragment>TSC <FaRightLong className="arrow"/></Fragment>}
            </label>
        </div>
    );
}

export default Switch;
