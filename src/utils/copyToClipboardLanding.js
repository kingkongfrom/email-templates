import { Flip } from "react-toastify";
import showToastMessage from "./showToastMessage.js";

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
