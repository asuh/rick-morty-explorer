import type React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

type Props = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, baseUrl }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    pages.push(1);
    
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    if (currentPage <= 3) {
      endPage = Math.min(totalPages - 1, maxPagesToShow - 1);
    }
    
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - maxPagesToShow + 2);
    }
    
    if (startPage > 2) {
      pages.push('...');
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <nav className="pagination">
      {currentPage > 1 && (
        <Link
          to={`${baseUrl}?page=${currentPage - 1}`}
          className="pagination-link"
        >
          &laquo; Prev
        </Link>  
      )}
      
      <div className="pagination-numbers">
        {getPageNumbers().map((page) => (
          typeof page === 'number' ? (
            <Link
              key={page}
              to={`${baseUrl}?page=${page}`}
              className="pagination-link"
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </Link>
          ) : (
            <span key={page.toString()} className="pagination-ellipsis">
              {page}
            </span>
          )
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          to={`${baseUrl}?page=${currentPage + 1}`}
          className="pagination-link"
        >
          Next &raquo;
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
