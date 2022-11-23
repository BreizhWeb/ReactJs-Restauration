import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil';
import Aliments from './pages/aliments';
import Plats from './pages/plats';

function App() {
return (
	<Router>
	<Navbar />
    <Routes>
      <Route path='/' exact element={<Accueil/>} />
      <Route path='/aliments' element={<Aliments/>} />
      <Route path='/plats' element={<Plats/>} />
    </Routes>
	</Router>
);
}

export default App;
