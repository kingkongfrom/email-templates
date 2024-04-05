import { toast as showToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Displays a toast message with the provided message and options.
 * @param {string} message - The message to be displayed in the toast.
 * @param {object} options - Optional configuration for the toast message.
 * @param {string} options.position - The position where the toast should be displayed.
 * @param {number} options.autoClose - The time in milliseconds after which the toast should automatically close.
 * @param {boolean} options.hideProgressBar - Whether to hide the progress bar of the toast.
 * @param {boolean} options.closeOnClick - Whether the toast should close when clicked.
 * @param {boolean} options.pauseOnHover - Whether to pause the autoClose timer when hovering over the toast.
 * @param {boolean} options.draggable - Whether the toast can be dragged by the user.
 * @param {string} options.transition - The type of transition for the toast animation.
 * @param {string} options.theme - The theme of the toast message.
 * @param {object} options.style - Additional CSS style for the toast message.
 * @author Eduardo da Silva.
 */
function showToastMessage(message, options = {}) {
    showToast(message, {
        position: options.position || "top-right",
        autoClose: options.autoClose || 500,
        hideProgressBar: options.hideProgressBar || true,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        draggable: options.draggable || true,
        transition: options.transition || 'Flip',
        theme: options.theme || 'colored',
        style: options.style || { background: "#315375", color: "#fff" },
    });
}

export default showToastMessage;
