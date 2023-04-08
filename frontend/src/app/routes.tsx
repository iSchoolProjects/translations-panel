import {Route, Routes} from 'react-router-dom';
import React from 'react';
import LanguagePage from './language';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/language" element={<LanguagePage />} />
    </Routes>
  );
}
