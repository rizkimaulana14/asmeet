import Link from 'next/link';

export default function Login() {
    return (
        <div className="flex bg-gray-accent justify-center items-center vh-100">
            <div className="bg-white px-6 py-3 rounded-3xl w-4/12 shadow-md">
                <div className="text-center text-gray-800 font-semibold text-2xl">
                    ASMEET LOGIN
                </div>
                <div className="justify-center flex">
                    <hr className="w-6/12 border-t-2 border-t-blue-300"></hr>
                </div>
                <form className="mt-5 mb-3">
                    <label className="text-md font-semibold text-gray-800 mb-1">
                        Email
                        <input
                            type="text"
                            className="w-full rounded-full px-5 py-2 mb-2 border-2 focus:border-blue-300 focus:outline-none focus:shadow-outline"
                        ></input>
                    </label>
                    <label className="text-md font-semibold text-gray-800 mb-1">
                        Password
                        <input
                            type="password"
                            className="w-full rounded-full px-5 py-2 border-2 mb-3 focus:outline-none focus:border-blue-300 focus:shadow-outline"
                        ></input>
                    </label>
                    <p className="text-gray-500 text-xs mb-5">
                        *Cuma website Statis, langsung aja pencet login
                    </p>
                    <div className="text-center mt-2">
                        <Link href="home">
                            <a className="px-4 py-2 hover:bg-blue-600 duration-300 bg-blue-accent rounded-full text-white font-semibold">
                                LOGIN NOW!
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
