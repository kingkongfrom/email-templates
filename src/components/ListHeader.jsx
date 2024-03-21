import Switch from "./ui/Switch.jsx";

const ListHeader = ({ isChecked, setIsChecked }) => {

    return (
        <div className="list-header">
            <div className="left">
                <p className="list-header-title">{isChecked ? "COE Email Handling" : "TSC Email Handling"}</p>
            </div>
            <div className="right">
                <Switch isChecked={isChecked} setIsChecked={setIsChecked}/>
            </div>
        </div>
    );
};
export default ListHeader;
