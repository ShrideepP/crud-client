import React from 'react';
import ErrorMessage from '../components/ErrorMessage';

const AllNotes = () => {
    return (
        <div className='w-full h-[87.5vh] overflow-y-scroll p-4 md:p-8 lg:p-12'>
            <ErrorMessage message="It looks like you haven't created any notes yet!!!" />
        </div>
    );
};

export default AllNotes;