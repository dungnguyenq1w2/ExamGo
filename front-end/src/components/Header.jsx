import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const [menu, setMenu] = useState(false);

	return (
		<div
			style={{ fontFamily: 'Yanone Kaffeesatz' }}
			className="relative flex flex-nowrap items-center justify-between my-[10px] mx-[10px] py-[5px] px-[10px] lg:my-[20px] lg:mx-[10px] xl:my-[40px] xl:mx-[75px]"
		>
			<Link to="/">
				<img
					className="h-[25px] mb-[10px] md:h-[25px] lg:h-[30px]"
					src={window.location.origin + '/images/examgo_logo.png'}
					alt="logo"
				/>
			</Link>

			<div
				className={`${
					menu
						? 'bg-white absolute top-1 left-1/2 -translate-x-1/2 border p-10 w-4/5 shadow-lg'
						: 'hidden'
				} md:shadow-none md:relative md:top-0 md:left-0 md:translate-x-0 md:border-none md:p-0 md:w-full md:flex md:flex-1 md:flex-nowrap md:items-center md:justify-between`}
			>
				<div className="flex flex-col-reverse md:flex-row md:flex-0.5 lg:flex-grow-0 md:items-center">
					<div className="mt-5 md:mt-0 text-lg sm:text-[20px] lg:text-xl md:mr-0 lg:mr-6">
						<ul className="md:list-none md:flex md:justify-start md:p-0 md:m-0 md:ml-[10px]">
							<li className="flex justify-center group relative cursor-pointer mx-[10px] py-2 md:py-0 lg:mx-[15px]">
								Đề thi
								<span className="absolute bottom-0 left-0 bg-blue-500 w-full h-1 opacity-0 group-hover:opacity-100 group-hover:transition-all"></span>
							</li>
							<li className="flex justify-center group relative cursor-pointer mx-[10px] py-2 md:py-0 lg:mx-[15px]">
								Giới thiệu
								<span className="absolute bottom-0 left-0 bg-blue-500 w-full h-1 opacity-0 group-hover:opacity-100 group-hover:transition-all"></span>
							</li>
							<li className="flex justify-center group relative cursor-pointer mx-[10px] py-2 md:py-0 lg:mx-[15px]">
								Khóa học
								<span className="absolute bottom-0 left-0 bg-blue-500 w-full h-1 opacity-0 group-hover:opacity-100 group-hover:transition-all"></span>
							</li>
						</ul>
					</div>
					<div className="flex flex-1 border boder-black rounded-full pl-3 lg:pl-3 xl:pl-5">
						<input
							className="w-full text-base md:w-32 md:text-sm lg:w-52 lg:text-base xl:w-80 outline-none border-0 font-sans"
							type="text"
							placeholder="Tên đề thi ..."
						/>
						<IconButton color="primary">
							<SearchIcon />
						</IconButton>
					</div>
				</div>
				<div className="flex justify-center mt-5 md:mt-0 md:justify-end">
					<button
						onClick={() => navigate('/auth/signin', { replace: true })}
						className="border border-yellow-400 mx-1 min-w-20 py-1 px-4 sm:px-8 text-lg sm:text-xl md:px-4 md:text-lg lg:px-8 lg:text-xl rounded-full text-center cursor-pointer transition-all hover:bg-yellow-300 hover:text-white hover:border-white hover:shadow-sm"
					>
						<span>Đăng nhập</span>
					</button>
					<button
						onClick={() => navigate('/auth/signup', { replace: true })}
						className="bg-blue-500 text-white mx-1 min-w-20 py-1 px-4 sm:px-8 text-lg sm:text-xl md:px-4 md:text-lg lg:px-8 lg:text-xl rounded-full text-center cursor-pointer transition-all hover:bg-blue-600 hover:shadow-sm"
					>
						<span>Đăng ký</span>
					</button>
				</div>
			</div>
			<div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
				<MenuIcon />
			</div>
		</div>
	);
};

Header.propTypes = {};

export default Header;
