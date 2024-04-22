import { useEffect } from "react";
import { FaSync } from "react-icons/fa";


/**
 * Component for rendering input fields based on the selected email type.
 * @param {Object} props - The props object.
 * @param {Function} props.dispatch - The dispatch function.
 * @param {string} props.selectedEmail - The selected email type.
 * @param {string} props.clientName - The client's name.
 * @param {string} props.caseNumber - The case number.
 * @param {string} props.hsd - The HDS name.
 * @param {string} props.userId - The user ID.
 * @param {string} props.tempPassword - The temporary password.
 * @param {string} props.incidentNumber - The incident number.
 * @param {string} props.contactName - The contact name.
 * @param {string} props.companyName - The company name.
 * @param {string} props.emailAddress - The email address.
 * @param {string} props.phoneNumber - The phone number.
 * @param {string} props.shortDescription - The short description.
 * @returns {JSX.Element} The rendered input fields.
 * @description This component renders input fields based on the selected email type and manages their state.
 * @author Eduardo da Silva.
 *  */

const InputFields = ({
                         dispatch,
                         selectedEmail,
                         clientName,
                         caseNumber,
                         hsd,
                         userId,
                         tempPassword,
                         incidentNumber,
                         contactName,
                         companyName,
                         emailAddress,
                         phoneNumber,
                         shortDescription,
                         hsdName,
                     }) => {

    /**
     * Sets the value of an input field.
     * @param {Function} setter - The state setter function.
     * @param {string} value - The value to set.
     * @returns {void}
     * @description This function sets the value of an input field using its associated setter function.
     */
    const setInputValue = (setter, value) => {
        setter(value);
    };

    const inputFields = [
        {
            name: "clientName",
            value: clientName,
            setter: value => setInputValue(dispatch, { type: "setClientName", payload: value }),
            placeholder: "Client's name"
        },
        {
            name: "caseNumber",
            value: caseNumber,
            setter: value => setInputValue(dispatch, { type: "setCaseNumber", payload: value }),
            placeholder: "Case number",
            condition: selectedEmail.name !== "Ascend handover" && selectedEmail.name !== "Case has been escalated" && selectedEmail.name !== "Incident has been escalated"
        },
        {
            name: "tempPassword",
            value: tempPassword,
            setter: value => setInputValue(dispatch, { type: "setTempPassword", payload: value }),

            placeholder: "Temporary password",
            condition: selectedEmail.name === "Temporary password"
        },
        {
            name: "hsd",
            value: hsd,
            setter: value => setInputValue(dispatch, { type: "setHsd", payload: value }),
            placeholder: "HDS name",
            condition: selectedEmail.name === "BIQ env setup"
        },
        {
            name: "userId",
            value: userId,
            setter: value => setInputValue(dispatch, { type: "setUserId", payload: value }),
            placeholder: "User ID",
            condition: selectedEmail.name === "BIQ env setup"
        },
        /* COE input fields */
        {
            name: "incidentNumber",
            value: incidentNumber,
            setter: value => setInputValue(dispatch, { type: "setIncidentNumber", payload: value }),
            placeholder: "Incident number",
            condition: selectedEmail.name === "Ascend handover" || selectedEmail.name === "Case has been escalated" || selectedEmail.name === "Incident has been escalated"
        },
        {
            name: "contactName",
            value: contactName,
            setter: value => setInputValue(dispatch, { type: "setContactName", payload: value }),

            placeholder: "Contact name",
            condition: selectedEmail.name === "Ascend handover"
        },
        {
            name: "companyName",
            value: companyName,
            setter: value => setInputValue(dispatch, { type: "setCompanyName", payload: value }),

            placeholder: "Company name",
            condition: selectedEmail.name === "Ascend handover"
        },
        {
            name: "HSDContactInfo",
            value: hsdName,
            setter: value => setInputValue(dispatch, { type: "setHsdName", payload: value }),
            placeholder: "HSD Name",
            condition: selectedEmail.name === "HSD contact info",
        },
        {
            name: "emailAddress",
            value: emailAddress,
            setter: value => setInputValue(dispatch, { type: "setEmailAddress", payload: value }),
            placeholder: "Email address",
            condition: selectedEmail.name === "Ascend handover" || selectedEmail.name === "HSD contact info",
            className: "email-input"
        },
        {
            name: "phoneNumber",
            value: phoneNumber,
            setter: value => setInputValue(dispatch, { type: "setPhoneNumber", payload: value }),
            placeholder: "Phone number",
            condition: selectedEmail.name === "Ascend handover",
            className: "phone-number-input"
        },
        {
            name: "shortDescription",
            value: shortDescription,
            setter: value => setInputValue(dispatch, { type: "setShortDescription", payload: value }),
            placeholder: "Short description",
            condition: selectedEmail.name === "Ascend handover",
            className: "short-description-input"
        },
    ];

    /**
     * Resets all input fields to their default values.
     * @returns {void}
     * @description This function resets all input fields to their default values.
     */
    const resetInput = () => {
        inputFields.forEach(field => field.setter(""));
    };

    /**
     * Handles changes in input field values.
     * @param {Object} event - The input change event.
     * @returns {void}
     * @description This function handles changes in input field values and updates their corresponding state.
     */
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const field = inputFields.find(field => field.name === name);
        if (field) {
            field.setter(value);
        }
    };

    // Effect hook to reset input fields when selected email changes
    useEffect(() => {
        resetInput();
    }, [selectedEmail]);

    // Effect hook to reset input fields on Escape key press
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.code === "Escape") {
                resetInput();
            }
        };
        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey);
    }, []);

    return (
        <div className="input-header">
            {inputFields.map(field => (
                field.condition === undefined || field.condition ?
                    <input
                        key={field.name}
                        type="text"
                        name={field.name}
                        value={field.value}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        className={field.className}
                    /> : null
            ))}
            <button className="btn-reset" onClick={resetInput}><FaSync/></button>
        </div>
    );
};

export default InputFields;
