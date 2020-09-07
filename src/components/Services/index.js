import React from 'react';
import './styles.scss';
import IconSecurity from '../../images/icon-security.svg';
import IconAnyFile from '../../images/icon-any-file.svg';
import IconAccessAnyWhere from '../../images/icon-access-anywhere.svg';
import IconCollaboration from '../../images/icon-collaboration.svg';

export const Services = () => {
	return (
		<div className="section_services">
			<article className="service_article">
				<img src={IconAccessAnyWhere} alt="Icon Access AnyWhere" className="service_img" />
				<h3 className="title">Access your files, anywhere</h3>
				<p className="text">
					The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
				</p>
			</article>
			<article className="service_article">
				<img src={IconSecurity} alt="Icon Security" className="service_img" />
				<h3 className="title">Security you can trust</h3>
				<p className="text">
					2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your
					files.
				</p>
			</article>
			<article className="service_article">
				<img src={IconCollaboration} alt="Icon Collaboration" className="service_img" />
				<h3 className="title">Real-time collaboration</h3>
				<p className="text">
					Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
				</p>
			</article>
			<article className="service_article">
				<img src={IconAnyFile} alt="Icon Any File" className="service_img" />
				<h3 className="title">Store any type of file</h3>
				<p className="text">
					Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored
					and shared.
				</p>
			</article>
		</div>
	);
};
