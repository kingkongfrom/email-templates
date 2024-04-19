import { useRef } from "react";
import { Flip } from "react-toastify";
import showToastMessage from "../utils/showToastMessage.js";

/**
 * A custom hook for copying JSX content to the clipboard.
 * @returns {Array} An array containing a ref to the JSX content and a function to copy the content to the clipboard.
 */
const useCopyToClipboard = () => {
    const jsxContentRef = useRef(null);

    /**
     * Copies the JSX content to the clipboard.
     */
    const copyToClipboard = () => {
        if (jsxContentRef.current) {
            const jsxContent = Array.from(jsxContentRef.current.childNodes)
                .map(node => {
                    switch (node.nodeName) {
                        case 'P':
                        case 'H1':
                        case 'H2':
                        case 'H3':
                        case 'H4':
                        case 'H5':
                        case 'H6':
                            return `${node.textContent}\n`;
                        case 'TEXTAREA':
                            return `${node.value}\n`;
                        case 'BR':
                            return '\n';
                        case 'UL':
                        case 'OL':
                            return extractListContent(node, 1, 0);
                        default:
                            return '';
                    }
                })
                .join('');

            navigator.clipboard.writeText(jsxContent)
                .then(() => {
                    console.log("JSX content copied to clipboard successfully");
                    showToastMessage("Copied to clipboard!", {
                        autoClose: 500,
                        transition: Flip,
                    });
                })
                .catch((error) => {
                    console.error("Failed to copy JSX content to clipboard:", error);
                    showToastMessage.error("Failed to copy JSX content to clipboard");
                });
        }
    };

    /**
     * Extracts the content from nested lists.
     * @param {HTMLElement} listNode - The parent list node.
     * @param {number} index - The starting index for numbered lists.
     * @param {number} depth - The depth of the list.
     * @returns {string} The extracted list content.
     * @author Eduardo da Silva.
     */
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

    /**
     * Determines the bullet point for a list item based on the list type.
     * @param {string} listType - The type of list ('UL' for unordered list, 'OL' for ordered list).
     * @param {number} index - The index of the list item in the ordered list.
     * @returns {string} The bullet point for the list item.
     * @author Eduardo da Silva.
     */
    const getListBulletPoint = (listType, index) => {
        return listType === 'OL' ? `${index}.` : '•';
    };

    return [jsxContentRef, copyToClipboard];
};

export default useCopyToClipboard;
