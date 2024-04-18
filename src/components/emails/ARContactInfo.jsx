import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import { Fragment } from "react";
import capitalize from "../../utils/capitalize.js";
import { boilerplate } from "../../data/data.js";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";

const ARContactInfo = ({ clientName, caseNumber, accountRepName, emailAddress }) => {
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
                <p>Please reach out to your Experian Account Representative for further assistance.</p>
                <br/>
                <h4>Account rep contact info:</h4>
                <p>Name: <span className="bold">{accountRepName}</span></p>
                <p>Email address: <span className="bold">{emailAddress}</span></p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>
            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};
export default ARContactInfo;
