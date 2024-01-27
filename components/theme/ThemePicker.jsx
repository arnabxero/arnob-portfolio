import React from 'react'
import { useTheme } from '@/contexts/ThemeContext';

const ThemePicker = () => {
    const { themes, theme, setTheme } = useTheme();

    const ChangeTheme = (oneTheme) => {
        setTheme(oneTheme);
        console.log(oneTheme);
    };

    return (
        <>
            {themes?.map((oneTheme, index) => (
                <>
                    <div
                        onClick={() => ChangeTheme(oneTheme)}
                        className={`cursor-pointer py-3 px-6 border-r border-border ${(theme === oneTheme) ? 'border-b-4 border-b-accent text-primaryForeground' : 'border-b'}`}
                    >
                        {oneTheme}
                    </div>
                </>
            ))}
        </>

    )
}

export default ThemePicker