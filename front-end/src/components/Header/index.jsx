import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Header = () => {
	return (
		<div className="header">
			<img
				className="header__logo"
				src={window.location.origin + "/images/examgo_logo.png"}
				alt="logo"
			/>
			<div className="header__feature">
				<ul>
					<li>About</li>
					<li>Courses</li>
					<li>Pricing</li>
				</ul>
			</div>
			<div className="header__auth">
				<button className="header__login">
					<span>Login</span>
				</button>
				<button className="header__signup">
					<span>Sign up</span>
				</button>
			</div>
		</div>
	);
};

Header.propTypes = {};

export default Header;
