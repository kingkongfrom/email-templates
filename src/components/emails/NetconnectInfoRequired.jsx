import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import { Fragment } from "react";
import capitalize from "../../utils/capitalize.js";
import { boilerplate } from "../../data/data.js";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import IconComponent from "../ui/IconComponent.jsx";

const NetconnectInfoRequired = ({ clientName, caseNumber, }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>
                    Hi{" "}
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
                <p>
                    In order to better understand and troubleshoot the issue reported please provide
                    us with the following information:
                </p>
                <br/>
                <h4>Netconnect details</h4>
                <ul>
                    <li>User id:</li>
                    <li>Environment: (Production, Demo, UAT)</li>
                    <li>Endpoint:</li>
                    <li>Subscriber code:</li>
                    <li>XML request & response</li>
                    <li>Inquiry string</li>
                    <li>Error timestamp:</li>
                    <li>Transaction ID or request ID related to the generated error:</li>
                    <li>Specific error output:</li>
                    <li>Percentage of transactions affected:</li>
                </ul>
                <p>Please reply to this email with the information requested as soon as possible in order to speed up the resolution of the issue reported.</p>
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

export default NetconnectInfoRequired;
