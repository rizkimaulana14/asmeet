import Image from 'next/image';
import Chat from './chats';
import InputMessage from './inputMessage';

export default function Participant() {
    return (
        <div className="w-96 mt-5 relative">
            <div className="px-2 flex justify-between items-center mb-3">
                <h1 className="font-semibold text-xl relative">
                    Participants
                    <span className="text-xs bg-slate-500 rounded-full absolute top-0 px-1 bg-blue-accent text-white">
                        32
                    </span>
                </h1>
                <a className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 duration-300">
                    View all
                </a>
            </div>

            <div className="scroll-auto">
                <div className="flex justify-between items-center p-1 bg-gray-accent rounded-2xl mb-1">
                    <div className="flex items-center gap-2">
                        <Image
                            src={'/img/user1.png'}
                            width="28"
                            height="28"
                            alt="user1"
                        ></Image>

                        <a className="text-sm">Me</a>
                    </div>

                    <div className="flex items-center gap-2 mr-2">
                        <a className="cursor-pointer">
                            <Image
                                src={'/img/icon/mic.png'}
                                width={'16'}
                                height={'16'}
                                alt="mic"
                            ></Image>
                        </a>
                        <a className="cursor-pointer">
                            <Image
                                src={'/img/icon/video.png'}
                                width={'16'}
                                height={'16'}
                                alt="mic"
                            ></Image>
                        </a>
                    </div>
                </div>

                <div className="flex justify-between items-center p-1 rounded-2xl mb-1">
                    <div className="flex items-center gap-2">
                        <Image
                            src={'/img/user1.png'}
                            width="28"
                            height="28"
                            alt="user1"
                        ></Image>

                        <a className="text-sm">Ahmad Fauzi</a>
                    </div>

                    <div className="flex items-center gap-2 mr-2">
                        <a className="cursor-pointer">
                            <Image
                                src={'/img/icon/mic.png'}
                                width={'16'}
                                height={'16'}
                                alt="mic"
                            ></Image>
                        </a>
                        <a className="cursor-pointer">
                            <Image
                                src={'/img/icon/video.png'}
                                width={'16'}
                                height={'16'}
                                alt="mic"
                            ></Image>
                        </a>
                    </div>
                </div>

                <div className="flex justify-between items-center p-1 rounded-2xl mb-1 opacity-40">
                    <div className="flex items-center gap-2">
                        <Image
                            src={'/img/user1.png'}
                            width="28"
                            height="28"
                            alt="user1"
                        ></Image>

                        <a className="text-sm">Jamaludin</a>
                    </div>

                    <div className="flex items-center gap-2 mr-2">
                        <a className="cursor-pointer">
                            <Image
                                src={'/img/icon/mic.png'}
                                width={'16'}
                                height={'16'}
                                alt="mic"
                            ></Image>
                        </a>
                        <a className="cursor-pointer">
                            <Image
                                src={'/img/icon/video.png'}
                                width={'16'}
                                height={'16'}
                                alt="mic"
                            ></Image>
                        </a>
                    </div>
                </div>
            </div>

            {/* chat */}
            <Chat></Chat>

            <InputMessage></InputMessage>
        </div>
    );
}
