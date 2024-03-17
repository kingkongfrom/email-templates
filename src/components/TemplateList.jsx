import { Fragment, useState } from "react";
import { emails, coe } from "../data/data";
import EmailItem from "./EmailItem.jsx";
import ListHeader from "./ListHeader.jsx";

const TemplateList = ({ selectedEmail, setSelectedEmail }) => {
    const [isChecked, setIsChecked] = useState(false);

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
            <ListHeader isChecked={isChecked} setIsChecked={setIsChecked}/>
            {isChecked ?

                sortedCoe.map((name, index) => (
                    <div className={selectedEmail.name === name ? "active" : ""} key={index}
                         onClick={() => handleEmailItemClick(index + 1, name)}>
                        <EmailItem>
                            <div className="container">
                                <p className={`list-text ${selectedEmail.name === name ? "num-active" : "number"}`}>0{index + 1}
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
                                <p className={`list-text ${selectedEmail.name === name ? "num-active" : "number"}`}>0{index + 1}
                                    <span>{name}</span></p>
                            </div>
                        </EmailItem>
                    </div>
                ))
            }
        </Fragment>
    );
};

export default TemplateList;
