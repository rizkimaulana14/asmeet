export default function InputMessage() {
    return (
        <div className="flex justify-between bottom-0">
            <form className="absolute bottom-0 w-full">
                <input
                    className="bg-gray-accent py-2 px-4 w-full rounded-full placeholder:text-xs"
                    placeholder="Type a message"
                ></input>
            </form>
        </div>
    );
}
