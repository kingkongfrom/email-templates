import { Fragment } from "react";

const BiqEnvSetup = ({ setSubject, hsd, clientName, userId }) => {
    setSubject("Business IQ environment setup");
    const URL = "https://origin-na.experian.com";
    return (
        <Fragment>
            <p>
                I created a step-by-step guide for your Head Security Designate in order to solve the issue you are
                experiencing while attempting to login to Business IQ.
            </p>
            <br/>/
            <p>{hsd && `@${hsd}`}</p>
            <p>We need your assistance as Head Security Designate to solve a login issue
                affecting {!clientName ? "our client's" : `${clientName}'s`} account.</p>

            <br/>
            <p>Affected User ID: {userId}</p>
            <br/>
            <p>Please login to Origin UI using your current credentials at</p>
            <p><a href={URL} className="url">{URL}</a></p>
            <br/>
            <p>Once you are logged in, please follow the steps below:</p>
            <ol>
                <li>On the “Manage Users” menu, locate the affected user ID "User ID.</li>
                <br/>
                <li>Click on the User Name (not on the checkbox), this will display the account's information.</li>
                <br/>
                <li> Click on the application's tab.</li>
                <br/>
                <li>
                    On the Application's tab, click on the gear icon located right to Business IQ, this will open up the
                    BIQ configuration's panel.
                    (If nothing happens, please make sure you are not blocking pop-ups on your browser).
                </li>
                <br/>
                <li>
                    Make sure <span className="bold">All Accounts</span> are selected on the Portfolios. The Role should
                    be <span className="bold">Credit Analyst</span> or <span className="bold">Credit Manager </span>depending
                    on the requirements of your company.
                </li>
                <br/>
                <li> Click on the 'Save and Finish' button located at the bottom of the panel.</li>
            </ol>
        </Fragment>
    );
};
export default BiqEnvSetup;
