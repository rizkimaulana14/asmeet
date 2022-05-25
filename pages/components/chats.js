import Image from 'next/image';

export default function Chat() {
    return (
        <div className="mt-3">
            <div className="px-2 flex justify-between items-center mb-3">
                <h1 className="font-semibold text-xl relative">Chats</h1>
                <a className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 duration-300">
                    View all
                </a>
            </div>

            <div>
                <div className="flex gap-2 p-1">
                    <div className="min-w-fit">
                        <Image
                            src={'/img/user1.png'}
                            width="28px"
                            height="28px"
                            alt="user1"
                        ></Image>
                    </div>

                    <div className="flex flex-col w-full">
                        <a className="text-xs text-gray-400">Jamaludin</a>
                        <p className="text-xs p-2 bg-gray-accent rounded-full mt-1">
                            Hi guys, how are you?
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 p-1">
                    <div className="min-w-fit">
                        <Image
                            src={'/img/user1.png'}
                            width="28px"
                            height="28px"
                            alt="user1"
                        ></Image>
                    </div>

                    <div className="flex flex-col w-full">
                        <a className="text-xs text-gray-400">John</a>
                        <p className="text-xs p-2 bg-gray-accent rounded-full mt-1">
                            Hi jamal
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 p-1">
                    <div className="min-w-fit">
                        <Image
                            src={'/img/user1.png'}
                            width="28px"
                            height="28px"
                            alt="user1"
                        ></Image>
                    </div>

                    <div className="flex flex-col w-full">
                        <a className="text-xs text-gray-400">John</a>
                        <p className="text-xs p-2 bg-gray-accent rounded-full mt-1">
                            Nice to meet you
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
