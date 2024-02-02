'use client';
import { FC } from 'react';
import { BsFiles } from 'react-icons/bs';
import { BsArrowRepeat } from 'react-icons/bs';

import { nanoid } from 'nanoid';
import React, { Dispatch, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';

const handleCopy = (currentPassword: string) => {
    toast.remove();
    navigator.clipboard.writeText(currentPassword);
    toast('Password copied! 🙌');
};

const handleUpdate = (setCurrentPassword: Dispatch<SetStateAction<string>>, length: number) => {
    setCurrentPassword(nanoid(length));
};

type Props = {
    length: number;
};

export default function PasswordSection({ length }: Props) {
    const [currentPassword, setCurrentPassword] = useState(nanoid(length));

    return (
        <section id={`password-length-${length}`}>
            <div className="flex relative mb-2">
                <input
                    defaultValue={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    value={currentPassword}
                    type="string"
                    name="password"
                    className="border-2 border-black py-2 px-3 rounded-md text-xl w-full relative focus:outline-none focus:ring focus:ring-violet-200"
                />
                <div className="absolute right-2 top-2 bg-white">
                    <button className="p-1" onClick={() => handleCopy(currentPassword)}>
                        <BsFiles className="w-5 h-5 hover:text-gray-500" />
                    </button>
                    <button
                        className="p-1"
                        onClick={() => handleUpdate(setCurrentPassword, length)}>
                        <BsArrowRepeat className="w-5 h-5 hover:text-gray-500" />
                    </button>
                </div>
            </div>
        </section>
    );
}
