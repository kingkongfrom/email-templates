import { Fragment } from "react";
import { boilerplate } from "../../data/data.js";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import useCapitalize from "../../hooks/useCapitalize.js";

const IncidentEscalated = ({ clientName, incidentNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();
    const capitalize = useCapitalize();
    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <br/>
                <p>
                    Your case has been escalated to one of our specialized teams for further assistance under
                    the incident number <span className="bold">{incidentNumber && `${incidentNumber.toUpperCase()}.`}</span>
                </p>
                <p>As soon as we receive updates for the incident they will be provided.</p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.coeNumber}</span></p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};
export default IncidentEscalated;
