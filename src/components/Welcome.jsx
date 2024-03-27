import { Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import useCopyFromLanding from "../hooks/useCopyfromLanding.js";

const Welcome = () => {
    const copyToClipboard = useCopyFromLanding();
    const handleCopy = (index) => {
        const ulElement = document.querySelectorAll("ul")[index];
        if (ulElement) {
            const ulText = Array.from(ulElement.querySelectorAll("li"))
                .map(li => `• ${li.textContent}`)
                .join("\n");
            copyToClipboard(ulText);
        }
    };

    return (
        <Fragment>

            <div style={styles.content}>
                <div style={styles.copyAndPasteGroup}>
                    <p style={styles.copyAndPasteTitle} className="bold">Account locked</p>
                    <div style={styles.row}>
                        <ul>
                            <li>User authenticated</li>
                            <li>User requested assistance unlocking account</li>
                            <li>Account unlocked as per client request</li>
                            <li>Access granted</li>
                            <li>No further action required by the end user</li>
                        </ul>
                        <div>
                            <FiCopy className="copy-icon" onClick={() => handleCopy(0)}/>
                        </div>
                    </div>
                </div>

                <div style={styles.copyAndPasteGroup}>
                    <p style={styles.copyAndPasteTitle} className="bold">Password reset</p>
                    <div style={styles.row}>
                        <ul>
                            <li>User authenticated</li>
                            <li>User requested assistance resetting the password</li>
                            <li>Reset Token sent via email</li>
                            <li>User was prompted to create a new password</li>
                            <li>User was able to complete the password reset process</li>
                            <li>No further action required by the end user</li>
                        </ul>
                        <div>
                            <FiCopy className="copy-icon" onClick={() => handleCopy(1)}/>
                        </div>
                    </div>
                </div>

                <div style={styles.copyAndPasteGroup}>
                    <p style={styles.copyAndPasteTitle} className="bold">Password reset / Locked account</p>
                    <div style={styles.row}>
                        <ul>
                            <li>User authenticated</li>
                            <li>Unlocked account upon request</li>
                            <li>Password reset provided upon user's request</li>
                            <li>User was prompted to create a new password</li>
                            <li>User was able to complete the password reset process</li>
                            <li>No further action required by the end user</li>
                        </ul>
                        <div>
                            <FiCopy className="copy-icon" onClick={() => handleCopy(2)}/>
                        </div>
                    </div>
                </div>

                <div style={styles.copyAndPasteGroup}>
                    <p style={styles.copyAndPasteTitle} className="bold">MFA reset</p>
                    <div style={styles.row}>
                        <ul>
                            <li>User authenticated</li>
                            <li>User requested assistance restoring security question associated to login</li>
                            <li>MFA reset provided</li>
                            <li>User access granted</li>
                            <li>No further action required by the end user</li>
                        </ul>
                        <div>
                            <FiCopy className="copy-icon" onClick={() => handleCopy(3)}/>
                        </div>
                    </div>
                </div>

                <div style={styles.copyAndPasteGroup}>
                    <p style={styles.copyAndPasteTitle} className="bold"> Matching Policy not found</p>
                    <div style={styles.row}>
                        <ul>
                            <li>User authenticated</li>
                            <li>User reported "Matching policy not found while trying to process Assertion" error</li>
                            <li>Cookies anc cached cleared form browser</li>
                            <li>URL removed from favorites</li>
                            <li>"Experian Access" Hyperlink typed manually</li>
                            <li>Issue resolved, access granted</li>
                            <li>No further action required by the end user</li>
                        </ul>
                        <div>
                            <FiCopy className="copy-icon" onClick={() => handleCopy(4)}/>
                        </div>
                    </div>
                </div>

                <div style={styles.copyAndPasteGroup}>
                    <p style={styles.copyAndPasteTitle} className="bold">Account activation</p>
                    <div style={styles.row}>
                        <ul>
                            <li>User authenticated</li>
                            <li>User requested assistance on account activation</li>
                            <li>Sent activation token via email</li>
                            <li>User created new password and security question</li>
                            <li>Account activated, access granted</li>
                            <li>No further action required by the end user</li>
                        </ul>
                        <div>
                            <FiCopy className="copy-icon" onClick={() => handleCopy(5)}/>
                        </div>
                    </div>
                </div>

                <div style={styles.copyAndPasteGroup}>
                    <p style={styles.copyAndPasteTitle} className="bold">Access denied</p>
                    <div style={styles.row}>
                        <ul>
                            <li>User authenticated</li>
                            <li>User reported "Access Denied" for product's tab on Experian Access</li>
                            <li>Missing attribute "CIS Subcode Profile"</li>
                            <li>User must reach out HSD for further assistance adding subcode to profile</li>
                            <li>Provided HSD contact information</li>
                            <li>No further action required by the end user</li>
                        </ul>
                        <div>
                            <FiCopy className="copy-icon" onClick={() => handleCopy(6)}/>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </Fragment>
    );
};

const styles = {
    content: {
        marginTop: "120px",
        marginBottom: "50px"
    },
    container: {
        textAlign: "center",
        marginBottom: "50px",
        backgroundColor: "#315375",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "800px",
        borderRadius: "5px 5px 0 0",
        minWidth: "400px",

    },
    heading: {
        fontSize: "2rem",
        fontWeight: "bold",
        backgroundImage: "linear-gradient(to right, #d2d2d2, #c5c5c3, #b4b4b4)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
    },
    text: {
        fontSize: "1.2rem",
        color: "#444",
    },
    copyAndPasteGroup: {
        marginTop: "30px",
    },
    copyAndPasteTitle: {
        paddingLeft: "72px",
        fontSize: "18px",
        color: "#315375"
    },
    row: {
        display: "flex",
        fontSize: "15px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px"
    },

};

export default Welcome;
