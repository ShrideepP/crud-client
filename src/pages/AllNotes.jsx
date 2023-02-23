import React from 'react';
import Notes from '../components/Notes';

const AllNotes = () => {

    return (
        <section className='w-full h-screen overflow-y-scroll p-4 md:p-8 lg:p-12'>
            <Notes />
        </section>
    );

};

export default AllNotes;