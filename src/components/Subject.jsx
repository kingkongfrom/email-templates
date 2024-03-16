import React from 'react';
import { FiCopy } from "react-icons/fi";
import { toast, ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subject = ({ caseNumber, subject }) => {
    const copyToClipboard = () => {
        const textToCopy = `${subject} ${caseNumber ? `| case#${caseNumber}` : ''}`;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log("Subject copied to clipboard");
                toast("Copied to clipboard!", {
                    position: "top-right", // Set position explicitly
                    autoClose: 500, // Duration in milliseconds
                    hideProgressBar: true, // Hide progress bar
                    closeOnClick: true, // Close toast when clicked
                    pauseOnHover: true, // Pause timer when hovered
                    draggable: true, // Allow dragging to dismiss
                    transition: Flip,
                    theme: "colored",
                    style: { background: "#315375", color: "#fff" }


                });
            }).catch((error) => {
            console.error('Error copying to clipboard: ', error);
        });
    };

    return (
        <div className="container">
            <div className="subject-title">Subject:</div>
            <div className="subject-body">
                {subject} {caseNumber && `| case#${caseNumber}`}
                <FiCopy className="copy-icon" onClick={copyToClipboard}/>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Subject;
