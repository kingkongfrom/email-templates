import { toast as showToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
