import { boilerplate } from "../../data/data.js";
import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import capitalize from "../../utils/capitalize.js";

const CDIAAuthentication = ({ clientName, caseNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <p>{boilerplate.greeting}</p>
                <br/>
                {caseNumber &&
                    <Fragment>
                        <p className="tracking">{boilerplate.tracking}<span
                            className="bold">{caseNumber.toUpperCase()}</span>.</p>
                        <br/>
                    </Fragment>
                }
                <p>We received a request for the CDIA username & password for the Metro2 format.</p>
                <p>
                    In order to verify the authenticity of this request,
                    please reply to this email with the following details:
                </p>
                <br/>
                <ul>
                    <li>Full name:</li>
                    <li>Company name:</li>
                </ul>

                <p>If you did not request this information please disregard this email.</p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>);
};
export default CDIAAuthentication;
