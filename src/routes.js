import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import Error404 from './Components/Error/404';
import Portafolio from './Components/Portafolio/Portafolio';
import Contact from './Components/Contact/Contact';
import Notes from './Components/Notes/Notes';
import Calculator from './Components/Calculator/Calculator';
import Estafa from './Components/Estafa/Estafa';
import Pomodoro from './Components/pomodoro/Timer';

const  AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portafolio' element={<Portafolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/portafolio/estafa' element={<Estafa />} />
            <Route path='/portafolio/calculator' element={<Calculator />} />
            <Route path='/portafolio/pomodoro' element={<Pomodoro />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;