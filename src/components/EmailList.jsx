import { Fragment, useState } from "react";
import { emails, coe } from "../data/data";
import EmailItem from "./EmailItem.jsx";
import ListHeader from "./ListHeader.jsx";

const EmailList = ({ selectedEmail, setSelectedEmail, setIsToggled }) => {
    const [selectedOption, setSelectedOption] = useState("TSC");


    const handleOptionChange = (option) => {
        setSelectedOption(option);
        if (option === "TSC") {
            setIsToggled(false);
            setSelectedEmail({
                id: 1,
                name: sortedEmails[0],
                type: "TSC"
            });
        } else if (option === "COE") {
            setIsToggled(false);
            setSelectedEmail({
                id: 1,
                name: sortedCoe[0],
                type: "COE"
            });
        }
    };

    const handleEmailItemClick = (id, name, type) => {
        setSelectedEmail({ id, name, type });
        setIsToggled(false);
    };

    const renderEmailItems = (emails, type) => {
        return emails.map((name, index) => (
            <div className={selectedEmail.name === name ? "active" : ""} key={type + index}
                 onClick={() => handleEmailItemClick(index + 1, name, type)}>
                <EmailItem>
                    <div className="container">
                        <p className={`list-text ${selectedEmail.name === name ? "num-active" : "number"}`}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                            <span>{name}</span>
                        </p>
                    </div>
                </EmailItem>
            </div>
        ));
    };

    const sortedEmails = (emails[0]?.name || [])
        .filter(item => item.type === "TSC")
        .map(item => item.name)
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

    const sortedCoe = (coe[0]?.name || [])
        .filter(item => item.type === "COE")
        .map(item => item.name)
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

    const emailItems = selectedOption === "TSC" ? renderEmailItems(sortedEmails, "TSC") : renderEmailItems(sortedCoe, "COE");

    return (
        <Fragment>
            <ListHeader selectedOption={selectedOption} onSelectedOption={handleOptionChange}
                        setSelectedEmail={setSelectedEmail}/>
            <div className="email-items">{emailItems}</div>
        </Fragment>
    );
};

export default EmailList;
