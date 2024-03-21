import { useRef } from "react";
import { Flip, toast } from "react-toastify";

const useCopyToClipboard = () => {
    const jsxContentRef = useRef(null);

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
                    toast("Copied to clipboard!", {
                        position: "top-right",
                        autoClose: 500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        transition: Flip,
                        theme: "colored",
                        style: { background: "#315375", color: "#fff" }
                    });
                })
                .catch((error) => {
                    console.error("Failed to copy JSX content to clipboard:", error);
                    toast.error("Failed to copy JSX content to clipboard");
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
        return listType === 'OL' ? `${index}.` : '•';
    };

    return [jsxContentRef, copyToClipboard];
};

export default useCopyToClipboard;
