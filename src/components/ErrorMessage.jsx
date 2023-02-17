import React from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';
 
const ErrorMessage = ({ message }) => {
    return (
        <div className='w-full h-fit flex items-center overflow-hidden border border-l-0 border-slate-800 rounded-md'>
            <div className='w-12 h-12 grid place-items-center bg-accent-dark hover:bg-accent'>
                <MdOutlineErrorOutline className='text-dominant text-2xl' />
            </div>
            <p className='w-full px-4 py-3 text-sm text-dominant font-bold tracking-wider uppercase'>{ message }</p>
        </div> 
    );
};

export default ErrorMessage;