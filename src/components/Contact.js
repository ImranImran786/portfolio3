// Contact.js 
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } 
	from '@fortawesome/free-brands-svg-icons'; 
import './style.css'; 

const Contact = () => { 

	return ( 
		<section id="contact" className="container"> 
			<h2 className="section-title">Contact</h2> 
			<p className="section-description"> 
				Feel free to reach out for
				collaboration or inquiries. 
			</p> 
			<ul className="contact-list list-unstyled"> 
				<li> 
					<FontAwesomeIcon icon={faEnvelope} 
						className="contact-icon" /> 
					<a href='https://www.youtube.com/channel/UCBBTIqn2nTWQqvX0TmNLpIA'>ExpertCollege@gmail.com </a>
					
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLinkedin} 
						className="contact-icon" />
					LinkedIn 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faGithub} 
						className="contact-icon" />
						<a href='https://github.com/'>GitHub</a>
					 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faPhone} 
						className="contact-icon" /> 
					03045035027
				</li> 
			</ul> 
		</section> 
	); 
}; 

export default Contact;
