import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data";
import capitalize from "../../utils/capitalize.js";

const TempPassword = ({ tempPassword, clientName, caseNumber }) => {
    const resetUrl = "https://experian-nab.okta.com";
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <p>{boilerplate.greeting}</p>
                <br/>
                {caseNumber &&
                    <p className="tracking">{boilerplate.tracking}<span className="bold">{caseNumber.toUpperCase()}</span>.</p>
                }
                <br/>
                <p>A new temporary password was created, please use the following URL and temporary password in order to
                    gain
                    access to your account.</p>
                <br/>
                <p>Password reset URL: <a href={resetUrl} className="url">{resetUrl}</a></p>
                <p>Temporary Password: <span className="temp-password">{tempPassword}</span></p>
                <br/>
                <p>Keep in mind, the old password is the same temporary password provided above.</p>
                <br/>
                <p>Please, make sure you are using at least one of the following characters on your new password:</p>
                <ul>
                    <li>Upper case character</li>
                    <li>Lower case character</li>
                    <li>Numeric character</li>
                    <li>Special character</li>
                </ul>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>
            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};
export default TempPassword;
