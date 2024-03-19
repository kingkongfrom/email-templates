import { Fragment } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";

const AccountUnlock = ({ setSubject, clientName, caseNumber, capitalize }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();
    setSubject("Account locked");

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <p>{boilerplate.greeting}</p>
                <br/>
                {caseNumber &&
                    <Fragment>
                        <p>{boilerplate.tracking}<span className="bold">{caseNumber.toUpperCase()}</span>.</p>
                        <br/>
                    </Fragment>
                }
                <p>As requested your account has been unlocked, please try login to your account using your current
                    password.</p>
                <br/>
                <p>{boilerplate.closing}</p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    );
};

export default AccountUnlock;
