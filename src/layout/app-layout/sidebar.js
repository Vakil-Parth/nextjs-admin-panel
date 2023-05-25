import React, { useRef } from 'react';
import Nav from './sidebar/Nav';
import SettingButton from './sidebar/SettingButton';
import Logo from './sidebar/Logo';
import OutsideClick from '@/utils/outsideClick';

const Sidebar = ({mobileNavsidebar}) => {
    const sidebarRef = useRef(null);
    const sidebarOutsideClick = OutsideClick(sidebarRef);

    return (
        <aside className={`${mobileNavsidebar ? 'block' : 'hidden'} sm:flex sm:flex-col z-50`} ref={sidebarRef}>
            <Logo />
            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                <Nav sidebarOutsideClick={sidebarOutsideClick} />
                <SettingButton />
            </div>
        </aside>
    );
};

export default Sidebar;