import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AllNotes from './pages/AllNotes';
import CreateNote from './pages/CreateNote';
import Trash from './pages/Trash';
import './app.css';

const App = () => {
    return (
        <BrowserRouter>
            <main className='w-full h-screen grid grid-cols-6 bg-background-primary'>
                <Sidebar />
                <section className='w-full h-full col-span-5'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<AllNotes />} />
                        <Route path='/create' element={<CreateNote />} />
                        <Route path='/trash' element={<Trash />} />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
};

export default App;