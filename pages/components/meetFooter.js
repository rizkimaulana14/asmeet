import {
    BsFillMicFill,
    BsFillCameraVideoOffFill,
    BsThreeDots,
} from 'react-icons/bs';
import { GoScreenFull } from 'react-icons/go';
import { HiUsers } from 'react-icons/hi';
import { MdScreenShare } from 'react-icons/md';

export default function MeetFooter() {
    return (
        <div className="mt-6 mb-1">
            <div className="flex justify-center items-center gap-3">
                <a className="cursor-pointer hover:bg-red-600 hover:text-white duration-300 bg-white px-3 py-3 text-gray-500 font-semibold rounded-full text-sm">
                    <HiUsers></HiUsers>
                </a>
                <a className="cursor-pointer hover:bg-red-600 hover:text-white duration-300 bg-white px-3 py-3 text-gray-500 font-semibold rounded-full text-sm">
                    <GoScreenFull></GoScreenFull>
                </a>
                <a className="cursor-pointer hover:bg-red-600 hover:text-white duration-300 bg-white px-3 py-3 text-gray-500 font-semibold rounded-full text-sm">
                    <BsFillMicFill></BsFillMicFill>
                </a>
                <a className="cursor-pointer hover:bg-red-600 duration-300 bg-orange-500 px-6 py-2 text-white font-semibold rounded-full text-sm">
                    End Meeting
                </a>
                <a className="cursor-pointer hover:bg-red-600 hover:text-white duration-300 bg-white px-3 py-3 text-orange-500 font-semibold rounded-full text-sm">
                    <BsFillCameraVideoOffFill></BsFillCameraVideoOffFill>
                </a>
                <a className="cursor-pointer hover:bg-red-600 hover:text-white duration-300 bg-white px-3 py-3 text-gray-500 font-semibold rounded-full text-sm">
                    <MdScreenShare></MdScreenShare>
                </a>
                <a className="cursor-pointer hover:bg-red-600 hover:text-white duration-300 bg-white px-3 py-3 text-gray-500 font-semibold rounded-full text-sm">
                    <BsThreeDots></BsThreeDots>
                </a>
            </div>
        </div>
    );
}
