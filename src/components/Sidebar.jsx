import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdNotes, MdAddCircleOutline } from 'react-icons/md';
 
const Sidebar = () => {

    const activeStyle = ({ isActive }) => {
        return {
            backgroundColor: isActive ? '#1e293b' : 'transparent',
        };
    };

    return (
        <aside className='w-full h-full col-span-1 px-2 bg-background-secondary border-r border-slate-800'>
            <div className='w-full h-[12.5vh] grid place-items-center'>
                <h1 className='text-2xl font-extrabold uppercase'>
                    <span className='text-dominant'>take</span> <span className='text-accent'>Notes</span>
                </h1>
            </div>
            <div>
                <NavLink style={activeStyle} className="w-full px-4 py-3 flex items-center gap-x-6 rounded-md" to='/'>
                    <MdNotes className='text-accent text-xl' />
                    <span className='text-xs text-dominant font-bold tracking-wider uppercase'>Notes</span>
                </NavLink>
                <NavLink style={activeStyle} className="w-full px-4 py-3 flex items-center gap-x-6 rounded-md" to='/create'>
                    <MdAddCircleOutline className='text-accent text-xl' />
                    <span className='text-xs text-dominant font-bold tracking-wider uppercase'>Create New</span>
                </NavLink>
            </div>
        </aside>
    );

};

export default Sidebar;