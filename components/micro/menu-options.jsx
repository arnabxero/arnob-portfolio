import React from 'react'

const MenuOption = ({ tab, setActiveTab, state }) => {

    const ChangeActive = () => {
        setActiveTab(tab);
    };

    return (
        <div
            onClick={ChangeActive}
            className={`cursor-pointer py-3 px-6 border-r border-border ${state ? 'border-b-4 border-b-accent text-primaryForeground' : 'border-b'}`}
        >
            {tab}
        </div>
    )
}

export default MenuOption