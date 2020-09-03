import React, { Fragment } from 'react';
import './styles.scss';
import BgDesk from '../../images/bg-curvy-desktop.svg';
import BgMovil from '../../images/bg-curvy-mobile.svg';
import Illustration from '../../images/illustration-intro.png';
import { Button } from '../Button/index';

export const Header = () => {
	const renderBg = screen.width < 1024 ? BgMovil : BgDesk;

	return (
		<Fragment>
			<div className="head">
				<img src={Illustration} alt="Illustration" className="illustration" />
				<div className="head_content">
					<h1 className="title">All your files in one secure location, accessible anywhere.</h1>
					<p className="text">
						Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with
						friends family, and co-workers.
					</p>
					<Button title="Get Started" />
				</div>
			</div>
			<img src={renderBg} alt="Bg" className="bg_bottom" />
		</Fragment>
	);
};
