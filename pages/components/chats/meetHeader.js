import Image from 'next/image';
import { BsArrowLeft } from 'react-icons/bs';
import { FaDotCircle } from 'react-icons/fa';

export default function MeetHeader() {
    return (
        <div className="flex mb-5">
            <div className="flex justify-start gap-4 items-center w-8/12">
                <a className="cursor-pointer bg-white hover:bg-red-500 hover:text-white duration-300 px-3 py-3 rounded-full">
                    <BsArrowLeft></BsArrowLeft>
                </a>
                <div>
                    <h1 className="font-semibold text-xl">
                        UI Meeting Weekly - Week 15
                    </h1>
                    <p className="text-xs text-gray-400">20 May 2022</p>
                </div>
                <div>
                    <div className="px-3 py-1 bg-blue-accent text-white rounded-full flex">
                        <a className="text-xs font-semibold flex items-center gap-1 cursor-pointer">
                            <Image
                                src={'/img/icon/user2.png'}
                                width="14px"
                                height="14px"
                                alt="user2"
                            ></Image>
                            <span>Weekly Meeting</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end w-4/12">
                <a
                    className="cursor-pointer bg-white text-red-500 hover:bg-red-500 hover:text-white duration-300 px-3 py-3 rounded-full"
                    title="Record"
                >
                    <FaDotCircle></FaDotCircle>
                </a>
            </div>
        </div>
    );
}
