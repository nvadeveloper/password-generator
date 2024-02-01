'use client';
import CopyIcon from '@/components/CopyIcon';
import RefreshIcon from '@/components/RefreshIcon';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function PasswordSection() {
    const [currentPassword, setCurrentPassword] = useState(nanoid(8));

    return (
        <section>
            <div className="flex relative">
                <input
                    defaultValue={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    type="string"
                    name="password"
                    className="border-2 border-black py-2 px-3 rounded-md text-xl w-full relative"
                />
                <div className="absolute right-2 top-2 bg-white">
                    <button
                        className="p-0.5"
                        onClick={() => {
                            navigator.clipboard.writeText(currentPassword);
                            toast('Сopied! 🙌');
                        }}>
                        <CopyIcon />
                    </button>
                    <button
                        className="p-0.5"
                        onClick={() => {
                            setCurrentPassword(nanoid(8));
                        }}>
                        <RefreshIcon />
                    </button>
                </div>
            </div>
        </section>
    );
}
