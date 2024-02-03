'use client';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';

export default function Rules() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="mt-6 text-[14px] text-gray-600">
            <div
                className="flex justify-between items-center  cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                <h2>How to create a Secure Password</h2>
                {isOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isOpen ? (
                <div>
                    <ul className="mt-2 space-y-1">
                        <li>1. Do not use sequential numbers or letters</li>
                        <li>
                            2. Do not include your birth year or birth month/day in your password
                        </li>
                        <li>3. Use a combination of at least 8 letters, numbers, and symbols</li>
                        <li>4. Combine different unrelated words in your password or passphrase</li>
                        <li>5. Do not use names or words found in the dictionary</li>
                        <li>6. Do not reuse your passwords</li>
                    </ul>
                </div>
            ) : null}
        </section>
    );
}
