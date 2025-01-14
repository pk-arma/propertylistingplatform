// components/Pagination.js
'use client'; // Ensures this is a Client Component

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const Pagination = ({ totalItems, itemsPerPage, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    router.push(`${pathname}?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <style jsx>{`
        .pagination {
          display: flex;
          gap: 8px;
        }
        .active {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Pagination;
