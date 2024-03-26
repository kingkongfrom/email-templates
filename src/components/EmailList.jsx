import { Fragment, useState } from "react";
import { emails, coe } from "../data/data";
import EmailItem from "./EmailItem.jsx";
import ListHeader from "./ListHeader.jsx";

const EmailList = ({ selectedEmail, setSelectedEmail, setIsToggled }) => {
    const [selectedOption, setSelectedOption] = useState("TSC"); // Initial selected option

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        // Set the selected email based on the chosen option
        if (option === "TSC") {
            setIsToggled(false)
            setSelectedEmail({
                id: 1,
                name: sortedEmails[0], // Select the first email in the TSC list
                type: "TSC"
            });
        } else if (option === "COE") {
            setIsToggled(false)

            setSelectedEmail({
                id: 1,
                name: sortedCoe[0], // Select the first email in the COE list
                type: "COE"
            });
        }
    };

    const sortedEmails = emails[0].name
        .map(item => item.name) // Extracting the names from each inner object
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })); // Sorting the names

    const sortedCoe = coe[0].name
        .map(item => item.name) // Extracting the names from each inner object
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })); // Sorting the names

    const handleEmailItemClick = (id, name, type) => {
        setSelectedEmail({ id, name, type });
        setIsToggled(false);
    };

    let emailItems = null;

    if (selectedOption === "TSC") {
        emailItems = sortedEmails.map((name, index) => (
            <div className={selectedEmail.name === name ? "active" : ""} key={index}
                 onClick={() => handleEmailItemClick(index + 1, name, "TSC")}>
                <EmailItem>
                    <div className="container">
                        <p className={`list-text ${selectedEmail.name === name ? "num-active" : "number"}`}>{index < 9 ? `0${index + 1}` : index + 1}
                            <span>{name}</span></p>
                    </div>
                </EmailItem>
            </div>
        ));
    } else if (selectedOption === "COE") {
        emailItems = sortedCoe.map((name, index) => (
            <div className={selectedEmail.name === name ? "active" : ""} key={index}
                 onClick={() => handleEmailItemClick(index + 1, name, "COE")}>
                <EmailItem>
                    <div className="container">
                        <p className={`list-text ${selectedEmail.name === name ? "num-active" : "number"}`}>{index < 9 ? `0${index + 1}` : index + 1}
                            <span>{name}</span></p>
                    </div>
                </EmailItem>
            </div>
        ));
    }

    return (
        <Fragment>
            <ListHeader selectedOption={selectedOption} onSelectedOption={handleOptionChange}
                        setSelectedEmail={setSelectedEmail}/>
            <div className="email-items">{emailItems}</div>
        </Fragment>
    );
};

export default EmailList;
