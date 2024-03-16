import { boilerplate } from "../data/data.js";
import { useState, useEffect, Fragment } from "react";
import PasswordReset from "./emails/PasswordReset.jsx";
import Subject from "./Subject.jsx";
import NoActionNeeded from "./emails/NoActionNeeded.jsx";
import AccountUnlock from "./emails/AccountUnlock.jsx";
import TempPassword from "./emails/TempPassword.jsx";
import HsdCreation from "./emails/HSDCreation.jsx";
import InquirySuppression from "./emails/InquirySuppression.jsx";
import OktaUrl from "./emails/OktaUrl.jsx";
import OriginUrl from "./emails/OriginUrl.jsx";
import BIQEnvSetup from "./emails/BIQEnvSetup.jsx";

const EmailDetails = ({ selectedEmail }) => {
    const [clientName, setClientName] = useState("");
    const [caseNumber, setCaseNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [tempPassword, setTempPassword] = useState("");
    const [hsd, setHsd] = useState("");
    const [userId, setUserId] = useState("");

    // Reset clientName and caseNumber when selectedEmail changes
    useEffect(() => {
        setClientName("");
        setCaseNumber("");
        setSubject("");
        setHsd("");
        setUserId("");
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
                        </div>
                        <Subject caseNumber={caseNumber} selectedEmail={selectedEmail} subject={subject}/>

                        <br/>
                        <p>Dear {clientName === "" ? "Client," : `${clientName},`}</p>
                        <p>{boilerplate.greeting}</p>
                        {caseNumber &&
                            <Fragment>
                                <br/>
                                <p>{boilerplate.tracking} {caseNumber}.</p>
                            </Fragment>
                        }
                        <br/>
                        {selectedEmail.name === "Password reset" && <PasswordReset setSubject={setSubject}/>}
                        {selectedEmail.name === "No action needed" && <NoActionNeeded setSubject={setSubject}/>}
                        {selectedEmail.name === "Account locked" && <AccountUnlock setSubject={setSubject}/>}
                        {selectedEmail.name === "Temporary password" &&
                            <TempPassword tempPassword={tempPassword} setSubject={setSubject}/>}
                        {selectedEmail.name === "HSD creation" && <HsdCreation setSubject={setSubject}/>}
                        {selectedEmail.name === "Inquiry suppression request" &&
                            <InquirySuppression setSubject={setSubject}/>}
                        {selectedEmail.name === "OKTA URL" && <OktaUrl setSubject={setSubject}/>}
                        {selectedEmail.name === "Origin URL" && <OriginUrl setSubject={setSubject}/>}
                        {selectedEmail.name === "BIQ env setup" &&
                            <BIQEnvSetup setSubject={setSubject} hsd={hsd} clientName={clientName} userId={userId}/>}
                        <br/>
                        <p>{boilerplate.closing}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmailDetails;
