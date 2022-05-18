import React from 'react';
const userInfo = {
	name: "Stone Worker",
	quote: "Yêu hoa lá thích bổ củi",
	email: "stoneworker123@gmail.com",
	phone: "03555777899",
	address: "Phường Linh Trung, Thủ Đức, TP.HCM",
	grade: 12,
	gender: 1,
}

const examsInfo = [
	{
		id: 1,
		name: "Đề thi thử THPT môn Lịch sử năm học 2021-2022",
		subject: "Lịch sử",
		completedTime: "22:34:49 15/05/2022 15 phút 25 giây",
		result: "Đúng: 40/40 Điểm: 10",
	},
	{
		id: 2,
		name: "Đề thi thử THPT môn Toán năm học 2021-2022",
		subject: "Toán",
		completedTime: "22:34:49 15/05/2022 15 phút 25 giây",
		result: "Đúng: 40/40 Điểm: 10",
	},
	{
		id: 3,
		name: "Đề thi thử THPT môn Lịch sử năm học 2021-2022 s2",
		subject: "Lịch sử",
		completedTime: "22:34:49 15/05/2022 15 phút 25 giây",
		result: "Đúng: 40/40 Điểm: 10",
	},
	{
		id: 4,
		name: "Đề thi thử THPT môn Lịch sử năm học 2021-2022 s1",
		subject: "Lịch sử",
		completedTime: "22:34:49 15/05/2022 15 phút 25 giây",
		result: "Đúng: 40/40 Điểm: 10",
	},
	{
		id: 5,
		name: "Đề thi thử THPT môn Lịch sử năm học 2021-2022 sss",
		subject: "Lịch sử",
		completedTime: "22:34:49 15/05/2022 15 phút 25 giây",
		result: "Đúng: 40/40 Điểm: 10",
	},
	{
		id: 6,
		name: "Đề thi thử THPT môn Lịch sử năm học 2021-2022 ss",
		subject: "Lịch sử",
		completedTime: "22:34:49 15/05/2022 15 phút 25 giây",
		result: "Đúng: 40/40 Điểm: 10",
	},
	{
		id: 10,
		name: "Đề thi thử THPT môn Lịch sử năm học 2021-2022 s",
		subject: "Lịch sử",
		completedTime: "22:34:49 15/05/2022 15 phút 25 giây",
		result: "Đúng: 40/40 Điểm: 10",
	},
]
function UserProfile(props) {
	const styleTableHeader = "px-2 py-1"
	const styleTableData = "py-1 px-2 border-b"
	const handlePaginationClick = () => {

	}

	return (
		<div className="px-12 flex flex-col sm:text-[16px] bg-[#ECF0F4] py-6">
			<div className="flex justify-between w-full">
				<div className="flex flex-col basis-[30%] md:min-h-full">
					<p className='font-bold text-red-400 mb-2'>Sơ lược</p>
					<div className="rounded-lg shadow-lg p-8 flex-1 bg-white">
						<div className='text-center mb-4'>
							<div className='relative flex justify-center'>
								<img className='h-full rounded-full' src="/logo192.png" alt="avatar" />
								<div className='absolute top-[10%] right-[20%] px-2 py-1 rounded-full bg-purple-400 border-purple text-white'>{userInfo.grade}</div>
								<div className='absolute top-[60%] right-[20%] px-2 rounded-full bg-orange-400 text-purple-800'>{userInfo.gender ? ">" : "<"}</div>
							</div>
							<p className='font-bold text-2xl'>{userInfo.name}</p>
							<p className='italic text-red-500'>{userInfo.quote}</p>

						</div>
						<div>
							<div className='flex items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								<span className='ml-8'>{userInfo.email}</span>
							</div>
							<div className='flex items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
								</svg>
								<span className='ml-8'>{userInfo.phone}</span>
							</div>
							<div className='flex items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
								</svg>
								<span className='ml-8'>{userInfo.address}</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:basis-[64%] md:min-h-full ">
					<p className='font-bold text-red-400 mb-2'>Thông tin cá nhân</p>
					<ul className="rounded-lg shadow-lg flex-1 bg-white">
						<li className="flex py-4 px-8 border-b">
							<div className='basis-[30%] font-semibold'>Họ và tên:</div>
							<div className='basis-[70%]'>{userInfo.name}</div>
						</li>
						<li className="flex py-4 px-8 border-b">
							<div className='basis-[30%] font-semibold'>Email</div>
							<div className='basis-[70%]'>{userInfo.email}</div>
						</li>
						<li className="flex py-4 px-8 border-b">
							<div className='basis-[30%] font-semibold'>Điện thoại:</div>
							<div className='basis-[70%]'>{userInfo.phone}</div>
						</li>
						<li className="flex py-4 px-8 border-b">
							<div className='basis-[30%] font-semibold'>Giới tính:</div>
							<div className='basis-[70%]'>{userInfo.gender ? "Nam" : "Nữ"}</div>
						</li>
						<li className="flex py-4 px-8 border-b">
							<div className='basis-[30%] font-semibold'>Khối:</div>
							<div className='basis-[70%]'>{userInfo.grade}</div>
						</li>
						<li className="flex py-4 px-8 border-b">
							<div className='basis-[30%] font-semibold'>Địa chỉ:</div>
							<div className='basis-[70%]'>{userInfo.address}</div>
						</li>
						<li className="flex py-4 px-8 border-b">
							<div className='basis-[30%] font-semibold'>Mô tả:</div>
							<div className='basis-[70%]'>{userInfo.quote}</div>
						</li>
					</ul>
					<button className="flex ml-auto mt-2 px-4 py-2 rounded bg-blue-500 text-white">
						Chỉnh sửa hồ sơ
					</button>
				</div>
			</div>
			<div className="flex justify-between mt-8 w-full ">
				<div className="basis-[30%]">
					<p className='font-bold text-red-400 mb-2'>Thành tích cá nhân</p>
					<ul className="rounded-lg shadow-lg p-8 bg-white">
						<li className="flex my-2">
							<p className='basis-[60%] font-semibold'>Số đề thi đã làm được:</p>
							<p>20</p>
						</li>
						<li className="flex my-2">
							<p className='basis-[60%] font-semibold'>Điểm trung bình:</p>
							<p>8.5</p>
						</li>
						<li className="flex my-2">
							<p className='basis-[60%] font-semibold'>Thời gian trung bình:</p>
							<p>30 phút 10 giây</p>
						</li>
						<li className="flex my-2">
							<p className='basis-[60%] font-semibold'>Thành tích tốt nhất:</p>
							<div>
								<div className='flex justify-between'>
									<span>10 điểm</span>
									<button className='px-2 bg-green-400 text-white rounded-lg'>Xem</button>
								</div>
								<p>15 phút 25 giây</p>
							</div>
						</li>
					</ul>
				</div>

				<div className="basis-[64%] min-h-full">
					<div className="flex">
						<p className='font-bold text-red-400 mb-2'>Danh sách đề thi đã làm</p>
						<ul className="flex flex-wrap ml-auto">
							<li>
								Môn học:
								<select className='ml-2'>
									<option label="Tất cả"></option>
									<option value="Toán">Toán</option>
									<option value="Lý">Lý</option>
									<option value="Hóa">Hóa</option>
									<option value="Sinh">Sinh</option>
									<option value="Anh">Anh</option>
									<option value="Lịch sử">Lịch sử</option>
									<option value="Địa lý">Địa lý</option>
									<option value="GDCD">GDCD</option>
								</select>
							</li>
							<li className='ml-4'>
								Sắp xếp theo:
								<select className='ml-2 outline-none'>
									<option value="Thời điểm hoàn thành">Thời điểm hoàn thành</option>
									<option value="Thời điểm hoàn thành">Điểm số</option>
									<option value="Thời điểm hoàn thành">Thời gian hoàn thành</option>
								</select>
							</li>
						</ul>
					</div>
					<table className="shadow-lg bg-white rounded-lg overflow-hidden">
						<thead className='bg-[#FFDE8A] rounded-lg'>
							<tr>
								<th className={styleTableHeader}>STT</th>
								<th className={styleTableHeader}>Đề thi</th>
								<th className={styleTableHeader}>Môn học</th>
								<th className={styleTableHeader}>Thời điểm hoàn thành Thời gian hoàn thành</th>
								<th className={styleTableHeader}>Kết quả</th>
								<th className={styleTableHeader}></th>
							</tr>
						</thead>
						<tbody>

							{examsInfo.length > 0 &&
								examsInfo.map((exam, index) => {
									return (
										<tr key={exam.id}>
											<td className={`${styleTableData} text-center`}>{index + 1}</td>
											<td className={styleTableData}>{exam.name}</td>
											<td className={styleTableData}>{exam.subject}</td>
											<td className={styleTableData}>{exam.completedTime}</td>
											<td className={styleTableData}>{exam.result}</td>
											<td className={styleTableData}>
												<button className='bg-green-500 px-2 py-1 rounded-lg text-white'>Xem chi tiết</button>
											</td>
										</tr>
									)
								})}
						</tbody>

					</table>
					{examsInfo.length > 5 &&
						<div className="flex items-center justify-center mt-6">
							<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 text-sky-600 font-semibold">Prev</button>
							<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 font-bold bg-indigo-600 text-white">1</button>
							<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 font-bold">2</button>
							<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 font-bold">3</button>
							<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 font-bold">4</button>
							<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded text-sky-600 font-semibold">Next</button>
						</div>
					}

				</div>
			</div>
		</div>
	);
}

export default UserProfile;
