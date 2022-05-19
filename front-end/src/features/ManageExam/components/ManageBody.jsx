import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ManageBody({ examList, handleDeleteExam }) {
	const navigate = useNavigate();
	return (
		<div className="flex-1 lg:flex-[0.8]">
			<div className="flex items-center justify-between bg-gray-100 p-6">
				<div className="bg-white flex w-80 border boder-black rounded-full pl-3 lg:pl-3 xl:pl-5">
					<input
						className="text-base bg-transparent w-full lg:text-base outline-none border-0 font-sans"
						type="text"
						placeholder="Tên đề thi quản lý ..."
					/>
					<IconButton color="primary">
						<SearchIcon />
					</IconButton>
				</div>
				<div className="flex">
					<div className="flex justify-center mr-6">
						<div className="mb-3 xl:w-20">
							<select
								name="year"
								id="year"
								className="form-select block w-20 px-3
								py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
								bg-no-repeat border border-solid border-gray-300 rounded transition
								ease-in-out m-0 focus:text-gray-700 focus:bg-white
								focus:border-blue-600 focus:outline-none"
								aria-label="Default select
								example"
							>
								<option defaultValue>Year</option>
								<option value="1">2018</option>
								<option value="2">2019</option>
								<option value="3">2020</option>
								<option value="4">2021</option>
								<option value="5">2022</option>
							</select>
						</div>
					</div>
					<div className="flex justify-center ">
						<div className="mb-3 xl:w-24">
							<select
								name="year"
								id="year"
								className="form-select block w-24 px-3
								py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
								bg-no-repeat border border-solid border-gray-300 rounded transition
								ease-in-out m-0 focus:text-gray-700 focus:bg-white
								focus:border-blue-600 focus:outline-none"
								aria-label="Default select
								example"
							>
								<option defaultValue>Sort</option>
								<option value="1">A - Z</option>
								<option value="2">Name</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col m-10 border shadow-md">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full">
								<thead className="bg-white border-b">
									<tr>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
										>
											#
										</th>

										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
										>
											Thông tin đề thi
										</th>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
										>
											Xử lý
										</th>
									</tr>
								</thead>
								{examList &&
									examList.map((e, i) => (
										<tbody key={e.id}>
											<tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
												<td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
													{i + 1}
												</td>

												<td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
													<div className="mr-4">
														<h5 className="text-lg font-semibold">
															{e.title}
															{/* {'Đề ôn thi THPT Quốc gia môn Lịch Sử năm 2021 có đáp án (Đề 1) Đề ôn thi THPT Quốc gia môn'
														.length > 50
														? 'Đề ôn thi THPT Quốc gia môn Lịch Sử năm 2021 có đáp án (Đề 1) Đề ôn thi THPT Quốc gia môn'.slice(
																0,
																50 - 1,
														  ) + '…'
														: 'Đề ôn thi THPT Quốc gia môn Lịch Sử năm 2021 có đáp án (Đề 1) Đề ôn thi THPT Quốc gia môn'} */}
														</h5>
														<div className="flex lg:w-4/5 xl:w-3/5 justify-between">
															<span className="text-sm">
																Đánh giá: {e.rate}
															</span>
															<span className="text-sm">
																Thời gian: {e.minuteLimit} phút
															</span>
															<span className="text-sm">
																Ngày tạo: {e.createdAt}
															</span>
														</div>
													</div>
												</td>
												<td className="text-sm text-gray-900 font-light  py-2 whitespace-nowrap">
													<div className="flex flex-col items-center">
														<svg
															onClick={() => navigate(`edit/${e.id}`)}
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5 inline-block hover:scale-125 mb-2 cursor-pointer"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth={2}
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
															/>
														</svg>

														<svg
															onClick={() => handleDeleteExam(e.id)}
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5 inline-block hover:scale-125 mb-2 cursor-pointer"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth={2}
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
															/>
														</svg>
													</div>
												</td>
											</tr>
										</tbody>
									))}
							</table>
						</div>
					</div>
				</div>
				<span className="flex justify-end text-base text-gray-500 font-normal mr-5">
					Results: 1-5 of 50
				</span>
			</div>

			<div>
				<div className="flex items-center justify-center mt-6 text-base">
					<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 text-sky-600 font-semibold">
						Prev
					</button>
					<button className="border-3 border-stone-400 px-3 py-1 border rounded mr-1 font-bold bg-indigo-600 text-white">
						1
					</button>
					<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 font-bold">
						2
					</button>
					<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 font-bold">
						3
					</button>
					<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded mr-1 font-bold">
						4
					</button>
					<button className="border-3 border-stone-400 px-3 py-1 bg-white border rounded text-sky-600 font-semibold">
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default ManageBody;
