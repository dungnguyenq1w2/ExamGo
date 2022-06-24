import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
    createSearchParams,
    NavLink,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import { Document } from "react-pdf";

function UserList() {
    // <div className="mb-4 flex-col">
    //     <div className="absolute pointer-events-auto">
    //         <svg
    //             className="absolute text-slate-400 h-5 w-5"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //         >
    //             <path
    //                 fill-rule="evenodd"
    //                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    //                 clip-rule="evenodd"
    //             />
    //         </svg>
    //     </div>
    //     <input type="text" placeholder="Search"></input>
    // </div>
    const navigate = useNavigate();
    const [pdf, setPdf] = useState();
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = searchParams.get("page");

    const [pageIndex, setPageIndex] = useState(pageParam || 1);

    useEffect(() => {
        setLoading(true);
        const fetchExam = async () => {
            try {
                const pageParam = searchParams.get("page");
                const url = `${process.env.REACT_APP_API_URL}/admin/userlist${
                    pageParam ? `?page=${pageParam}` : ""
                }`;

                const token = localStorage.getItem("TOKEN");
                const res = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res) {
                    setUserList(res.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log("Failed to fetch exam:", error);
            }
        };
        fetchExam();
    }, [pageIndex]);

    const exportPDF = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/admin/createUserListPDF`;

            const token = localStorage.getItem("TOKEN");
            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                responseType: "arraybuffer",
            });
            if (res.data) {
                // console.log(res.data);
                // setPdf(res.data);
                // const base64WithoutPrefix = res.data.substr(
                //     "data:application/pdf;base64,".length
                // );

                // const bytes = Buffer.from(base64WithoutPrefix, "base64");
                // let length = bytes.length;
                // let out = new Uint8Array(length);

                // while (length--) {
                //     out[length] = bytes.charCodeAt(length);
                // }
                console.log(res.data);
                // const binaryString = window.atob(res.data);
                // const binaryLen = binaryString.length;
                // const bytes = new Uint8Array(binaryLen);
                // for (let i = 0; i < binaryLen; i++) {
                //     const ascii = binaryString.charCodeAt(i);
                //     bytes[i] = ascii;
                // }
                const file = new Blob([res.data], { type: "application/pdf" });
                console.log(file);
                // Build a URL from the file
                const fileURL = URL.createObjectURL(file);
                // setPdf(fileURL);
                // console.log(fileURL);
                // Open the URL on new Window
                window.open(fileURL);
            }
        } catch (error) {
            console.log("Failed to fetch user list:", error);
        }
    };

    const handlePaging = (page) => {
        if (page < 1) return;
        navigate({
            pathname: "/admin/users",
            search: createSearchParams({
                page: page,
            }).toString(),
        });
        setPageIndex(page);
    };

    const [confirmDeleteState, setConfirmDeleteState] = useState(false);
    return (
        <div className="flex justify-center ml-44 mt-2">
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto space-y-5">
                            <div className="flex justify-between">
                                <span className="text-lg font-bold text-red-500 pt-1">
                                    Danh sách người dùng
                                </span>

                                <div className="flex justify-around space-x-10">
                                    <div className="space-x-2">
                                        <span className="text-base font-bold">
                                            Vai trò:
                                        </span>
                                        <select className="text-base border border-gray-200 rounded">
                                            <option value="Tất cả" selected>
                                                Tất cả
                                            </option>
                                            <option value="Học sinh">
                                                Học sinh
                                            </option>
                                            <option value="Giáo viên">
                                                Giáo viên
                                            </option>
                                        </select>
                                    </div>
                                    <div className="space-x-2">
                                        <span className="text-base font-bold">
                                            Sắp xếp theo:
                                        </span>
                                        <select className="text-base border border-gray-200 rounded">
                                            <option value="Họ tên">
                                                Họ tên
                                            </option>
                                            <option value="Email">Email</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="">
                                    <NavLink to="/admin/users/add">
                                        <button className="bg-blue-500 hover:bg-blue-400 text-white text-base font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                            Thêm tài khoản
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="ml-5">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-400 text-white text-base font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                        onClick={() => exportPDF()}
                                    >
                                        Xuất danh sách PDF
                                    </button>
                                </div>
                            </div>

                            <table className="min-w-full border border-orange-400">
                                <thead className="border-b bg-orange-400">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-base font-medium text-white px-6 py-4 text-left"
                                        >
                                            STT
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-base font-medium text-white px-6 py-4 text-left "
                                        >
                                            Họ và tên
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-base font-medium text-white px-6 py-4 text-left "
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-base font-medium text-white px-6 py-4 text-left"
                                        >
                                            Vai trò
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white px-6 py-4 text-center"
                                        >
                                            Xử lý
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading
                                        ? Array(5)
                                              .fill()
                                              .map((e, i) => (
                                                  <tr
                                                      className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100"
                                                      key={i}
                                                  >
                                                      <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                                                          <div className="h-10 bg-gray-200 rounded col-span-1"></div>
                                                      </td>

                                                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap w-1/3">
                                                          <div className="h-10 bg-gray-200 rounded col-span-1"></div>
                                                      </td>
                                                      <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap w-1/3">
                                                          <div className="h-10 bg-gray-200 rounded col-span-1"></div>
                                                      </td>
                                                      <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap w-1/5">
                                                          <div className="h-10 bg-gray-200 rounded col-span-1"></div>
                                                      </td>
                                                  </tr>
                                              ))
                                        : userList?.map((e, i) => (
                                              <tr
                                                  className="bg-white border-b hover:bg-gray-100"
                                                  key={i}
                                              >
                                                  <td className="px-6 py-4 whitespace-nowrap text-base font-base text-gray-900">
                                                      {i + 5 * pageIndex - 4}
                                                  </td>
                                                  <td className="text-base text-gray-900 font-base px-6 py-4 whitespace-nowrap w-1/3">
                                                      {e.name}
                                                  </td>
                                                  <td className="text-base text-gray-900 font-base px-6 py-4 whitespace-nowrap w-1/3">
                                                      {e.email}
                                                  </td>
                                                  <td className="text-base text-gray-900 font-base px-6 py-4 whitespace-nowrap w-1/5">
                                                      {e?.userTypeId === 1
                                                          ? "Học Sinh"
                                                          : e?.userTypeId === 2
                                                          ? "Giáo Viên"
                                                          : "Quản Trị Viên"}
                                                  </td>
                                                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                      <div className="flex items-center justify-center space-x-4">
                                                          <NavLink to="/admin/users/edit">
                                                              <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-green-700 hover:border-green-500 rounded-lg">
                                                                  Chỉnh sửa
                                                              </button>
                                                          </NavLink>
                                                          <button
                                                              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-red-700 hover:border-red-500 rounded-lg"
                                                              type="button"
                                                              onClick={() =>
                                                                  setConfirmDeleteState(
                                                                      true
                                                                  )
                                                              }
                                                          >
                                                              Xóa
                                                          </button>
                                                      </div>
                                                  </td>
                                              </tr>
                                          ))}
                                </tbody>
                            </table>
                            {/* <div className="flex items-center justify-center">
                                <a
                                    href="#top"
                                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <svg
                                        className="mr-2 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    Previous
                                </a>
                                <a
                                    href="#top"
                                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-blue-400 bg-white rounded border border-blue-400 hover:bg-blue-400 hover:text-white"
                                >
                                    1
                                </a>
                                <a
                                    href="#top"
                                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    2
                                </a>
                                <a
                                    href="#top"
                                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Next
                                    <svg
                                        className="ml-2 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div> */}
                            <div>
                                <div className="flex items-center justify-center mb-2 text-base">
                                    <div
                                        className={`${
                                            pageIndex == 1
                                                ? "text-gray-400"
                                                : "cursor-pointer hover:border-gray-800"
                                        } border-2 rounded-full p-1 mr-2`}
                                        onClick={() =>
                                            handlePaging(pageIndex - 1)
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </div>
                                    <span>
                                        Trang {pageIndex ? pageIndex : 1}
                                    </span>
                                    <div
                                        className={`${
                                            !userList || userList.length === 0
                                                ? "text-gray-400"
                                                : "cursor-pointer hover:border-gray-800"
                                        } border-2 rounded-full p-1 ml-2`}
                                        onClick={() => {
                                            if (
                                                userList &&
                                                userList.length != 0
                                            )
                                                handlePaging(
                                                    parseInt(pageIndex) + 1
                                                );
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {confirmDeleteState ? (
                <div className="">
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <span className="text-xl font-bold">
                                        Thông báo
                                    </span>
                                    <NavLink to="/admin/users">
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() =>
                                                setConfirmDeleteState(false)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="relative px-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Bạn có chắc chắn muốn xóa tài khoản này
                                        chứ?
                                    </p>
                                </div>
                                <div className="flex items-center justify-center border-t border-solid border-slate-200 rounded-b">
                                    <NavLink to="/admin/users">
                                        <button
                                            className="bg-transparent text-red-500 font-bold text-xl px-6 py-3 rounded outline-none"
                                            type="button"
                                            onClick={() =>
                                                setConfirmDeleteState(false)
                                            }
                                        >
                                            Có
                                        </button>
                                    </NavLink>
                                    <NavLink to="/admin/users">
                                        <button
                                            className="bg-transparent text-gray-500 font-bold text-xl px-6 py-3 rounded outline-none"
                                            type="button"
                                            onClick={() =>
                                                setConfirmDeleteState(false)
                                            }
                                        >
                                            Không
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}

            {pdf && (
                <a href={pdf} download>
                    Click to download
                </a>
            )}
        </div>
    );
}

export default UserList;
