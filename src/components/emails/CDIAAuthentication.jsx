import { boilerplate } from "../../data/data.js";
import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import capitalize from "../../utils/capitalize.js";
import IconComponent from "../ui/IconComponent.jsx";

/**
 * Component for rendering an email template for CDIA authentication requests.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.clientName - The name of the client.
 * @param {string} props.caseNumber - The case number associated with the request.
 * @returns {JSX.Element} The JSX element representing the email template for CDIA authentication requests.
 * @author Eduardo da Silva.
 */
const CDIAAuthentication = ({ clientName, caseNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Hi {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
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

            <span onClick={copyToClipboard}>
                <IconComponent/>
            </span>
            <ToastContainer/>
        </Fragment>);
};
export default CDIAAuthentication;
