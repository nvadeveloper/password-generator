import { BsGithub } from 'react-icons/bs';

export default function Header() {
    return (
        <header className="flex justify-between mb-2">
            <h1>Password generator</h1>
            <a
                href="https://github.com/nvadeveloper/password-generator"
                className="text-[12px] text-gray-400 flex items-center">
                Source code
                <span>
                    <BsGithub className="w-5 h-5 pl-1" />
                </span>
            </a>
        </header>
    );
}
