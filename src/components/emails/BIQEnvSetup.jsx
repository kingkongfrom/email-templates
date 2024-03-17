import { Fragment } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";

const BiqEnvSetup = ({ setSubject, caseNumber, hsd, clientName, userId, capitalize }) => {
    setSubject("Business IQ environment setup");
    const URL = "https://origin-na.experian.com";

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
                <p>
                    I created a step-by-step guide for your Head Security Designate in order to solve the issue you are
                    experiencing while attempting to login to Business IQ.
                </p>
                <br/>
                <p>{hsd && `@${capitalize(hsd)}`}</p>
                <p>We need your assistance as Head Security Designate to solve a login issue
                    affecting {!clientName ? "our client's" : `${capitalize(clientName)}'s`} account.</p>


                <p>Affected User ID: <span className="bold">{userId}</span></p>

                <p>Please login to Origin UI using your current credentials at</p>
                <p><a href={URL} className="url">{URL}</a></p>

                <p>Once you are logged in, please follow the steps below:</p>
                <ol>
                    <li>On the “Manage Users” menu, locate the affected user ID "{userId ? userId : "User id"}".</li>

                    <li>Click on the User Name (not on the checkbox), this will display the account's information.</li>

                    <li> Click on the application's tab.</li>

                    <li>
                        On the Application's tab, click on the gear icon located right to Business IQ, this will open up
                        the
                        BIQ configuration's panel.
                        (If nothing happens, please make sure you are not blocking pop-ups on your browser).
                    </li>

                    <li>
                        Make sure <span className="bold">All Accounts</span> are selected on the Portfolios. The Role
                        should
                        be <span className="bold">Credit Analyst</span> or <span className="bold">Credit Manager </span>depending
                        on the requirements of your company.
                    </li>

                    <li> Click on the 'Save and Finish' button located at the bottom of the panel.</li>
                </ol>
                <br/>
                <p>{boilerplate.closing}</p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};
export default BiqEnvSetup;
