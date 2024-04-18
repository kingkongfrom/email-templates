import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";
import capitalize from "../../utils/capitalize.js";

/**
 * Component for rendering an email template requesting API information.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.clientName - The name of the client.
 * @param {string} props.caseNumber - The case number associated with the API information request.
 * @returns {JSX.Element} The JSX element representing the API information request email template.
 * @author Eduardo da Silva.
 */
const APIInfoRequired = ({ clientName, caseNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>
                    Dear{" "}
                    {clientName === ""
                        ? "Client,"
                        : `${capitalize(clientName)},`}
                </p>
                <p>{boilerplate.greeting}</p>
                <br/>
                {caseNumber && (
                    <Fragment>
                        <p className="tracking">
                            {boilerplate.tracking}
                            <span className="bold">{caseNumber.toUpperCase()}.</span>
                        </p>
                        <br/>
                    </Fragment>
                )}
                <p>We need the following information regarding the error and product affected by the incident
                    reported.</p>
                <ul>
                    <li>API user ID</li>
                    <li>API status:</li>
                    <li>Product name:</li>
                    <li>API endpoint:</li>
                    <li>Environment:</li>
                    <li>cURL or call script being used:</li>
                    <li>Error timestamp:</li>
                    <li>Transaction ID or request ID related to the generated error:</li>
                    <li>Specific error output:</li>
                    <li>Percentage of transactions affected:</li>
                </ul>
                <p>Please reply to this email with the information requested as soon as possible.</p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>
            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};


export default APIInfoRequired;