import { Flip } from "react-toastify";
import useToast from "./useToast.js";

const useCopyFromLanding = () => {
    const toast = useToast();
    const copyToClipboard = (content) => {
        navigator.clipboard.writeText(content)
            .then(() => {
                console.log("Content copied to clipboard successfully");
                toast("Copied to clipboard!", {
                    autoClose: 500,
                    transition: Flip,
                });
            })
            .catch((error) => {
                console.error("Failed to copy content to clipboard:", error);
                toast.error("Failed to copy content to clipboard");
            });
    };

    return copyToClipboard;
};
export default useCopyFromLanding;
