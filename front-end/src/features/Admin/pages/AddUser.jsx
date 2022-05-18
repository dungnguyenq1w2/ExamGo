import React from "react";

function AddUser() {
    return (
        <div className="flex flex-col">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="name"
                    >
                        Họ và tên
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Nhập họ và tên"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Nhập email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Mật khẩu
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Vai trò
                    </label>
                    <div className="flex justify-around">
                        <div className="flex form-check form-check-inline">
                            <input
                                className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                                name="role"
                                id="student"
                                value="student"
                            />
                            <label
                                className="form-check-label inline-block text-gray-800 align-top"
                                for="student"
                            >
                                <span>Học sinh</span>
                            </label>
                        </div>
                        <div className="flex form-check form-check-inline">
                            <input
                                className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                                name="role"
                                id="teacher"
                                value="teacher"
                            />
                            <label
                                className="form-check-label inline-block text-gray-800"
                                for="teacher"
                            >
                                <span>Giáo viên</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                        Thêm tài khoản
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddUser;
