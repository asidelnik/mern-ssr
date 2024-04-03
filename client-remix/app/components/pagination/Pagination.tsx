import c from './Pagination.module.css';
import { useNavigate, useNavigation } from '@remix-run/react';
import { useState } from 'react';
import { PaginationProps } from '~/types/PaginationProps';

export default function Pagination({ name, currentPage, limit, totalPages }: PaginationProps) {
  const [buttonClicked, setButtonClick] = useState<null | number>(null);
  const navigate = useNavigate();
  const { state } = useNavigation();
  const currentPage1 = currentPage + 1;

  function handlePaginationClick(update: number) {
    setButtonClick(update);
    navigate(`?name=${name}&page=${currentPage + update}&limit=${limit}`, { relative: "route" });
  }

  return (
    <>
      <div className={c.paginationContainer}>
        {totalPages > 1 && <button onClick={() => handlePaginationClick(-1)}
          disabled={currentPage === 0}>{buttonClicked === -1 && state !== 'idle' ? 'Previous...' : 'Previous'}</button>}
        <span>Page {currentPage1} of {totalPages}</span>
        {totalPages > 1 && <button onClick={() => handlePaginationClick(1)}
          disabled={currentPage1 === totalPages}>{buttonClicked === 1 && state !== 'idle' ? 'Next...' : 'Next'}</button>}
      </div>
    </>
  )
}