import React from 'react';

function UserProfile(props) {
	return (
		<div className="mx-12 flex flex-col">
			<div className="flex justify-between w-full ">
				<div className="basis-[30%]">
					<p>Sơ lược</p>
					<div className="shadow-2xl">
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

				<div className="flex flex-col basis-[60%] min-h-full">
					<p>Thông tin cá nhân</p>
					<ul className="shadow-2xl flex-1">
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
					<ul className="shadow-2xl">
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
					<div className="flex">
						<p>Danh sách đề thi đã làm</p>
						<ul className="flex flex-wrap ml-auto">
							<li>
								Môn học:
								<select>
									<option label="Tất cả"></option>
								</select>
							</li>
							<li>
								Sắp xếp theo:
								<select>
									<option label="Thời điểm hoàn thành"></option>
								</select>
							</li>
						</ul>
					</div>
					<table className="shadow-2xl">
						<tr>
							<th>STT</th>
							<th>Đề thi</th>
							<th>Môn học</th>
							<th>Thời điểm hoàn thành Thời gian hoàn thành</th>
							<th>Kết quả</th>
						</tr>
						<tr>
							<td>1</td>
							<td>Đề thi thử THPT môn Lịch sử năm học 2021-2022</td>
							<td>Lịch sử</td>
							<td>22:34:49 15/05/2022 15 phút 25 giây</td>
							<td>Đúng: 40/40 Điểm: 10</td>
							<td>
								<button>Xem chi tiết</button>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Đề thi thử THPT môn Toán năm học 2021-2022</td>
							<td>Toán</td>
							<td>22:34:49 15/05/2022 15 phút 25 giây</td>
							<td>Đúng: 40/40 Điểm: 10</td>
							<td>
								<button>Xem chi tiết</button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Đề thi thử THPT môn Toán năm học 2021-2022</td>
							<td>Toán</td>
							<td>22:34:49 15/05/2022 15 phút 25 giây</td>
							<td>Đúng: 40/40 Điểm: 10</td>
							<td>
								<button>Xem chi tiết</button>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Đề thi thử THPT môn Toán năm học 2021-2022</td>
							<td>Toán</td>
							<td>22:34:49 15/05/2022 15 phút 25 giây</td>
							<td>Đúng: 40/40 Điểm: 10</td>
							<td>
								<button>Xem chi tiết</button>
							</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Đề thi thử THPT môn Toán năm học 2021-2022</td>
							<td>Toán</td>
							<td>22:34:49 15/05/2022 15 phút 25 giây</td>
							<td>Đúng: 40/40 Điểm: 10</td>
							<td>
								<button>Xem chi tiết</button>
							</td>
						</tr>
					</table>
					<div className="flex items-center justify-center">
						<button className="px-2 py-1 bg-white border rounded-lg mr-1">Prev</button>
						<button className="px-2 py-1 bg-white border rounded-lg mr-1">1</button>
						<button className="px-2 py-1 bg-white border rounded-lg mr-1">2</button>
						<button className="px-2 py-1 bg-white border rounded-lg mr-1">3</button>
						<button className="px-2 py-1 bg-white border rounded-lg mr-1">4</button>
						<button className="px-2 py-1 bg-white border rounded-lg">Next</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
