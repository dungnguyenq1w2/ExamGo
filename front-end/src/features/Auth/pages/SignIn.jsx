import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
// import { ErrorMessage } from "@hookform/error-message";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import Cookies from "universal-cookie";
// import { login } from "../store/slices/userSlice";
// import { useDispatch } from "react-redux";

function SignIn() {
    //test
    // const dispatch = useDispatch();
    const [error, setError] = useState();

    return (
        <div>
            <div className="mx-auto rounded-lg shadow-lg mt-12 max-w-lg">
                <div className="w-full text-center uppercase text-white py-1 rounded-t-lg bg-orange-500">
                    Đăng nhập
                </div>
                <form
                    // onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-md rounded-b-lg px-6 pt-3 pb-4 mb-2"
                >
                    <div className="mb-2">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Tên đăng nhập
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            //{...register("email", { required: true })}
                            type="text"
                        />
                        {/* <ErrorMessage
							errors={errors}
							name="email"
							render={() => (
								<span className="text-sm bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
									{errors.email?.message}
								</span>
							)}
						/> */}
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Mật khẩu
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            //{...register("password", { required: true })}
                        />
                        {/* <ErrorMessage
							errors={errors}
							name="password"
							render={() => (
								<span className="text-sm bg-red-200 py-1 px-2 rounded text-red-900 font-semibold">
									{errors.password?.message}
								</span>
							)}
						/> */}
                    </div>

                    {/* {error && (
						<span className="inline-block w-full text-center text-sm bg-red-200 mb-3 py-1 px-2 rounded text-red-900 font-semibold">
							{error}
						</span>
					)} */}
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-orange-500 text-white font-bold px-2 py-1  rounded focus:outline-none focus:shadow-outline relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:border-2 before:border-transparent before:tranform hover:before:scale-x-110 hover:before:scale-y-125 before:transition before:ease-out hover:before:border-yellow-500"
                            type="submit"
                        >
                            Đăng Nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
