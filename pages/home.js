import Meet from './components/chats/meet';
import Participant from './components/chats/participant';
import Sidebar from './components/chats/sidebar';

export default function Home() {
    return (
        <div>
            <div id="mobile">
                <p className="text-center mt-3 font-semibold">
                    Mohon maaf preview hanya tersedia di versi non mobile.
                    Dikarenakan belum responsive
                </p>
            </div>
            <div id="app" className="px-4 py-3 flex gap-4">
                {/* Sidebar */}
                <Sidebar></Sidebar>
                {/* End Sidebar */}

                {/* Start meet */}
                <Meet></Meet>
                {/* End meet */}

                {/* Participants */}
                <Participant></Participant>
                {/* End Participants */}
            </div>
        </div>
    );
}
