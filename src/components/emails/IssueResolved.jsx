import { boilerplate } from "../../data/data.js";
import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import useCapitalize from "../../hooks/useCapitalize.js";

const IssueResolved = ({ clientName, caseNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();
    const capitalize = useCapitalize();
    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
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

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};
export default IssueResolved;
