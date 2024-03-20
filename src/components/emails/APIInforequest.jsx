import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";

const APIInfoRequired = ({ setSubject, clientName, caseNumber, capitalize, }) => {
    setSubject("API info required");
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
                    <li>API User ID</li>
                    <li>API status:</li>
                    <li>Product name:</li>
                    <li>API Endpoint:</li>
                    <li>Environment:</li>
                    <li>cURL or Call script being used:</li>
                    <li>Error Timestamp:</li>
                    <li>Transaction ID or Request ID related to the generated error:</li>
                    <li>Specific Error output:</li>
                    <li>Percentage of transactions affected:</li>
                </ul>
                <p>Please reply to this email with the information requested as soon as possible.</p>
                <br/>
                <p>{boilerplate.closing}</p>
            </div>
            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};


export default APIInfoRequired;