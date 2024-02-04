'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette } from 'lucide-react';

const ThemePicker = () => {
    const { themes, theme, setTheme } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    const ChangeTheme = (oneTheme) => {
        setTheme(oneTheme);
        console.log(oneTheme);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Close dropdown if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between cursor-pointer p-3"
            >
                <Palette />
            </button>

            {isDropdownOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-10 transition ease-out duration-300"
                >
                    {themes?.map((oneTheme, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                ChangeTheme(oneTheme);
                                setIsDropdownOpen(false);
                            }}
                            className={`cursor-pointer py-3 px-6 hover:bg-gray-100 ${theme === oneTheme ? 'border-l-4 border-l-accent border-b text-primaryForeground' : 'border-b'
                                }`}
                        >
                            {oneTheme}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ThemePicker;
