import React from 'react';

const Header = () => {
    return (
        <nav className='w-full h-[12.5vh] px-4 md:px-8 lg:px-12 flex justify-between items-center bg-background-secondary border-b border-slate-800'>
            <p className='text-sm text-dominant font-bold tracking-wider uppercase'>
                Today is 12th February 2023
            </p>
            <div className='w-14 h-14 relative overflow-hidden border-2 border-slate-800 rounded-full'>
                <img src="/images/dummy-user.jpg" alt="user" className='w-full h-full absolute object-cover' />
            </div>
        </nav>
    );
};

export default Header;