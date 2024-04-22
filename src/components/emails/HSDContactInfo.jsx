import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import { Fragment } from "react";
import capitalize from "../../utils/capitalize.js";
import { boilerplate } from "../../data/data.js";
import { ToastContainer } from "react-toastify";
import IconComponent from "../ui/IconComponent.jsx";

const HSDContactInfo = ({ clientName, caseNumber, hsdName, emailAddress }) => {
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
                <p>Please reach out to your Head Security Designate for further assistance.</p>
                <br/>
                <h4>Head Security Designate contact info:</h4>
                <p>Name: <span className="bold">{hsdName}</span></p>
                <p>Email address: <span className="bold">{emailAddress}</span></p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>
            <span onClick={copyToClipboard}>
                <IconComponent/>
            </span>
            <ToastContainer/>
        </Fragment>
    );
};
export default HSDContactInfo;
