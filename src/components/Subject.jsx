import { FiCopy } from "react-icons/fi";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emails, coe } from "../data/data.js";

const Subject = ({ caseNumber, selectedEmail }) => {
    // Determine if COE templates exist
    const hasCoeTemplates = coe.length > 0 && coe[0].name.length > 0;

    // Determine the templates array based on the selected email type
    const templates =
        hasCoeTemplates && selectedEmail?.type === "COE"
            ? coe[0].name
            : emails[0].name;

    // Find the template object corresponding to the selected email
    const selectedTemplate = templates.find(
        (template) => template.name === selectedEmail?.name
    );

    // Get the subject from the selected template or default to an empty string
    const subject = selectedTemplate ? selectedTemplate.subject : "";

    const copyToClipboard = () => {
        const textToCopy = `${subject} ${caseNumber ? `| case#${caseNumber}` : ""}`;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                console.log("Subject copied to clipboard");
                toast("Copied to clipboard!", {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    transition: Flip,
                    theme: "colored",
                    style: { background: "#315375", color: "#fff" },
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
                {subject} {caseNumber && `| case#${caseNumber}`}
                <FiCopy className="copy-icon" onClick={copyToClipboard} />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Subject;
