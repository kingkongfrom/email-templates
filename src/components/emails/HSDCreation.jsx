import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";
import useCapitalize from "../../hooks/useCapitalize.js";

const HsdCreation = ({ clientName, caseNumber }) => {
    const eSupport = "esupport@experian.com";
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
                        <p className="tracking">{boilerplate.tracking}<span className="bold">{caseNumber.toUpperCase()}</span>.</p>
                        <br/>
                    </Fragment>
                }
                <p>Please fill out the Head Security Designate Authorization Form attached.</p>
                <p>Make sure you select the create option, you can add up to three user IDs as options along with the
                    contact information for who will be the admin.</p>
                <p>Also, the signature on this form will need to be signed by the owner, president, manager or someone
                    with
                    a similar title.</p>
                <br/>
                <p>Once the admin is created, then that person can create additional users. You can add your Subcode to
                    the
                    COID field and to the Product requested field.</p>
                <br/>


                <p> Please reply to <a href={`mailto:${eSupport}`} className="mailto">{eSupport}</a> attaching the form
                    once you
                    fill it
                    out.</p>
                <br/>
                <p>{boilerplate.closing} <span className="bold">{boilerplate.tscContactNumber}</span></p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>

    );
};
export default HsdCreation;
