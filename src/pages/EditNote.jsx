import React, { useState, useEffect } from 'react';
import { MdTitle, MdSend } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';

const EditNote = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(false);
    const [loading, setLoading] = useState(false);

    const getNote = async () => {
        await axios.get(`https://m-fqmf.onrender.com/note/${id}`)
            .then(response => setNote(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getNote();
    }, []);

    const handleSubmit = async e => {

        e.preventDefault();
        setLoading(true);

        await axios.put(`https://m-fqmf.onrender.com/note/${id}`, JSON.stringify(note), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setTimeout(() => {
                    setLoading(false); 
                    navigate("/");
                }, 1000);
            })
            .catch(error => {
                setTimeout(() => {
                    setLoading(false);
                    toast.error("Oops! Something went wrong."); 
                }, 1000);
                console.log(error);
            });

    };

    return (
        <div className='w-full p-4 md:p-8 lg:p-12'>
            <ToastContainer
                position='bottom-center'
                autoClose={5000}
                theme="dark" 
            />
            <div className='space-y-2 mb-6'>
                <h2 className='text-2xl text-dominant font-extrabold tracking-wider uppercase'>Edit Note</h2>
                <hr className='w-28 h-[2px] border-none bg-accent-dark rounded' />
            </div>
            <form autoComplete='off' onSubmit={ handleSubmit } className='space-y-4'>
                <div className='w-full h-fit flex items-center overflow-hidden border border-r-0 border-slate-800 rounded-md'>
                    <input onChange={e => setNote({...note, title: e.target.value })} value={ note && note.title } required type="text" name="title" placeholder='Note Title' className='w-full px-4 py-3 text-sm text-dominant font-semibold tracking-wider placeholder:text-compliment placeholder:font-bold placeholder:uppercase bg-transparent outline-none' />
                    <div className='w-12 h-12 grid place-items-center bg-accent-dark hover:bg-accent'>
                        <MdTitle className='text-dominant text-2xl' />
                    </div>
                </div>
                <div className='w-full h-fit flex items-center overflow-hidden border border-r-0 border-slate-800 rounded-md'>
                    <input onChange={ e => setNote({...note, details: e.target.value }) } value={ note && note.details } required type="text" name="details" placeholder='Note Details' className='w-full px-4 py-3 text-sm text-dominant font-semibold tracking-wider placeholder:text-compliment placeholder:font-bold placeholder:uppercase bg-transparent outline-none' />
                    <div className='w-12 h-12 grid place-items-center bg-accent-dark hover:bg-accent'>
                        <BiDetail className='text-dominant text-2xl' />
                    </div>
                </div>
                <button type='submit' className='w-full px-4 py-3 flex justify-between items-center bg-accent-dark hover:bg-accent rounded-md'>
                    {
                        loading
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

export default EditNote;