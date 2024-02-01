import CopyIcon from '@/components/CopyIcon';
import RefreshIcon from '@/components/RefreshIcon';
import { nanoid } from 'nanoid';

export default function PasswordSection() {
    return (
        <section>
            <div>
                <input
                    value={nanoid(8)}
                    type="string"
                    name="password"
                    className="border-2 border-black py-2 px-3 rounded-md text-xl w-[350px]"
                />
                <button>
                    <CopyIcon />
                </button>
                <button>
                    <RefreshIcon />
                </button>
            </div>
        </section>
    );
}
