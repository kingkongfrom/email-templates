import { Flip } from "react-toastify";
import showToastMessage from "./showToastMessage.js";

/**
 * Copies the provided content to the clipboard using the browser's Clipboard API.
 * Displays a toast message indicating the success or failure of the copy operation.
 * @param {string} content - The content to be copied to the clipboard.
 * @author Eduardo da Silva.
 */
const copyToClipboardLanding = (content) => {
    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Content copied to clipboard successfully");
            showToastMessage("Copied to clipboard!", {
                autoClose: 500,
                transition: Flip,
            });
        })
        .catch((error) => {
            console.error("Failed to copy content to clipboard:", error);
            showToastMessage.error("Failed to copy content to clipboard");
        });
};

export default copyToClipboardLanding;
