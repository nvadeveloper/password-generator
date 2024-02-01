'use client';
import { BsFiles } from 'react-icons/bs';
import { BsArrowRepeat } from 'react-icons/bs';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function PasswordSection() {
    const [currentPassword, setCurrentPassword] = useState(nanoid(12));

    return (
        <section>
            <div className="flex relative">
                <input
                    defaultValue={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    type="string"
                    name="password"
                    className="border-2 border-black py-2 px-3 rounded-md text-xl w-full relative focus:outline-none focus:ring focus:ring-violet-200"
                />
                <div className="absolute right-2 top-2 bg-white">
                    <button
                        className="p-1"
                        onClick={() => {
                            navigator.clipboard.writeText(currentPassword);
                            toast('Password copied! 🙌');
                        }}>
                        <BsFiles className="w-5 h-5 hover:text-gray-500" />
                    </button>
                    <button
                        className="p-1"
                        onClick={() => {
                            setCurrentPassword(nanoid(12));
                        }}>
                        <BsArrowRepeat className="w-5 h-5 hover:text-gray-500" />
                    </button>
                </div>
            </div>
        </section>
    );
}
