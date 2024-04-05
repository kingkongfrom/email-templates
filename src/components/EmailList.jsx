import { Fragment, useState } from "react";
import { emails, coe } from "../data/data";
import EmailItem from "./EmailItem.jsx";
import ListHeader from "./ListHeader.jsx";

/**
 * Component representing the list of emails.
 * @param {Object} props - The component props.
 * @param {Object} props.selectedEmail - The selected email.
 * @param {Function} props.setSelectedEmail - Function to set the selected email.
 * @param {Function} props.setIsToggled - Function to set the toggle state between TSC and COE.
 * @returns {JSX.Element} - The rendered component.
 */
const EmailList = ({ selectedEmail, setSelectedEmail, setIsToggled }) => {
    // State to manage the selected option (TSC or COE)
    const [selectedOption, setSelectedOption] = useState("TSC"); // Initial selected option

    /**
     * Function to handle the change in selected option (TSC or COE).
     * @param {string} option - The selected option.
     */
    const handleOptionChange = (option) => {
        setSelectedOption(option); // Set the selected option
        // Set the selected email based on the chosen option
        if (option === "TSC") {
            setIsToggled(false); // Toggle the isToggled state to false
            setSelectedEmail({
                id: 1,
                name: sortedEmails[0], // Select the first email in the TSC list
                type: "TSC" // Set the type as TSC
            });
        } else if (option === "COE") {
            setIsToggled(false); // Toggle the isToggled state to false
            setSelectedEmail({
                id: 1,
                name: sortedCoe[0], // Select the first email in the COE list
                type: "COE" // Set the type as COE
            });
        }
    };

    // Sorting emails of type TSC
    const sortedEmails = emails[0].name
        .filter(item => item.type === "TSC") // Filter emails of type TSC
        .map(item => item.name) // Extract the names from each inner object
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })); // Sort the names alphabetically

    // Sorting emails of type COE
    const sortedCoe = coe[0].name
        .filter(item => item.type === "COE") // Filter emails of type COE
        .map(item => item.name) // Extract the names from each inner object
        .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })); // Sort the names alphabetically

    /**
     * Function to handle email item click.
     * @param {number} id - The ID of the email.
     * @param {string} name - The name of the email.
     * @param {string} type - The type of the email (TSC or COE).
     * @author Eduardo da Silva.
     */
    const handleEmailItemClick = (id, name, type) => {
        setSelectedEmail({ id, name, type }); // Set the selected email
        setIsToggled(false); // Toggle the isToggled state to false
    };

    // Rendering email items based on the selected option
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
