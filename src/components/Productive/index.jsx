import React from 'react';
import './styles.scss';
import IllustrationStayProductive from '../../images/illustration-stay-productive.png';
import IconArrow from '../../images/icon-arrow.svg';

export const Productive = () => {
	return (
		<div className="section_productive">
			<img src={IllustrationStayProductive} alt="Illustration Stay Productive" className="img_pro" />
			<section className="contet_section">
				<h3 className="title">Stay productive, wherever you are</h3>
				<p className="text">
					Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
				</p>
				<p className="text">
					Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
				</p>
				<a href="/" className="link">
					See how Fylo works
					<img src={IconArrow} alt="Icon Arrow" />
				</a>
			</section>
		</div>
	);
};
