import { Fragment } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";
import capitalize from "../../utils/capitalize.js";

/**
 * Component for rendering an email template for account unlock notification.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.clientName - The name of the client.
 * @param {string} props.caseNumber - The case number associated with the account unlock.
 * @returns {JSX.Element} The JSX element representing the account unlock email template.
 * @author Eduardo da Silva.
 */
const AccountUnlock = ({ clientName, caseNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <p>{boilerplate.greeting}</p>
                <br/>
                {caseNumber &&
                    <Fragment>
                        <p className="tracking">{boilerplate.tracking}<span
                            className="bold">{caseNumber.toUpperCase()}</span>.</p>
                        <br/>
                    </Fragment>
                }
                <p>As requested your account has been unlocked, please try login to your account using your current
                    password.</p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};

export default AccountUnlock;
