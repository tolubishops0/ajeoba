import React from 'react';
import logo from '../../Assets/logo.png';

function Logo() {
	return (
		<div>
			<div className="flex items-center align-middle px-3 gap-x-4 mt-8 sm:mt-67">
				<img src={logo} alt="logo" />
				<p className="font-extrabold text-2xl text-[#A4A6B3]">Dashboard Kit</p>
			</div>
		</div>
	);
}

export default Logo;
