'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemePicker = () => {
    const { themes, theme, setTheme } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({});
    const paletteRef = useRef(null); // Reference to the palette icon

    useEffect(() => {
        if (showModal && paletteRef.current) {
            const rect = paletteRef.current.getBoundingClientRect();
            const position = {
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
            };

            // Check if the dropdown goes beyond the viewport's right edge
            const dropdownWidth = 200; // Assuming a fixed width for the dropdown
            if (position.left + dropdownWidth > window.innerWidth) {
                position.left -= (position.left + dropdownWidth) - window.innerWidth + 20; // 20px padding from the edge
            }

            // Update dropdown position
            setDropdownPosition(position);
        }
    }, [showModal]);

    const triggerThemeSelector = () => {
        setShowModal(!showModal); // Toggle the visibility of the modal
    };

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        setShowModal(false); // Hide the modal after changing the theme
    };

    return (
        <div className='flex items-center justify-center' ref={paletteRef}>
            <div
                className={`p-2 cursor-pointer ${showModal && 'text-accent'}`}
                onClick={triggerThemeSelector}>
                <Palette />
            </div>
            {showModal && (
                <div
                    style={{
                        position: 'fixed',
                        top: `${dropdownPosition.top}px`,
                        left: `${dropdownPosition.left}px`,
                        width: '200px',
                    }}
                    className='shadow-lg  bg-background border'>
                    {themes?.map((oneTheme, index) => (
                        <div
                            key={index}
                            className={`border border-border p-2 hover:bg-gray-100 cursor-pointer ${oneTheme === theme ? 'border-l-4 border-l-accent text-primaryForeground' : 'border-b'}`}
                            onClick={() => changeTheme(oneTheme)}>
                            {oneTheme}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ThemePicker;
