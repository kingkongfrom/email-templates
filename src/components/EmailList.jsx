import { Fragment, useState } from "react";
import { emails, coe } from "../data/data";
import EmailItem from "./EmailItem.jsx";
import ListHeader from "./ListHeader.jsx";

const EmailList = ({ selectedEmail, setSelectedEmail }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState("COE"); // Initial selected option

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const sortedEmails = emails[0].name
        .map(item => item.name) // Extracting the names from each inner object
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })); // Sorting the names

    const sortedCoe = coe[0].name
        .map(item => item.name) // Extracting the names from each inner object
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })); // Sorting the names


    const handleEmailItemClick = (id, name, type) => {
        setSelectedEmail({ id, name, type });
    };

    return (
        <Fragment>
            <ListHeader isChecked={isChecked} setIsChecked={setIsChecked} selectedOption={selectedOption}
                        onSelectedOption={handleOptionChange}/>
            {isChecked ?
                sortedCoe.map((name, index) => (
                    <div className={selectedEmail.name === name ? "active" : ""} key={index}
                         onClick={() => handleEmailItemClick(index + 1, name, "COE")}>
                        <EmailItem>
                            <div className="container">
                                <p className={`list-text ${selectedEmail.name === name ? "num-active" : "number"}`}>{index < 9 ? `0${index + 1}` : index + 1}
                                    <span>{name}</span></p>
                            </div>
                        </EmailItem>
                    </div>
                ))
                :
                sortedEmails.map((name, index) => (
                    <div className={selectedEmail.name === name ? "active" : ""} key={index}
                         onClick={() => handleEmailItemClick(index + 1, name, "TSC")}>
                        <EmailItem>
                            <div className="container">
                                <p className={`list-text ${selectedEmail.name === name ? "num-active" : "number"}`}>{index < 9 ? `0${index + 1}` : index + 1}
                                    <span>{name}</span></p>
                            </div>
                        </EmailItem>
                    </div>
                ))
            }
        </Fragment>
    );
};

export default EmailList;
