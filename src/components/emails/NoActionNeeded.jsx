import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";

const NoActionNeeded = ({ setSubject, clientName, caseNumber, capitalize }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();
        setSubject("No user found");

    return (
    <Fragment>
        <div ref={jsxContentRef} className="email-body">
            <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
            <p>{boilerplate.greeting}</p>
            <br/>
            {caseNumber &&
                <Fragment>
                    <p className="tracking">{boilerplate.tracking}<span className="bold">{caseNumber.toUpperCase()}</span>.</p>
                    <br/>
                </Fragment>
            }
            <p>We ran a search in our system to find a user ID associated to information provided, unfortunately,
                we were unable to find a match.
            </p>
            <br/>
            <p>Can you please provide us more details such as company name, Subscriber Code, or user ID of a
                coworker with access to Experian, with that information we would be able to find your user ID.
            </p>
            <br/>
            <p>{boilerplate.closing}</p>
        </div>

        <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
        <ToastContainer/>
    </Fragment>

);
};
export default NoActionNeeded;
