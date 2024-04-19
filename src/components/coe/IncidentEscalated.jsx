import { Fragment } from "react";
import { boilerplate } from "../../data/data.js";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import capitalize from "../../utils/capitalize.js";
import IconComponent from "../ui/IconComponent.jsx";

/**
 * Component for rendering an email template notifying the client about escalated incident.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.clientName - The name of the client.
 * @param {string} props.incidentNumber - The incident number associated with the escalation.
 * @returns {JSX.Element} The JSX element representing the email template for escalated incident notification.
 * @author Eduardo da Silva.
 */
const IncidentEscalated = ({ clientName, incidentNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

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

            <span onClick={copyToClipboard}>
                <IconComponent/>
            </span>
            <ToastContainer/>
        </Fragment>
    );
};
export default IncidentEscalated;
