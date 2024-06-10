import { Fragment } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";
import capitalize from "../../utils/capitalize.js";
import IconComponent from "../ui/IconComponent.jsx";

/**
 * Component for rendering an email template for requesting an API UAT account.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.caseNumber - The case number associated with the issue.
 * @param {string} props.clientName - The name of the client.
 * @returns {JSX.Element} The JSX element representing the email template for requesting an API UAT account.
 * @author Eduardo da Silva.
 */
const UATApiRequest = ({ caseNumber, clientName }) => {
    const URL = "https://www.experian.com/consumer-information/net-connect-toolkit-form";
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Hi {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <p>{boilerplate.greeting}</p>
                <br/>
                {caseNumber &&
                    <Fragment>
                        <p className="tracking">{boilerplate.tracking}<span
                            className="bold">{caseNumber.toUpperCase()}</span>.</p>
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
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>

            <span onClick={copyToClipboard}>
                <IconComponent/>
            </span>
            <ToastContainer/>
        </Fragment>
    );
};
export default UATApiRequest;
