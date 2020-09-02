import React from 'react';
import './styles.scss';
import Profile1 from '../../images/profile-1.jpg';
import Profile2 from '../../images/profile-2.jpg';
import Profile3 from '../../images/profile-3.jpg';
import BgQuotes from '../../images/bg-quotes.png';

export const Opinions = () => {
	const opinions = [
		{
			name: 'Satish Patel',
			position: 'Founder & CEO, Huddle',
			opinion:
				'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
			photo: Profile1,
		},
		{
			name: 'Bruce McKenzie',
			position: 'Founder & CEO, Huddle',
			opinion:
				'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
			photo: Profile2,
		},
		{
			name: 'Iva Boyd',
			position: 'Founder & CEO, Huddle',
			opinion:
				'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
			photo: Profile3,
		},
	];

	const article_opinion = () => {
		return opinions.map((opinion, index) => {
			return (
				<article className="article_opinion" key={index}>
					<p className="text">{opinion.opinion}</p>
					<div className="profile_article">
						<img src={opinion.photo} className="profile" alt={opinion.name} />
						<hgroup className="author">
							<h6 className="title">{opinion.name}</h6>
							<sub>{opinion.position}</sub>
						</hgroup>
					</div>
				</article>
			);
		});
	};

	return (
		<div className="section_opinions">
			<img src={BgQuotes} alt="Bg Quotes" className="bg_quotes" />
			{article_opinion()}
		</div>
	);
};
