// Footer.js 
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faTwitter } 
	from '@fortawesome/free-brands-svg-icons'; 
import './style.css';

const Footer = () => { 
return ( 
	<footer className="footer"> 
	<div className="container"> 
		<div className="row"> 
		<div className="col-md-6"> 
			<p>2024 Expert College. All rights reserved.</p> 
		</div> 
		<div className="col-md-6 text-md-right"> 
			<ul className="social-icons list-unstyled"> 
			<li> 
				<a href="#" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faLinkedin} /> 
				</a> 
			</li> 
			<li> 
				<a href="#" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faGithub} /> 
				</a> 
			</li> 
			<li> 
				<a href="#" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faTwitter} /> 
				</a> 
			</li> 
			</ul> 
		</div> 
		</div> 
	</div> 
	</footer> 
); 
}; 

export default Footer;
