import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__left">
				<div>
					<img className="footer__logo" src="examgo_logo.png" alt="logo" />
				</div>

				<div className="footer__feature">
					<div className="footer__top">
						<ul>
							<li>About</li>
							<li>Support</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className="footer__bottom">
						<span>© Team SE</span>
					</div>
				</div>
			</div>
			<div className="footer__right">
				<div className="footer__icon">
					<img src="facebook_icon.png" alt="Facebook icon" />
					<img src="gmail_icon.png" alt="Gmail icon" />
					<img src="github_icon.png" alt="Github icon" />
				</div>
				<div className="footer__speech">
					<span>Thank you!</span>
				</div>
			</div>
		</div>
	);
};

Footer.propTypes = {};

export default Footer;
