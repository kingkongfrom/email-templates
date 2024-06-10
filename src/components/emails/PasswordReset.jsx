import { Fragment } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";
import capitalize from "../../utils/capitalize.js";
import IconComponent from "../ui/IconComponent.jsx";

/**
 * Component for rendering an email template for password reset.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.clientName - The name of the client.
 * @param {string} props.caseNumber - The case number associated with the issue.
 * @returns {JSX.Element} The JSX element representing the email template for password reset.
 * @author Eduardo da Silva.
 */
const PasswordReset = ({ clientName, caseNumber }) => {
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
                <p>As requested, we have generated a password reset which will be delivered on a
                    separate email.</p>
                <p>Keep in mind the password reset would be valid for 1 hour only, re-used passwords can
                    not be utilized.</p>
                <p>The password should contain at least 8 characters including: </p>
                <ul>
                    <li>Upper case character</li>
                    <li>Lower case character</li>
                    <li>Numeric character</li>
                    <li>Special character</li>
                </ul>
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
export default PasswordReset;
