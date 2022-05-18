import React from 'react';

function UserProfile(props) {
	return (
		<div className="flex flex-col">
			<div className="flex justify-between w-full ">
				<div className="basis-[30%]">
					<p>Sơ lược</p>
					<div className="shadow-lg">
						<div>
							<img src="/logo192.png" alt="avatar" />
							<p>Stone Worker</p>
							<p>Yêu hoa lá thích bổ củi</p>
						</div>
						<div>
							<p>thisisaemali@gmail.com</p>
							<p>thisisaemali@gmail.com</p>
							<p>thisisaemali@gmail.com</p>
						</div>
					</div>
				</div>

				<div className="basis-[60%] min-h-full">
					<p>Thông tin cá nhân</p>
					<ul className="shadow-lg">
						<li className="flex">
							<p>Họ và tên</p>
							<p>Stone Walker</p>
						</li>
						<li className="flex">
							<p>Email</p>
							<p>stoneworker123@gmail.com</p>
						</li>
						<li className="flex">
							<p>Điện thoại:</p>
							<p>0337777777</p>
						</li>
						<li className="flex">
							<p>Giới tính:</p>
							<p>Nam</p>
						</li>
						<li className="flex">
							<p>Khối:</p>
							<p>12</p>
						</li>
						<li className="flex">
							<p>Địa chỉ:</p>
							<p>Phường Linh Trung, Thủ Đức, TP.HCM</p>
						</li>
						<li className="flex">
							<p>Mô tả:</p>
							<p>Yêu hoa lá, thích bổ củi</p>
						</li>
					</ul>
					<button className="flex ml-auto px-4 py-2 bg-blue-500 text-white">
						Chỉnh sửa
					</button>
				</div>
			</div>
			<div className="flex justify-between mt-8 w-full ">
				<div className="basis-[30%]">
					<p>Thành tích cá nhân</p>
					<ul className="shadow-lg">
						<li className="flex">
							<p>Số đề thi đã làm được</p>
							<p>20</p>
						</li>
						<li className="flex">
							<p>Điểm trung bình:</p>
							<p>8.5</p>
						</li>
						<li className="flex">
							<p>Thời gian trung bình:</p>
							<p>30 phút 10 giây</p>
						</li>
						<li className="flex">
							<p>Thành tích tốt nhất:</p>
							<div>
								<p>10 điểm</p>
								<p>15 phút 25 giây</p>
							</div>
						</li>
					</ul>
				</div>

				<div className="basis-[60%] min-h-full">
					<p>Thông tin cá nhân</p>
					<ul className="shadow-lg">
						<li className="flex">
							<p>Họ và tên</p>
							<p>Stone Walker</p>
						</li>
						<li className="flex">
							<p>Email</p>
							<p>stoneworker123@gmail.com</p>
						</li>
						<li className="flex">
							<p>Điện thoại:</p>
							<p>0337777777</p>
						</li>
						<li className="flex">
							<p>Giới tính:</p>
							<p>Nam</p>
						</li>
						<li className="flex">
							<p>Khối:</p>
							<p>12</p>
						</li>
						<li className="flex">
							<p>Địa chỉ:</p>
							<p>Phường Linh Trung, Thủ Đức, TP.HCM</p>
						</li>
						<li className="flex">
							<p>Mô tả:</p>
							<p>Yêu hoa lá, thích bổ củi</p>
						</li>
					</ul>
					<button className="flex ml-auto px-4 py-2 bg-blue-500 text-white">
						Chỉnh sửa
					</button>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
