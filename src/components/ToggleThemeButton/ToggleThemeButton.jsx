
import styles from './ToggleThemeButton';

import React, { useState } from 'react';

function ToggleThemeButton() {

const [isDarkMode, setIsDarkMode] = useState(false);


const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
};

return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <nav>
        
        {/* Botón para alternar entre los modos */}
        <button onClick={toggleTheme}>
        {isDarkMode ? 'Modo Claro' : 'Modo Nocturno'}
        </button>
    </nav>
    
    </div>
);
}

export default ToggleThemeButton;
