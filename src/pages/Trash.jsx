import React from 'react';
import ErrorMessage from '../components/ErrorMessage';

const Trash = () => {
    return (
        <div className='w-full h-[87.5vh] overflow-y-scroll p-4 md:p-8 lg:p-12'>
            <ErrorMessage message="No notes in the trash. Your deleted notes will appear here and can be restored or permanently deleted." />
        </div>
    );
};

export default Trash;