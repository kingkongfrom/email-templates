import { useState } from 'react';

// Custom hook for handling color change with timeout
export const useColorChange = (initialColor, changedColor, duration) => {
    const [color, setColor] = useState(initialColor);

    const handleClick = () => {
        setColor(changedColor);
        setTimeout(() => {
            setColor(initialColor);
        }, duration);
    };

    return [color, handleClick];
};

