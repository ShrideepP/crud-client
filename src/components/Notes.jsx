import React, { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';
import Masonry from 'react-masonry-css';
import NoteCard from './NoteCard';
import axios from 'axios';

const Notes = () => {

    const [notes, setnotes] = useState([]);
    const allNotes = notes.map(note => {
        return <NoteCard key={note._id} id={note._id} title={note.title} details={note.details} createdAt={note.createdAt} />
    });

    const breakpoints = {
        default: 3,
        1024: 2,
        768: 1,
    };

    const getPosts = async () => {
        await axios.get("https://m-fqmf.onrender.com/all")
            .then(response => {
                setnotes(response.data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getPosts();
    }, [notes]);

    return (
        notes.length
        ?
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            { allNotes }
        </Masonry>
        :
        <ErrorMessage message="It looks like you haven't created any notes yet!!!" />
    );

};

export default Notes;