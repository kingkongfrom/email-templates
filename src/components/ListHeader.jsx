import SegmentedControl from "./ui/SegmentedControl.jsx";

const ListHeader = ({ selectedOption, onSelectedOption }) => {

    return (
        <div className="list-header">
            <div className="left">
                <p className="list-header-title">{selectedOption === "COE" ? "COE Email Handling" : "TSC Email Handling"}</p>
            </div>
            <div className="right">
                <SegmentedControl selectedOption={selectedOption} onSelectedOption={onSelectedOption}/>
            </div>
        </div>
    );
};

export default ListHeader;
