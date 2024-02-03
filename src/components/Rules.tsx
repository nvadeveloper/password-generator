'use client';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';

export default function Rules() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="mt-6 text-[14px]">
            <div
                className="flex justify-between items-center text-gray-500 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                <h2 className="">How to create a Secure Password</h2>
                {isOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
        </section>
    );
}
