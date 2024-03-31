import { Fragment } from "react";
import { boilerplate } from "../../data/data.js";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import capitalize from "../../utils/capitalize.js";

const CaseEscalated = ({ clientName, caseNumber, incidentNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <p>{boilerplate.csatGreeting}</p>
                <br/>
                {caseNumber &&
                    <Fragment>
                        <p className="tracking">{boilerplate.tracking}<span
                            className="bold">{caseNumber.toUpperCase()}</span>.</p>
                        <br/>
                    </Fragment>
                }

                <p>
                    Your case has been escalated to our Second Level Support Team for further assistance under
                    the incident number <span className="bold">{incidentNumber && `${incidentNumber.toUpperCase()}.`}</span>
                </p>

                <br/>
                {boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};
export default CaseEscalated;
