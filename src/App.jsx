import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AllNotes from './pages/AllNotes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';

const App = () => {
    return (
        <BrowserRouter>
            <main className='w-full h-screen grid grid-cols-6 bg-background-primary'>
                <Sidebar />
                <section className='w-full h-full col-span-5'>
                    <Routes>
                        <Route path='/' element={<AllNotes />} />
                        <Route path='/create' element={<CreateNote />} />
                        <Route path='/edit/:id' element={<EditNote />} />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
};

export default App;