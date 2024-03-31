import { FiCopy } from "react-icons/fi";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emails, coe } from "../data/data.js";
import useToast from "../utils/showToastMessage.js";

const Subject = ({ caseNumber, selectedEmail, companyName, shortDescription, incidentNumber }) => {
    const toast = useToast();

    // Determine the templates array based on the selected email type
    const templates =
        selectedEmail?.type === "COE"
            ? coe[0].name
            : emails[0].name;

    // Find the template object corresponding to the selected email
    const selectedTemplate = templates.find(
        (template) => template.name === selectedEmail?.name
    );

    // Get the subject from the selected template or default to an empty string
    const subject = selectedTemplate ? selectedTemplate.subject : "";

    const copyToClipboard = () => {
        let textToCopy;
        if (selectedEmail.type === "COE") {
            textToCopy = `${subject} ${companyName && `| ${companyName.toUpperCase()}`} ${shortDescription && `| ${shortDescription.toUpperCase()}`} ${incidentNumber && `| ${incidentNumber.toUpperCase()}`}`;
        } else if (selectedEmail.type === "TSC") {
            textToCopy = `${subject} ${caseNumber ? `| case#${caseNumber.toUpperCase()}` : ''} ${incidentNumber ? `| ${incidentNumber.toUpperCase()}` : ''}`;
        } else {
            console.log("If you are seeing this the subject failed to load the correct text");
        }

        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                console.log("Subject copied to clipboard");
                toast("Copied to clipboard!", {
                    autoClose: 500,
                    transition: Flip,
                });
            })
            .catch((error) => {
                console.error("Error copying to clipboard: ", error);
            });
    };

    return (
        <div className="container">
            <div className="subject-title">Subject:</div>
            <div className="subject-body">
                {/* Render different subject line JSX based on email type */}
                {selectedEmail?.type === "COE" ? (
                    <div>
                        {subject}
                        {companyName && ` | ${companyName.toUpperCase()}`}
                        {shortDescription && ` | ${shortDescription.toUpperCase()}`}
                        {incidentNumber && ` | ${incidentNumber.toUpperCase()}`}
                    </div>
                ) : (
                    <div>{subject} {incidentNumber ? ` | ${incidentNumber.toUpperCase()}` : caseNumber && `| case#${caseNumber.toUpperCase()}`}</div>
                )}
                <FiCopy className="copy-icon" onClick={copyToClipboard}/>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Subject;
