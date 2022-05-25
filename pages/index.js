import Link from 'next/link';
import Login from './components/auth/login';
import Register from './components/auth/register';

export default function Auth() {
    return (
        <div>
            <div id="login">
                <Login></Login>
            </div>
            <div id="register">
                <Register></Register>
            </div>
        </div>
    );
}
