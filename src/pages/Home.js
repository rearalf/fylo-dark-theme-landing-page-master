import React, { Fragment } from 'react';
import './Home.scss';
import { Nav } from '../components/Nav/index.jsx';
import { Header } from '../components/Header/index.jsx';
import { Services } from '../components/Services/index';

export const Home = () => {
	return (
		<Fragment>
			<header className="header">
				<Nav />
				<Header />
			</header>
			<Services />
		</Fragment>
	);
};
