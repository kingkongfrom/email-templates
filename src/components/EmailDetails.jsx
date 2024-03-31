import { Fragment, useReducer } from "react";
import Subject from "./Subject";
import InputFields from "./ui/InputFields";
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
import IssueResolved from "./emails/IssueResolved";
import CaseEscalated from "./emails/CaseEscalated";
import CDIAAuthentication from "./emails/CDIAAuthentication";
import CDIAUsernameAndPassword from "./emails/CDIAUsernameAndPassword";
import AscendHandover from "./coe/AscendHandover";
import IncidentEscalated from "./coe/IncidentEscalated";
import { initialState, reducer } from "../reducer.js";

const EmailDetails = ({ selectedEmail }) => {
    const [{
        clientName,
        caseNumber,
        tempPassword,
        hsd,
        userId,
        contactName,
        companyName,
        emailAddress,
        incidentNumber,
        phoneNumber,
        shortDescription,
    }, dispatch] = useReducer(reducer, initialState);

    // Map the email name to its corresponding component
    const emailComponentMap = {
        "Password reset": PasswordReset,
        "Account not found": NoActionNeeded,
        "Account locked": AccountUnlock,
        "Temporary password": TempPassword,
        "HSD creation": HsdCreation,
        "Inquiry suppression request": InquirySuppression,
        "OKTA URL": OKTAUrl,
        "Origin URL": OriginUrl,
        "BIQ env setup": BIQEnvSetup,
        "UAT API account request": UATApiRequest,
        "SSH Key requirements": SSHKeyRequirements,
        "API Info Required": APIInfoRequired,
        "Issue has been resolved": IssueResolved,
        "Case has been escalated": CaseEscalated,
        "CDIA email authentication": CDIAAuthentication,
        "CDIA username & password": CDIAUsernameAndPassword,
        "Ascend handover": AscendHandover,
        "Incident has been escalated": IncidentEscalated,
    };

    const SelectedEmailComponent = emailComponentMap[selectedEmail?.name];

    return (
        <Fragment>
            {selectedEmail && (
                <div>
                    <div className="email-details">
                        <InputFields
                            selectedEmail={selectedEmail}
                            clientName={clientName}
                            dispatch={dispatch}
                            caseNumber={caseNumber}
                            tempPassword={tempPassword}
                            hsd={hsd}
                            userId={userId}
                            incidentNumber={incidentNumber}
                            contactName={contactName}
                            companyName={companyName}
                            emailAddress={emailAddress}
                            phoneNumber={phoneNumber}
                            shortDescription={shortDescription}
                        />
                        <Subject {...{
                            caseNumber,
                            selectedEmail,
                            companyName,
                            shortDescription,
                            incidentNumber,
                        }} />
                        {SelectedEmailComponent && (
                            <SelectedEmailComponent {...{
                                clientName,
                                caseNumber,
                                tempPassword,
                                hsd,
                                userId,
                                contactName,
                                emailAddress,
                                phoneNumber,
                                shortDescription,
                                incidentNumber,
                            }} />
                        )}
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default EmailDetails;
