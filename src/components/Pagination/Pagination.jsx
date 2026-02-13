import { LIMIT, TOTAL_PAGES } from '../../constants/constants';
import { useEffect, useLayoutEffect, useState } from 'react';

import getPaginationRange from '../../helpers/getPaginationRange';
import styles from './Pagination.module.css';

function Pagination({}) {
  const range = getPaginationRange(1, 24);

  return (
    <div>
      <button>{'<'}</button>
      <div>
        {range.map((pageNumber) => {
          if (pageNumber === '...') {
            return <span>...</span>;
          } else {
            return <button key={pageNumber}>{pageNumber}</button>;
          }
        })}
      </div>
      <button>{'>'}</button>
    </div>
  );
}

export default Pagination;
