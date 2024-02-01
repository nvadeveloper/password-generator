import PasswordSection from '@/components/PasswordSection';
import { Toaster } from 'react-hot-toast';

export default function Home() {
    return (
        <main className="max-w-96 mx-auto p-4">
            <h1>Password generator</h1>
            <PasswordSection />
            <Toaster position="top-right" reverseOrder={false} />
        </main>
    );
}
