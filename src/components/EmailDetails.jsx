import { Fragment, useEffect, useState } from "react";
import PasswordReset from "./emails/PasswordReset.jsx";
import Subject from "./Subject.jsx"; // Assuming setSubject is defined here
import NoActionNeeded from "./emails/NoActionNeeded.jsx";
import AccountUnlock from "./emails/AccountUnlock.jsx";
import TempPassword from "./emails/TempPassword.jsx";
import HsdCreation from "./emails/HSDCreation.jsx";
import InquirySuppression from "./emails/InquirySuppression.jsx";
import OKTAUrl from "./emails/OKTAUrl.jsx";
import OriginUrl from "./emails/OriginUrl.jsx";
import BIQEnvSetup from "./emails/BIQEnvSetup.jsx";
import CaseA from "./coe/CaseA.jsx";
import CaseB from "./coe/CaseB.jsx";
import CaseC from "./coe/CaseC.jsx";
import UATApiRequest from "./emails/UATApiRequest.jsx";
import SSHKeyRequirements from "./emails/SSHKeyRequirements.jsx";
import { FaUndo } from "react-icons/fa";

function capitalize(str) {
    // Check if the input string is empty or null
    if (!str) return str;

    // Capitalize the first letter and concatenate the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const EmailDetails = ({ selectedEmail }) => {
    const [clientName, setClientName] = useState("");
    const [caseNumber, setCaseNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [tempPassword, setTempPassword] = useState("");
    const [hsd, setHsd] = useState("");
    const [userId, setUserId] = useState("");

    const resetInput = () => {
        setClientName("");
        setCaseNumber("");
        setSubject("");
        setHsd("");
        setUserId("");
        setTempPassword("");
    }

    // Reset clientName and caseNumber when selectedEmail changes
    useEffect(() => {
        setClientName("");
        setCaseNumber("");
        setSubject("");
        setHsd("");
        setUserId("");
        setTempPassword("");
    }, [selectedEmail]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "clientName":
                setClientName(value);
                break;
            case "caseNumber":
                setCaseNumber(value);
                break;
            case "tempPassword":
                setTempPassword(value);
                break;
            case "hsd":
                setHsd(value);
                break;
            case "userId":
                setUserId(value);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            {selectedEmail && (
                <div>
                    <h2 className="title">{selectedEmail.name}</h2>
                    <div className="emailDetails">
                        <div className="input-header">
                            <input
                                type="text"
                                name="clientName"
                                value={clientName}
                                onChange={handleInputChange}
                                placeholder="Client's name"
                            />
                            <input
                                type="text"
                                name="caseNumber"
                                value={caseNumber}
                                onChange={handleInputChange}
                                placeholder="Case number"
                            />
                            {selectedEmail.name === "Temporary password" &&
                                <input
                                    type="text"
                                    name="tempPassword"
                                    value={tempPassword}
                                    onChange={handleInputChange}
                                    placeholder="Temporary password"
                                />
                            }
                            {selectedEmail.name === "BIQ env setup" &&
                                <Fragment>

                                    <input
                                        type="text"
                                        name="hsd"
                                        value={hsd}
                                        onChange={handleInputChange}
                                        placeholder="HDS name"
                                    />
                                    <input
                                        type="text"
                                        name="userId"
                                        value={userId}
                                        onChange={handleInputChange}
                                        placeholder="User ID"
                                    />
                                </Fragment>
                            }
                            <button className="btn-reset" onClick={resetInput}><FaUndo /></button>
                        </div>
                        <Subject caseNumber={caseNumber} selectedEmail={selectedEmail} subject={subject}/>

                        {selectedEmail.name === "Password reset" &&
                            <PasswordReset setSubject={setSubject} clientName={clientName} caseNumber={caseNumber}
                                           capitalize={capitalize}/>}
                        {selectedEmail.name === "No action needed" &&
                            <NoActionNeeded setSubject={setSubject} clientName={clientName} caseNumber={caseNumber}
                                            capitalize={capitalize}/>}
                        {selectedEmail.name === "Account locked" &&
                            <AccountUnlock setSubject={setSubject} clientName={clientName} caseNumber={caseNumber}
                                           capitalize={capitalize}/>}
                        {selectedEmail.name === "Temporary password" &&
                            <TempPassword tempPassword={tempPassword} setSubject={setSubject} clientName={clientName}
                                          caseNumber={caseNumber} capitalize={capitalize}/>}
                        {selectedEmail.name === "HSD creation" &&
                            <HsdCreation setSubject={setSubject} clientName={clientName} caseNumber={caseNumber}
                                         capitalize={capitalize}/>}
                        {selectedEmail.name === "Inquiry suppression request" &&
                            <InquirySuppression setSubject={setSubject} clientName={clientName} caseNumber={caseNumber}
                                                capitalize={capitalize}/>}
                        {selectedEmail.name === "OKTA URL" &&
                            <OKTAUrl setSubject={setSubject} clientName={clientName} caseNumber={caseNumber}
                                     capitalize={capitalize}/>}
                        {selectedEmail.name === "Origin URL" &&
                            <OriginUrl setSubject={setSubject} clientName={clientName} caseNumber={caseNumber}
                                       capitalize={capitalize}/>}
                        {selectedEmail.name === "BIQ env setup" &&
                            <BIQEnvSetup setSubject={setSubject} hsd={hsd} caseNumber={caseNumber}
                                         clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {selectedEmail.name === "UAT API account request" &&
                            <UATApiRequest setSubject={setSubject} hsd={hsd} caseNumber={caseNumber}
                                           clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {selectedEmail.name === "SSH Key requirements" &&
                            <SSHKeyRequirements setSubject={setSubject} hsd={hsd} caseNumber={caseNumber}
                                                clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {/* --------------------------------------------------------------------------------------- */}

                        {selectedEmail.name === "Case A" &&
                            <CaseA setSubject={setSubject} caseNumber={caseNumber}
                                         clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {selectedEmail.name === "Case B" &&
                            <CaseB setSubject={setSubject} caseNumber={caseNumber}
                                   clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {selectedEmail.name === "Case C" &&
                            <CaseC setSubject={setSubject} caseNumber={caseNumber}
                                   clientName={clientName} userId={userId} capitalize={capitalize}/>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmailDetails;
