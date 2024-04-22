import { FiCopy, FiLock } from "react-icons/fi";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emails, coe } from "../data/data.js";
import showToastMessage from "../utils/showToastMessage.js";

/**
 * Subject component representing the subject line of an email.
 * @param {Object} props - The component props.
 * @param {string} props.caseNumber - The case number.
 * @param {Object} props.selectedEmail - The selected email.
 * @param {string} props.companyName - The company name.
 * @param {string} props.shortDescription - The short description.
 * @param {string} props.incidentNumber - The incident number.
 * @returns {JSX.Element} - The rendered component.
 * @author Eduardo da Silva.
 */
const Subject = ({
                     caseNumber,
                     selectedEmail,
                     companyName,
                     shortDescription,
                     incidentNumber,
                     dispatch,
                     encryption
                 }) => {

    // Determine the templates array based on the selected email type
    const templates =
        selectedEmail?.type === "COE" // If the selected email type is COE
            ? coe[0].name // Use COE email templates
            : emails[0].name; // Otherwise, use TSC email templates

    // Find the template object corresponding to the selected email
    const selectedTemplate = templates.find(
        (template) => template.name === selectedEmail?.name
    );

    // Get the subject from the selected template or default to an empty string
    const subject = selectedTemplate ? selectedTemplate.subject : "";

    /**
     * Function to copy the subject line to the clipboard.
     */
    const copyToClipboard = () => {
        let textToCopy;
        if (selectedEmail.type === "COE") {
            textToCopy = `${encryption && "[encrypt] | "} ${subject} ${companyName && `| ${companyName.toUpperCase()}`} ${shortDescription && `| ${shortDescription.toUpperCase()}`} ${incidentNumber && `| ${incidentNumber.toUpperCase()}`}`;
        } else if (selectedEmail.type === "TSC") {
            textToCopy = `${encryption && "[encrypt] | "} ${subject} ${caseNumber ? `| ${caseNumber.toUpperCase()}` : ""} ${incidentNumber ? `| ${incidentNumber.toUpperCase()}` : ""}`;
        } else {
            console.log("If you are seeing this the subject failed to load the correct text");
        }

        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                console.log("Subject copied to clipboard");
                // Show toast message indicating successful copy
                showToastMessage("Copied to clipboard!", {
                    autoClose: 500,
                    transition: Flip,
                });
            })
            .catch((error) => {
                console.error("Error copying to clipboard: ", error);
            });
    };

    const handleEncryption = () => {
        dispatch({ type: "setEncryption" });
    };

    // Rendering the Subject component
    return (
        <div className="container">
            <div className="subject-title">Subject:</div>
            <div className="subject-body">
                {/* Render different subject line JSX based on email type */}
                {selectedEmail?.type === "COE" ? (
                    <div>
                        <span className="encrypted">{encryption && "[encrypt] | "}</span>
                        {subject}
                        {companyName && ` | ${companyName.toUpperCase()}`}
                        {shortDescription && ` | ${shortDescription.toUpperCase()}`}
                        {incidentNumber && ` | ${incidentNumber.toUpperCase()}`}
                    </div>
                ) : (
                    <div><span
                        className="encrypted">{encryption && "[encrypt] "}</span> {subject} {incidentNumber ? ` | ${incidentNumber.toUpperCase()}` : caseNumber && `| ${caseNumber.toUpperCase()}`}
                    </div>
                )}
                <div className="icons">
                    <FiLock className={encryption ? "encrypted lock-icon" : "lock-icon"} onClick={handleEncryption}/>
                    <FiCopy className="copy-icon" onClick={copyToClipboard}/>
                </div>
            </div>


            <ToastContainer/> {/* Toast container for displaying messages */}
        </div>
    );
};

export default Subject;
