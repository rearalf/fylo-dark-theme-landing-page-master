import React, { Fragment } from 'react';
import Logo from '../../images/logo.svg';
import './styles.scss';

export const Nav = () => {
	return (
		<Fragment>
			<nav className="navbar">
				<a href="/" className="brand">
					<img src={Logo} alt="Logo" />
				</a>
				<ul className="navbar_nav">
					<li className="nav_item">
						<a href="/" className="nav_link">
							Features
						</a>
					</li>
					<li className="nav_item">
						<a href="/" className="nav_link">
							Team
						</a>
					</li>
					<li className="nav_item">
						<a href="/" className="nav_link">
							Sign In
						</a>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};
