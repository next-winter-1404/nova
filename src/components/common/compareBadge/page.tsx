'use client'
import { useCompareStore } from '@/src/stores/compare-store';
import { useRouter } from 'next/navigation'
import { LuScale } from 'react-icons/lu';

const CompareBadge = () => {
    const router = useRouter();
    const compareIds = useCompareStore(
        (state) => state.compareIds
    );
    if (compareIds.length < 2 ) return null
    return (
        <button
        onClick={() => router.push(`/compare?ids=${compareIds.join(",")}`)}
        className="
            fixed
            bottom-6
            left-1/2
            -translate-x-1/2
            z-50
            flex
            items-center
            gap-2
            rounded-full
            bg-primary-accent-green
            px-5
            py-3
            text-black
            shadow-lg
            cursor-pointer
        "
        >
        <LuScale size={20} />
        <span>
            مقایسه ({compareIds.length}) ملک
        </span>
        </button>
    )
}

export default CompareBadge