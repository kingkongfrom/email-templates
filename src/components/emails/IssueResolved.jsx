import { boilerplate } from "../../data/data.js";
import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import capitalize from "../../utils/capitalize.js";
import IconComponent from "../ui/IconComponent.jsx";

/**
 * Component for rendering an email template indicating the successful resolution of an issue.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.clientName - The name of the client.
 * @param {string} props.caseNumber - The case number associated with the resolved issue.
 * @returns {JSX.Element} The JSX element representing the email template for indicating issue resolution.
 * @author Eduardo da Silva.
 */
const IssueResolved = ({ clientName, caseNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Hi {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <p>Hope this email finds you well.</p>
                <br/>
                <p>
                    We are pleased to inform you that the issue reported on the case <span
                    className="bold">{caseNumber.toUpperCase()} </span>
                    has been successfully resolved. As a result, we will be closing this ticket.
                </p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
                <br/>
                <p>Thank you for choosing Experian.</p>
            </div>

            <span onClick={copyToClipboard}>
                <IconComponent/>
            </span>
            <ToastContainer/>
        </Fragment>
    );
};
export default IssueResolved;
