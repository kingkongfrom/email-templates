import { useEffect } from "react";
import { FaSync } from "react-icons/fa";

const InputFields = ({
                         clientName,
                         setClientName,
                         selectedEmail,
                         caseNumber,
                         setCaseNumber,
                         hsd,
                         setHsd,
                         userId,
                         setUserId,
                         setTempPassword,
                         tempPassword,
                         incidentNumber,
                         setIncidentNumber,
                         contactName,
                         setContactName,
                         companyName,
                         setCompanyName,
                         emailAddress,
                         setEmailAddress,
                         phoneNumber,
                         setPhoneNumber,
                         shortDescription,
                         setShortDescription,
                     }) => {
    const inputFields = [
        {
            name: "clientName",
            value: clientName,
            setter: setClientName,
            placeholder: "Client's name"
        },
        {
            name: "caseNumber",
            value: caseNumber,
            setter: setCaseNumber,
            placeholder: "Case number",
            condition: selectedEmail.name !== "Ascend handover" && selectedEmail.name !== "Case has been escalated"
        },
        {
            name: "tempPassword",
            value: tempPassword,
            setter: setTempPassword,
            placeholder: "Temporary password",
            condition: selectedEmail.name === "Temporary password"
        },
        {
            name: "hsd",
            value: hsd,
            setter: setHsd,
            placeholder: "HDS name",
            condition: selectedEmail.name === "BIQ env setup"
        },
        {
            name: "userId",
            value: userId,
            setter: setUserId,
            placeholder: "User ID",
            condition: selectedEmail.name === "BIQ env setup"
        },
        /* COE input fields */
        {
            name: "incidentNumber",
            value: incidentNumber,
            setter: setIncidentNumber,
            placeholder: "Incident number",
            condition: selectedEmail.name === "Ascend handover" || selectedEmail.name === "Case has been escalated"
        },
        {
            name: "contactName",
            value: contactName,
            setter: setContactName,
            placeholder: "Contact name",
            condition: selectedEmail.name === "Ascend handover"
        },
        {
            name: "companyName",
            value: companyName,
            setter: setCompanyName,
            placeholder: "Company name",
            condition: selectedEmail.name === "Ascend handover"
        },
        {
            name: "emailAddress",
            value: emailAddress,
            setter: setEmailAddress,
            placeholder: "Email address",
            condition: selectedEmail.name === "Ascend handover",
            className: "email-input"
        },
        {
            name: "phoneNumber",
            value: phoneNumber,
            setter: setPhoneNumber,
            placeholder: "Phone number",
            condition: selectedEmail.name === "Ascend handover",
            className: "phone-number-input"
        },
        {
            name: "shortDescription",
            value: shortDescription,
            setter: setShortDescription,
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
