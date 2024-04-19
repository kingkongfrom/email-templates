import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";
import capitalize from "../../utils/capitalize.js";
import IconComponent from "../ui/IconComponent.jsx";

/**
 * Component for rendering an email template containing the Origin URL.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.clientName - The name of the client.
 * @param {string} props.caseNumber - The case number associated with the issue.
 * @returns {JSX.Element} The JSX element representing the email template containing the Origin URL.
 * @author Eduardo da Silva.
 */
const OriginUrl = ({ clientName, caseNumber }) => {
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
                        <p className="tracking">{boilerplate.tracking}<span className="bold">{caseNumber.toUpperCase()}</span>.</p>
                        <br/>
                    </Fragment>
                }
                <p>Please use the following URL in order to access your administration portal</p>
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
export default OriginUrl;
