import MeetFooter from './meetFooter';
import MeetHeader from './meetHeader';
import MeetScreen from './meetScreen';

export default function Meet() {
    return (
        <div className="p-6 bg-gray-accent w-full rounded-2xl gap-2">
            <MeetHeader></MeetHeader>
            <MeetScreen></MeetScreen>
            <MeetFooter></MeetFooter>
        </div>
    );
}
