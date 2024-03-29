import Header from '@/components/Header';
import PasswordSection from '@/components/PasswordSection';
import Rules from '@/components/Rules';
import { Toaster } from 'react-hot-toast';

export default function Home() {
    return (
        <main className="max-w-96 mx-auto p-4 mt-6">
            <Header />
            <PasswordSection length={10} />
            <PasswordSection length={12} />
            <PasswordSection length={14} />
            <PasswordSection length={16} />
            <PasswordSection length={20} />
            <Rules />
            <Toaster position="top-right" reverseOrder={false} />
        </main>
    );
}
