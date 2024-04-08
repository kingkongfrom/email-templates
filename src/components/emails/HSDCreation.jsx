import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";
import capitalize from "../../utils/capitalize.js";

/**
 * Component for rendering an email template for Head Security Designate (HSD) creation.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.clientName - The name of the client.
 * @param {string} props.caseNumber - The case number associated with the request.
 * @returns {JSX.Element} The JSX element representing the email template for HSD creation.
 * @author Eduardo da Silva.
 */
const HSDCreation = ({ clientName, caseNumber }) => {
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
                <p>
                    Please fill out the Head Security Designate Authorization Form attached.
                </p>
                <p>
                    Make sure you select the create option, you can add up to three user IDs as options along with the
                    contact information for who will be the admin.
                </p>
                <p>
                    Also, the signature on this form will need to be signed by the owner, president, manager or someone
                    with
                    a similar title.
                </p>
                <br/>
                <p>
                    Once the admin is created, then that person can create additional users. You can add your Subcode to
                    the
                    COID field and to the Product requested field.
                </p>
                <br/>


                <p> Please reply to <a href={`mailto:${boilerplate.CISEmailAddress}`} className="mailto">{boilerplate.CISEmailAddress}</a> attaching the form
                    once you
                    fill it
                    out.</p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.CISPhoneNumber}</span></p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>

    );
};
export default HSDCreation;
