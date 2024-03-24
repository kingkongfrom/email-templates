import { Fragment, useRef, useEffect } from "react";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import useCapitalize from "../../hooks/useCapitalize.js";

const AscendHandover = ({
                            clientName,
                            incidentNumber,
                            contactName,
                            emailAddress,
                            phoneNumber,
                            shortDescription,
                        }) => {

    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();
    const capitalize = useCapitalize();
    const textareaRef = useRef("");

    // Function to dynamically adjust textarea height based on content
    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            const lineHeight = 16; // Set the fixed line height for lines between text
            const numLines = textareaRef.current.scrollHeight / lineHeight;
            const lastLineHeight = 20; // Set the line height for the last line
            const lineHeightValue = numLines > 1 ? `${textareaRef.current.scrollHeight / (numLines - 1)}px` : `${lastLineHeight}px`;

            textareaRef.current.style.height = "auto";
            textareaRef.current.style.lineHeight = lineHeightValue;
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    // Run adjustTextareaHeight on initial render and whenever content changes
    useEffect(() => {
        adjustTextareaHeight();
    }, [jsxContentRef]);

    // Event listener to reset textarea on Escape key press
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Escape") {
                textareaRef["current"].value = ""; // Reset textarea value
                adjustTextareaHeight(); // Reset textarea height
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Function to render phone number conditionally
    const renderPhoneNumber = () => {
        if (!phoneNumber && clientName && contactName && emailAddress && incidentNumber && shortDescription) {
            return <span className="not-provided">Not provided</span>;
        }
        return <span className="phone-number">{phoneNumber}</span>;
    };

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <br/>
                <p>Hello Ascend Team.</p>
                <p>Find below the details for the reported issue:</p>
                <br/>

                <p>
                    Email reported from source: <span
                    className="mailto">{"etechsupport@experian.com<mailto:etechsupport@experian.com>"}</span>
                </p>
                <p>
                    Client Name: <span className="client-name">{capitalize(clientName)}</span>
                </p>
                <p>Client Contact: <span className="contact-name">{capitalize(contactName)}</span></p>
                <p>
                    Email Address: <span
                    className="mailto">{emailAddress && `${emailAddress.toLowerCase()}<mailto:${emailAddress.toLowerCase()}>`}</span>
                </p>
                <p>Phone number: {renderPhoneNumber()}</p>
                <br/>
                <p>SNOW Incident number: <span className="incident-number">{incidentNumber.toUpperCase()}</span></p>
                <br/>
                <p>Issue:</p>
                <textarea
                    ref={textareaRef}
                    style={{
                        overflowY: "hidden",
                        width: "100%",
                        marginBottom: "10px",
                        lineHeight: "17px",
                        paddingTop: "5px",
                        height: "auto", // Set initial height to match line height
                    }}
                    className="description"
                    spellCheck="false"
                    placeholder="Description..."
                    onChange={adjustTextareaHeight} // Adjust height on input change
                />
            </div>
            <FiCopy
                className="copy-icon-body"
                onClick={() => {
                    if (textareaRef.current) {
                        textareaRef.current.select(); // Select the text inside the textarea
                        copyToClipboard(); // Call the copyToClipboard function
                    }
                }}
            />
            <ToastContainer/>
        </Fragment>
    );
};

export default AscendHandover;
