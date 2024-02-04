'use client'
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette } from 'lucide-react';

const ThemePicker = () => {
    const { themes, theme, setTheme } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const ChangeTheme = (oneTheme) => {
        setTheme(oneTheme);
        console.log(oneTheme);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-center cursor-pointer p-3"
            >
                <Palette />
            </button>

            <div
                className={`absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-10 transition ease-out duration-300 ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                {themes?.map((oneTheme, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            ChangeTheme(oneTheme);
                            toggleDropdown();
                        }}
                        className={`cursor-pointer py-3 px-6 hover:bg-gray-100 ${(theme === oneTheme) ? 'border-l-4 border-l-accent text-primaryForeground border-b' : 'border-b'}`}
                    >
                        {oneTheme}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ThemePicker;
