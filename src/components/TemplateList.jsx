import React from 'react';
import { emails } from "../data/data";
import EmailItem from "./EmailItem.jsx";

const TemplateList = ({ selectedEmail, setSelectedEmail }) => {
    // Flatten the emails array and sort alphabetically by name
    const sortedEmails = emails.flatMap(item => item.name).sort((a, b) => {
        // Ensure case-insensitive sorting
        const nameA = a.toLowerCase();
        const nameB = b.toLowerCase();

        // Compare names alphabetically
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    const handleEmailItemClick = (id, name) => {
        setSelectedEmail({ id, name }); // Set the selected email to the newly clicked email
    };

    return (
        <div className="">
            <div className='list-header'>
                <p className="list-header-title">TSC Email Handling</p>
            </div>
            {sortedEmails.map((name, index) => (
                <div className="template-list" key={index} onClick={() => handleEmailItemClick(index + 1, name)}>
                    <EmailItem className={selectedEmail.name === name ? 'active' : ''}>
                        <div className="container">
                            <p className="list-text"><span className={selectedEmail.name === name ? "num-active" : "number"}>0{index + 1}</span>  <span>{name}</span></p>
                        </div>
                    </EmailItem>
                </div>
            ))}
        </div>
    );
};

export default TemplateList;
