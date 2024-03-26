import { Fragment } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";
import useCapitalize from "../../hooks/useCapitalize.js";

const CDIAUsernameAndPassword = ({ clientName, caseNumber }) => {
    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();
    const capitalize = useCapitalize();

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

<p>Please find below the username and password for the Metro2 Format.</p>
                <ul>
                    <li>Username: <span className="bold">{boilerplate.CDIAUsername}</span> (All upper case)</li>
                    <li>Password: <span className="bold">{boilerplate.CDIAPassword}</span> (Case sencitive)</li>

                </ul>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>    );
};
export default CDIAUsernameAndPassword;
