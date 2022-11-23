import React from 'react';
import logo from '../assets/afaire.png'

const Accueil = () => {
return (
	<div style={{
		display: 'flex',
		alignItems: 'center',
		height: '100vh',
		flexDirection: 'column',
	}}>
		<h1>Découvrir l'API</h1>
		<img src={logo}/>
	</div>
);
};

export default Accueil;
