import React from 'react';
import { Search } from '@mui/icons-material';
import bell from '../../Assets/bell.png';
import line from '../../Assets/divider.svg';
import user from '../../Assets/user.svg';
import { useLocation } from 'react-router-dom';

function Header({ mobileOpen }) {
	const { pathname } = useLocation();
	return (
		<div>
			<div className="bg-[#F7F8FC] ">
				<div className="flex justify-between items-center text-[#252733] py-1 md:py-6 px-4">
					<div className="hidden md:flex text-center">
						{mobileOpen ? null : (
							<h1 className="font-extrabold text-3xl text-left text-[#252733]">
								{pathname === '/' ? 'Overview' : 'Tickets'}
							</h1>
						)}
					</div>

					<div className="">
						<div className="hidden lg:flex gap-6 items-center justify-center align-middle">
							<form className="">
								<div className="bg-transparent flex justify-center mx-auto text-gray-600">
									<input
										className="border-2 border-none bg-transparent h-5 px-2 pr-4 rounded-lg text-sm focus:outline-none focus:border border-cyan-800"
										type="search"
										placeholder=""
									/>
									<button type="submit" className="">
										<Search fontSize="small" />
									</button>
								</div>
							</form>

							<img src={bell} alt="bell" />
							<img src={line} alt="line" />
							<div className="inline-flex items-center gap-4 font-semibold">
								Jones Ferdinand
								<img
									src={user}
									alt="user"
									className="border-2 rounded-full border-white"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
