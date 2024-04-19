import { useColorChange } from "../../utils/useColorChange.js";
import { FiCopy } from "react-icons/fi";

const IconComponent = () => {
    const [iconColor, handleClick] = useColorChange("#838586", "#315375", 300);

    return (
        <div>
            <FiCopy className="copy-icon-body" style={{ color: iconColor }} onClick={handleClick}/>
        </div>
    );
};
export default IconComponent;
