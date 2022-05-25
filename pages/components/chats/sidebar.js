import Image from 'next/image';
import { BsBellFill, BsChatQuoteFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/Io';
import {
    AiFillVideoCamera,
    AiTwotoneHome,
    AiFillClockCircle,
    AiFillCalendar,
} from 'react-icons/Ai';

export default function Sidebar() {
    return (
        <div className="w-14 mt-6 relative">
            <aside>
                <ul className="bg-gray-accent rounded-full pb-4">
                    <li className="mb-3">
                        <Image
                            src={'/img/ig.png'}
                            width="60px"
                            height="60px"
                            alt="union"
                        ></Image>
                    </li>
                    <li className="flex justify-center mb-3">
                        <a className="cursor-pointer text-gray-400 hover:text-gray-500 duration-300">
                            <BsBellFill></BsBellFill>
                        </a>
                    </li>
                    <li className="flex justify-center">
                        <a className="cursor-pointer text-gray-400 hover:text-gray-500 duration-300">
                            <IoMdSettings></IoMdSettings>
                        </a>
                    </li>
                </ul>

                <ul className="flex flex-col gap-3 absolute bottom-2/4 left-1">
                    <li className="flex">
                        <a className="cursor-pointer text-gray-400 hover:text-gray-500 duration-300 rounded-full p-2">
                            <AiTwotoneHome></AiTwotoneHome>
                        </a>
                    </li>
                    <li className="flex">
                        <a className="cursor-pointer text-gray-400 hover:text-gray-500 duration-300 rounded-full p-2">
                            <BsChatQuoteFill></BsChatQuoteFill>
                        </a>
                    </li>
                    <li className="flex">
                        <a className="cursor-pointer bg-blue-accent text-white hover:bg-blue-600 duration-300 hover:text-gray-200 rounded-full p-2">
                            <AiFillVideoCamera></AiFillVideoCamera>
                        </a>
                    </li>
                    <li className="flex">
                        <a className="cursor-pointer text-gray-400 hover:text-gray-500 duration-300 rounded-full p-2">
                            <AiFillClockCircle></AiFillClockCircle>
                        </a>
                    </li>
                    <li className="flex">
                        <a className="cursor-pointer text-gray-400 hover:text-gray-500 duration-300 rounded-full p-2">
                            <AiFillCalendar></AiFillCalendar>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
