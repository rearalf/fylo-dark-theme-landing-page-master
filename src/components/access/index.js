import React from 'react';
import './styles.scss';
import { Button } from '../Button';

export const Access = () => {
	return (
		<div className="access_cover">
			<section className="access_section">
			<h3 className="title">Get early access today</h3>
			<p className="text">
				It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would
				be happy to help you.
			</p>
			<form className="form_started">
				<input type="email" className="input_email" placeholder="email@example.com" name="email" />
				<Button title='Get Started For Free' />
			</form>
		</section>
		</div>
	);
};
