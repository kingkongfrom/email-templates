import { useRef } from "react";
import { Flip, toast } from "react-toastify";

// Custom hook for copying JSX content to clipboard
const useCopyToClipboard = () => {
    const jsxContentRef = useRef(null);

    const copyToClipboard = () => {
        if (jsxContentRef.current) {
            const jsxContent = Array.from(jsxContentRef.current.childNodes)
                .map(node => {
                    if (node.nodeName === 'P' || /^H[1-6]$/.test(node.nodeName)) {
                        return `${node.textContent}\n`;
                    } else if (node.nodeName === 'BR') {
                        return '\n';
                    } else if (node.nodeName === 'UL' || node.nodeName === 'OL') {
                        return extractListContent(node, 1, 0);
                    }
                    return '';
                })
                .join('');

            navigator.clipboard.writeText(jsxContent)
                .then(() => {
                    console.log("JSX content copied to clipboard successfully");
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
                })
                .catch((error) => {
                    console.error("Failed to copy JSX content to clipboard:", error);
                    toast.error("Failed to copy JSX content to clipboard"); // Display error toast
                });
        }
    };

    const extractListContent = (listNode, index, depth) => {
        let listItems = '';
        Array.from(listNode.childNodes).forEach((childNode) => {
            if (childNode.nodeName === 'LI') {
                const listItemContent = childNode.textContent.trim();
                const bulletPoint = getListBulletPoint(listNode.nodeName, index);
                listItems += `${' '.repeat(depth * 2)}${bulletPoint} ${listItemContent}\n`;
                index++;
            } else if (childNode.nodeName === 'UL' || childNode.nodeName === 'OL') {
                listItems += extractListContent(childNode, 1, depth + 1);
            }
        });
        return `${listItems}`;
    };

    const getListBulletPoint = (listType, index) => {
        if (listType === 'OL') {
            return `${index}.`;
        } else {
            return '•';
        }
    };

    return [jsxContentRef, copyToClipboard];
};

export default useCopyToClipboard;
