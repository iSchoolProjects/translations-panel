import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Homepage from './homepage';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    );
}
