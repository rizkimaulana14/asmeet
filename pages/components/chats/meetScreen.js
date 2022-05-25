import { FaUserFriends, FaUserAlt } from 'react-icons/fa';
import {
    BsPlus,
    BsFillMicFill,
    BsFillMicMuteFill,
    BsFillPinAngleFill,
    BsFillHandThumbsUpFill,
    BsGrid1X2Fill,
    BsFillGrid3X2GapFill,
    BsFillGridFill,
} from 'react-icons/bs';

export default function MeetScreen() {
    return (
        <div className="relative">
            <div className="flex justify-between">
                <div className="flex justify-start gap-3 w-3/12">
                    <div className="bg-white px-3 py-2 rounded-full flex gap-2">
                        <FaUserFriends className="text-gray-500"></FaUserFriends>
                        <span className="text-xs text-gray-500 font-semibold">
                            32
                        </span>
                    </div>
                    <a className="cursor-pointer">
                        <div className="flex gap-2 bg-green-600 hover:bg-green-400 duration-300 rounded-full px-3 py-2">
                            <BsPlus className="text-white"></BsPlus>
                            <span className="text-xs text-white font-semibold">
                                Add People
                            </span>
                        </div>
                    </a>
                </div>
                <div className="flex gap-1 bg-white rounded-full items-center">
                    <a className="cursor-pointer p-2 text-gray-400 hover:text-blue-500 duration-300">
                        <BsFillGrid3X2GapFill></BsFillGrid3X2GapFill>
                    </a>
                    <a className="cursor-pointer p-2 text-gray-400 hover:text-blue-500 duration-300">
                        <BsFillGridFill></BsFillGridFill>
                    </a>
                    <a className="cursor-pointer bg-blue-accent rounded-full text-white p-2">
                        <BsGrid1X2Fill className="rotate-90"></BsGrid1X2Fill>
                    </a>
                </div>
            </div>

            <div className="mt-3">
                <div className="relative">
                    <img src="/img/meet1.png" width="100%" alt="meet"></img>
                    <a className="bg-blue-accent text-white ease-in-out hover:text-blue-500 hover:bg-white duration-300 px-3 py-3 absolute top-4 right-4 rounded-full cursor-pointer">
                        <BsFillMicFill></BsFillMicFill>
                    </a>
                    <a className="hover:bg-blue-500 ease-in-out hover:text-white text-blue-500 bg-white duration-300 px-3 py-3 absolute top-4 right-16 rounded-full cursor-pointer">
                        <BsFillPinAngleFill></BsFillPinAngleFill>
                    </a>
                    <div className="bg-gray-500 px-3 py-2 absolute bottom-4 left-4 rounded-full text-white flex gap-2">
                        <FaUserAlt></FaUserAlt>
                        <span className="text-sm font-semibold">
                            Simalakamut
                        </span>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="relative">
                        <img src="/img/meet1.png" width="100%" alt="meet"></img>
                        <a className="bg-blue-accent text-white ease-in-out hover:text-blue-500 hover:bg-white duration-300 px-1 py-1 absolute top-2 right-2 rounded-full cursor-pointer">
                            <BsFillMicFill></BsFillMicFill>
                        </a>
                        <a className="hover:bg-blue-500 ease-in-out hover:text-white text-blue-500 bg-white duration-300 px-1 py-1 absolute top-2 left-2 rounded-full cursor-pointer">
                            <BsFillHandThumbsUpFill></BsFillHandThumbsUpFill>
                        </a>
                        <div className="bg-gray-500 px-2 py-1 items-center absolute bottom-2 left-2 rounded-full text-white flex gap-2">
                            <FaUserAlt className="text-xs"></FaUserAlt>
                            <span className="text-xs font-semibold">
                                Simalakamut
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/img/meet1.png" width="100%" alt="meet"></img>
                        <a className="hover:bg-blue-500 hover:text-white ease-in-out text-gray-500 bg-white duration-300 px-1 py-1 absolute top-2 right-2 rounded-full cursor-pointer">
                            <BsFillMicMuteFill></BsFillMicMuteFill>
                        </a>
                        <div className="bg-gray-500 px-2 py-1 items-center absolute bottom-2 left-2 rounded-full text-white flex gap-2">
                            <FaUserAlt className="text-xs"></FaUserAlt>
                            <span className="text-xs font-semibold">
                                Simalakamut
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/img/meet1.png" width="100%" alt="meet"></img>
                        <a className="bg-blue-accent text-white ease-in-out hover:text-blue-500 hover:bg-white duration-300 px-1 py-1 absolute top-2 right-2 rounded-full cursor-pointer">
                            <BsFillMicFill></BsFillMicFill>
                        </a>
                        <div className="bg-gray-500 px-2 py-1 items-center absolute bottom-2 left-2 rounded-full text-white flex gap-2">
                            <FaUserAlt className="text-xs"></FaUserAlt>
                            <span className="text-xs font-semibold">
                                Simalakamut
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
