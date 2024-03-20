import { Fragment } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";

const UATApiRequest = ({ setSubject, caseNumber, clientName, capitalize }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();
    const URL = "https://www.experian.com/consumer-information/net-connect-toolkit-form";
    setSubject("UAT API account request");

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
                <p>In order to obtain an API UAT account please follow the URL below to the request form.</p>
                <p>Once all required information is completed click on the submit button to initiate the enrolment
                    process.</p>
                <br/>
                <p>Please note that for a API UAT account the field Test User ID Only must be checked.</p>
                <br/>
                <p>Click on the following URL to initiate the enrolment process.</p>
                <p><a href={URL} className="url">{URL}</a></p>
                <br/>
                <p>{boilerplate.closing}</p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};
export default UATApiRequest;
