import { Fragment, useEffect, useState } from "react";

import Subject from "./Subject";

import PasswordReset from "./emails/PasswordReset";
import NoActionNeeded from "./emails/NoActionNeeded";
import AccountUnlock from "./emails/AccountUnlock";
import TempPassword from "./emails/TempPassword";
import HsdCreation from "./emails/HSDCreation";
import InquirySuppression from "./emails/InquirySuppression";
import OKTAUrl from "./emails/OKTAUrl";
import OriginUrl from "./emails/OriginUrl";
import BIQEnvSetup from "./emails/BIQEnvSetup";
import UATApiRequest from "./emails/UATApiRequest";
import SSHKeyRequirements from "./emails/SSHKeyRequirements";
import APIInfoRequired from "./emails/APIInforequest";

import CaseA from "./coe/CaseA";
import CaseB from "./coe/CaseB";
import CaseC from "./coe/CaseC";
import { FaSync  } from "react-icons/fa";

function capitalize(str) {
    // Check if the input string is empty or null
    if (!str) return str;

    // Convert the entire string to lowercase
    str = str.toLowerCase();

    // Capitalize the first letter and concatenate the rest of the string
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
}

const EmailDetails = ({ selectedEmail }) => {
    const [clientName, setClientName] = useState("");
    const [caseNumber, setCaseNumber] = useState("");
    const [tempPassword, setTempPassword] = useState("");
    const [hsd, setHsd] = useState("");
    const [userId, setUserId] = useState("");

    const resetInput = () => {
        setClientName("");
        setCaseNumber("");
        setHsd("");
        setUserId("");
        setTempPassword("");
    };

    // Reset input when a different template has been clicked
    useEffect(() => {
        resetInput();
    }, [selectedEmail]);


    useEffect(() => {
        const callback = (e) => {
            if (e.code === "Escape") {
                resetInput();
            }
        };
        document.addEventListener("keydown", callback);
        return () => document.removeEventListener("keydown", callback);
    }, []);

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
                            <button className="btn-reset" onClick={resetInput}><FaSync /></button>
                        </div>
                        <Subject caseNumber={caseNumber} selectedEmail={selectedEmail} />
                        {selectedEmail.name === "Password reset" &&
                            <PasswordReset  clientName={clientName} caseNumber={caseNumber}
                                           capitalize={capitalize}/>}
                        {selectedEmail.name === "Account not found" &&
                            <NoActionNeeded clientName={clientName} caseNumber={caseNumber}
                                            capitalize={capitalize}/>}
                        {selectedEmail.name === "Account locked" &&
                            <AccountUnlock clientName={clientName} caseNumber={caseNumber}
                                           capitalize={capitalize}/>}


                        {selectedEmail.name === "Temporary password" &&
                            <TempPassword tempPassword={tempPassword} clientName={clientName}
                                          caseNumber={caseNumber} capitalize={capitalize}/>}
                        {selectedEmail.name === "HSD creation" &&
                            <HsdCreation selectedEmail={selectedEmail} clientName={clientName}
                                         caseNumber={caseNumber}
                                         capitalize={capitalize}/>}
                        {selectedEmail.name === "Inquiry suppression request" &&
                            <InquirySuppression  clientName={clientName} caseNumber={caseNumber}
                                                capitalize={capitalize}/>}
                        {selectedEmail.name === "OKTA URL" &&
                            <OKTAUrl  clientName={clientName} caseNumber={caseNumber}
                                     capitalize={capitalize}/>}
                        {selectedEmail.name === "Origin URL" &&
                            <OriginUrl  clientName={clientName} caseNumber={caseNumber}
                                       capitalize={capitalize}/>}
                        {selectedEmail.name === "BIQ env setup" &&
                            <BIQEnvSetup  hsd={hsd} caseNumber={caseNumber}
                                         clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {selectedEmail.name === "UAT API account request" &&
                            <UATApiRequest hsd={hsd} caseNumber={caseNumber}
                                           clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {selectedEmail.name === "SSH Key requirements" &&
                            <SSHKeyRequirements  hsd={hsd} caseNumber={caseNumber}
                                                clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {selectedEmail.name === "API Info Required" &&
                            <APIInfoRequired  hsd={hsd} caseNumber={caseNumber}
                                             clientName={clientName} userId={userId} capitalize={capitalize}/>}

                        {/* --------------------------------------------------------------------------------------- */}

                        {selectedEmail.name === "Case A" &&
                            <CaseA  caseNumber={caseNumber}
                                   clientName={clientName} userId={userId} capitalize={capitalize}/>
                        }
                        {selectedEmail.name === "Case B" &&
                            <CaseB  caseNumber={caseNumber}
                                   clientName={clientName} userId={userId} capitalize={capitalize}/>}
                        {selectedEmail.name === "Case C" &&
                            <CaseC  caseNumber={caseNumber}
                                   clientName={clientName} userId={userId} capitalize={capitalize}/>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmailDetails;
