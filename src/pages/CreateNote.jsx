import React, { useState } from 'react';
import { MdTitle, MdSend } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateNote = () => {

    const [noteData, setNoteData] = useState({ title: '', details: '' });
    const [noteSubmit, setNoteSubmit] = useState(false);

    const handleSubmit = async e => {

        e.preventDefault();
        setNoteSubmit(true);

        await axios.post("http://localhost:3000/add", noteData)
            .then(response => {
                setNoteData({ title: '', details: '' });
                setNoteSubmit(false);
                toast.success("Your note has been successfully submitted!!!")
            })
            .catch(error => {
                setNoteSubmit(false);
                setNoteData({ title: '', details: '' });
                toast.error("Oops! Something went wrong.");
            });

    };

    const handleTitle = e => {
        setNoteData({ ...noteData, title: e.target.value });
    };

    const handleDetails = e => {
        setNoteData({ ...noteData, details: e.target.value });
    };

    return (
        <div className='w-full p-4 md:p-8 lg:p-12'>
            <ToastContainer
                position='bottom-center'
                autoClose={5000}
                theme="dark" 
            />
            <div className='space-y-2 mb-6'>
                <h2 className='text-2xl text-dominant font-extrabold tracking-wider uppercase'>Create a Note</h2>
                <hr className='w-28 h-[2px] border-none bg-accent-dark rounded' />
            </div>
            <form autoComplete='off' onSubmit={ handleSubmit } className='space-y-4'>
                <div className='w-full h-fit flex items-center overflow-hidden border border-r-0 border-slate-800 rounded-md'>
                    <input onChange={ handleTitle } value={ noteData.title } required type="text" name="title" placeholder='Note Title' className='w-full px-4 py-3 text-sm text-dominant font-semibold tracking-wider placeholder:text-compliment placeholder:font-bold placeholder:uppercase bg-transparent outline-none' />
                    <div className='w-12 h-12 grid place-items-center bg-accent-dark hover:bg-accent'>
                        <MdTitle className='text-dominant text-2xl' />
                    </div>
                </div>
                <div className='w-full h-fit flex items-center overflow-hidden border border-r-0 border-slate-800 rounded-md'>
                    <input onChange={ handleDetails } value={ noteData.details } required type="text" name="details" placeholder='Note Details' className='w-full px-4 py-3 text-sm text-dominant font-semibold tracking-wider placeholder:text-compliment placeholder:font-bold placeholder:uppercase bg-transparent outline-none' />
                    <div className='w-12 h-12 grid place-items-center bg-accent-dark hover:bg-accent'>
                        <BiDetail className='text-dominant text-2xl' />
                    </div>
                </div>
                <button type='submit' className='w-full px-4 py-3 flex justify-between items-center bg-accent-dark hover:bg-accent rounded-md'>
                    {
                        noteSubmit
                        ?
                        <>
                            <span className='text-sm text-dominant font-bold tracking-wider uppercase'>Loading...</span>
                            <AiOutlineLoading3Quarters className='text-dominant text-2xl animate-spin' />
                        </>
                        :
                        <>
                            <span className='text-sm text-dominant font-bold tracking-wider uppercase'>Submit</span>
                            <MdSend className='text-dominant text-2xl' />
                        </>
                    }
                </button>
            </form>
        </div>
    );

};

export default CreateNote;