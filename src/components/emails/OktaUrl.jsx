import React, { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";

const OktaUrl = ({ setSubject, clientName, caseNumber, capitalize }) => {
    const URL = "https://experian-nab.okta.com"
    setSubject("Experian Okta profile URL")
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
    <Fragment>
        <div ref={jsxContentRef} className="email-body">
            <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
            <p>{boilerplate.greeting}</p>
            <br/>
            {caseNumber &&
                <Fragment>
                    <p>{boilerplate.tracking}<span className="bold">{caseNumber.toUpperCase()}</span>.</p>
                    <br/>
                </Fragment>
            }
            <p>Please use the following URL to access your Experian OKTA profile.</p>
            <p><a href={URL} className="url">{URL}</a></p>
            <br/>
            <p>{boilerplate.closing}</p>
        </div>

        <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
        <ToastContainer/>
    </Fragment>

    );
};
export default OktaUrl;
