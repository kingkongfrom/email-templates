import { Fragment, useState } from "react";

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

import AscendHandover from "./coe/AscendHandover.jsx";
import InputFields from "./ui/InputFields.jsx";
import IssueResolved from "./emails/IssueResolved.jsx";
import CaseEscalated from "./emails/CaseEscalated.jsx";
import IncidentEscalated from "./coe/IncidentEscalated.jsx";
import CDIAAuthentication from "./emails/CDIAAuthentication.jsx";
import CDIAUsernameAndPassword from "./emails/CDIAUsernameAndPassword.jsx";

const EmailDetails = ({ selectedEmail }) => {
    const [clientName, setClientName] = useState("");
    const [caseNumber, setCaseNumber] = useState("");
    const [tempPassword, setTempPassword] = useState("");
    const [hsd, setHsd] = useState("");
    const [userId, setUserId] = useState("");
    const [contactName, setContactName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");

    const [incidentNumber, setIncidentNumber] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [shortDescription, setShortDescription] = useState("");

    return (
        <Fragment>
            {selectedEmail && (
                <div>
                    <div className="details-header">
                        <h2 className="title">{selectedEmail.name}</h2>
                    </div>

                    <div className="email-details">
                        <InputFields
                            clientName={clientName}
                            setClientName={setClientName}
                            selectedEmail={selectedEmail}
                            caseNumber={caseNumber}
                            setCaseNumber={setCaseNumber}
                            tempPassword={tempPassword}
                            setTempPassword={setTempPassword}
                            hsd={hsd}
                            setHsd={setHsd}
                            userId={userId}
                            setUserId={setUserId}
                            incidentNumber={incidentNumber}
                            setIncidentNumber={setIncidentNumber}
                            contactName={contactName}
                            setContactName={setContactName}
                            companyName={companyName}
                            setCompanyName={setCompanyName}
                            emailAddress={emailAddress}
                            setEmailAddress={setEmailAddress}
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            shortDescription={shortDescription}
                            setShortDescription={setShortDescription}
                        />

                        <Subject caseNumber={caseNumber} selectedEmail={selectedEmail} companyName={companyName}
                                 shortDescription={shortDescription} incidentNumber={incidentNumber}/>

                        {selectedEmail.name === "Password reset" &&
                            <PasswordReset clientName={clientName} caseNumber={caseNumber}/>}
                        {selectedEmail.name === "Account not found" &&
                            <NoActionNeeded clientName={clientName} caseNumber={caseNumber}/>}
                        {selectedEmail.name === "Account locked" &&
                            <AccountUnlock clientName={clientName} caseNumber={caseNumber}/>}
                        {selectedEmail.name === "Temporary password" &&
                            <TempPassword tempPassword={tempPassword} clientName={clientName} caseNumber={caseNumber}/>}
                        {selectedEmail.name === "HSD creation" &&
                            <HsdCreation selectedEmail={selectedEmail} clientName={clientName}
                                         caseNumber={caseNumber}/>}
                        {selectedEmail.name === "Inquiry suppression request" &&
                            <InquirySuppression clientName={clientName} caseNumber={caseNumber}/>}
                        {selectedEmail.name === "OKTA URL" &&
                            <OKTAUrl clientName={clientName} caseNumber={caseNumber}/>}
                        {selectedEmail.name === "Origin URL" &&
                            <OriginUrl clientName={clientName} caseNumber={caseNumber}/>}
                        {selectedEmail.name === "BIQ env setup" &&
                            <BIQEnvSetup hsd={hsd} caseNumber={caseNumber} clientName={clientName} userId={userId}/>}
                        {selectedEmail.name === "UAT API account request" &&
                            <UATApiRequest hsd={hsd} caseNumber={caseNumber} clientName={clientName} userId={userId}/>}
                        {selectedEmail.name === "SSH Key requirements" &&
                            <SSHKeyRequirements hsd={hsd} caseNumber={caseNumber} clientName={clientName}
                                                userId={userId}/>}
                        {selectedEmail.name === "API Info Required" &&
                            <APIInfoRequired hsd={hsd} caseNumber={caseNumber} clientName={clientName}
                                             userId={userId}/>}
                        {selectedEmail.name === "Issue has been resolved" &&
                            <IssueResolved caseNumber={caseNumber} clientName={clientName}
                                             userId={userId}/>}
                        {selectedEmail.name === "Case has been escalated" &&
                            <CaseEscalated  clientName={clientName}
                                           userId={userId} incidentNumber={incidentNumber}/>}
                        {selectedEmail.name === "CDIA email authentication" &&
                            <CDIAAuthentication clientName={clientName} caseNumber={caseNumber}/>}
                        {selectedEmail.name === "CDIA username & password" &&
                            <CDIAUsernameAndPassword clientName={clientName} caseNumber={caseNumber}/>}


                        {selectedEmail.name === "Ascend handover" &&
                            <AscendHandover clientName={clientName} incidentNumber={incidentNumber} userId={userId}
                                            contactName={contactName} emailAddress={emailAddress}
                                            phoneNumber={phoneNumber}
                                            shortDescription={shortDescription}/>}
                        {selectedEmail.name === "Incident has been escalated" &&
                            <IncidentEscalated clientName={clientName} incidentNumber={incidentNumber} />}
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default EmailDetails;
