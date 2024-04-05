import SegmentedControl from "./ui/SegmentedControl.jsx";

/**
 * ListHeader component representing the header of the email list.
 * @param {Object} props - The component props.
 * @param {string} props.selectedOption - The currently selected option (COE or TSC).
 * @param {Function} props.onSelectedOption - The function to handle option change.
 * @returns {JSX.Element} - The rendered component.
 * @author Eduardo da Silva.
 */
const ListHeader = ({ selectedOption, onSelectedOption }) => {
    return (
        <div className="list-header">
            <div className="left">
                {/* Display the title based on the selected option */}
                <p className="list-header-title">{selectedOption === "COE" ? "COE Email Handling" : "TSC Email Handling"}</p>
            </div>
            <div className="right">
                {/* Render SegmentedControl component */}
                <SegmentedControl selectedOption={selectedOption} onSelectedOption={onSelectedOption}/>
            </div>
        </div>
    );
};


export default ListHeader;
