import { useEffect } from "react";
import { FaSync } from "react-icons/fa";

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
                     }) => {

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
            name: "emailAddress",
            value: emailAddress,
            setter: value => setInputValue(dispatch, { type: "setEmailAddress", payload: value }),
            placeholder: "Email address",
            condition: selectedEmail.name === "Ascend handover",
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

    const resetInput = () => {
        inputFields.forEach(field => field.setter(""));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const field = inputFields.find(field => field.name === name);
        if (field) {
            field.setter(value);
        }
    };

    useEffect(() => {
        resetInput();
    }, [selectedEmail]);

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
