'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface PaginationClientProps {
  totalPages: number;
  totalCount: number;
}

export default function PaginationClient({ totalPages, totalCount }: PaginationClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        return params.toString();
        },
        [searchParams]
    );

    const handlePageClick = (page: number) => {
        const queryString = createQueryString('page', page.toString());
        router.push(`?${queryString}`);
    };

    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    return (
        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        
        {pages.map((page) => (
            <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-3 py-1 border rounded transition-colors ${
                    page === currentPage
                    ? 'bg-primary-accent-green border-primary-accent-green text-white font-bold'
                    : 'bg-gray-700 border-gray-700 text-gray-300 hover:bg-gray-500'
                }`}
            >
                {page}
            </button>
        ))}
        </div>
    );
}