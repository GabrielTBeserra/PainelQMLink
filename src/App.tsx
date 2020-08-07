import 'react-calendar-heatmap/dist/styles.css';

import React /*, { useState }*/ from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { ThemeProvider } from 'styled-components';
import Infos from './Pages/Infos';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Infos />} />
      </Routes>

      {/*<Footer />*/}

      {/*<GlobalStyles />*/}
    </BrowserRouter>
  );
}

export default App;
