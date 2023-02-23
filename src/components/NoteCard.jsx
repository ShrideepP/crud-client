import React from 'react';
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

const NoteCard = ({ id, title, details, createdAt }) => {

    const deleteNote = async () => {
        try {
            await axios.delete(`${process.env.BACKEND_URL}note/${id}`)
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <div className='w-full p-2 md:p-4 bg-background-secondary border border-slate-800 rounded-md'>
            <div className='mb-2 pb-2 flex justify-between flex-wrap gap-2 border-b border-slate-800'>
                <div>
                    <h4 className='text-lg text-dominant font-bold underline'>{ title }</h4>
                    <span className='text-xs text-compliment font-semibold tracking-wider uppercase'>{ createdAt.slice(0,10) }</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <Link to={`/edit/${id}`}>
                        <button type='button' className='w-8 h-8 grid place-items-center text-accent-dark text-lg border border-accent-dark rounded-md'>
                            <MdOutlineModeEdit />
                        </button>
                    </Link>
                    <button onClick={() => deleteNote(id)} type='button' className='w-8 h-8 grid place-items-center text-accent-dark text-lg border border-accent-dark rounded-md'>
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
            <div>
                <p className='text-sm text-compliment font-medium'>{ details }</p>
            </div>
        </div>
    );

};

export default NoteCard;