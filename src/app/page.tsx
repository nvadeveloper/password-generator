import { BsGithub } from 'react-icons/bs';
import PasswordSection from '@/components/PasswordSection';
import { Toaster } from 'react-hot-toast';

export default function Home() {
    return (
        <main className="max-w-96 mx-auto p-4 mt-6">
            <div className="flex justify-between mb-2">
                <h1>Password generator</h1>
                <a
                    href="https://github.com/nvadeveloper/password-generator"
                    className="text-[12px] text-gray-400 flex items-center">
                    Source code
                    <span>
                        <BsGithub className="w-5 h-5 pl-1" />
                    </span>
                </a>
            </div>
            <PasswordSection length={10} />
            <PasswordSection length={12} />
            <PasswordSection length={14} />
            <PasswordSection length={16} />
            <Toaster position="top-right" reverseOrder={false} />
        </main>
    );
}
