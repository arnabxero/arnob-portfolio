import React from 'react'
import MenuOption from '@/components/micro/menu-options';
import ThemePicker from '@/components/theme/ThemePicker';

const Topbar = ({ allTabs, activeTab, setActiveTab }) => {

    const SetHomeActive = () => {
        setActiveTab('_Hello');
    };

    return (
        <div className='flex justify-between text-primary border-b border-border font-bold tracking-widest'>
            <div className='flex'>
                <div
                    onClick={SetHomeActive}
                    className={`cursor-pointer  py-3 px-10 border-r border-border border-b`}
                >
                    _Eftakhar Ahmed Arnob
                </div>

                {allTabs?.map((tab, index) => (
                    <>
                        <MenuOption tab={tab} setActiveTab={setActiveTab} state={(activeTab === tab)} />
                    </>
                ))}
            </div>
            <div className='flex border-l border-border'>
                <ThemePicker />
            </div>
        </div>
    )
}

export default Topbar