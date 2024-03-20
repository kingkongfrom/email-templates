import { Fragment, useEffect, useState } from "react";
import { emails, coe } from "../data/data";
import EmailItem from "./EmailItem.jsx";
import ListHeader from "./ListHeader.jsx";

const EmailList = ({ selectedEmail, setSelectedEmail }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState("COE"); // Initial selected option

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    // Flatten the emails array and sort alphabetically by name
    const sortedEmails = emails
        .flatMap(item => item.name)
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

    const sortedCoe = coe
        .flatMap(item => item.name)
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

    const handleEmailItemClick = (id, name) => {
        setSelectedEmail({ id, name });
    };

    return (
        <Fragment>
            <ListHeader isChecked={isChecked} setIsChecked={setIsChecked} selectedOption={selectedOption}
                        onSelectedOption={handleOptionChange}/>
            {isChecked ?
                sortedCoe.map((name, index) => (
                    <div className={selectedEmail.name === name ? "active" : ""} key={index}
                         onClick={() => handleEmailItemClick(index + 1, name)}>
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
                         onClick={() => handleEmailItemClick(index + 1, name)}>
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
