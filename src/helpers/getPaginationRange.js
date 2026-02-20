export default function getPaginationRange(currentPage, totalPages) {
  const getRangeLength = (currentPage, totalPages) => {
    let rangeLength;

    if (totalPages <= 4) {
      rangeLength = totalPages;
      return rangeLength;
    }

    if (currentPage <= 4 || currentPage >= totalPages - 2) {
      rangeLength = 8;
    } else {
      rangeLength = 10;
    }

    return rangeLength;
  };

  const getPaginationType = (currentPage, totalPages) => {
    let paginationType;

    const isPaginationShort = totalPages <= 4;

    const isPaginationStart = currentPage <= 4;
    const isPaginationMiddle = currentPage > 4 && currentPage <= totalPages - 3;
    const isPaginationEnd = currentPage > totalPages - 3;

    if (isPaginationStart && isPaginationShort) {
      paginationType = 'short';
    } else if (isPaginationStart) {
      paginationType = 'start';
    } else if (isPaginationMiddle) {
      paginationType = 'middle';
    } else if (isPaginationEnd) {
      paginationType = 'end';
    }

    return paginationType;
  };

  const getFirstPage = (currentPage, totalPages, paginationType) => {
    let firstPage;
    if (paginationType === 'short' || paginationType === 'start') {
      firstPage = 1;
    } else if (paginationType === 'middle') {
      firstPage = currentPage - 3;
    } else if (paginationType === 'end') {
      firstPage = totalPages - 5;
    }

    return firstPage;
  };

  const range = [];
  const rangeLength = getRangeLength(currentPage, totalPages);
  const paginationType = getPaginationType(currentPage, totalPages);
  let page = getFirstPage(currentPage, totalPages, paginationType);

  if (paginationType === 'short') {
    for (let i = 0; i < rangeLength; i++) {
      range.push(page);
      page += 1;
    }
  } else if (paginationType === 'start') {
    for (let i = 0; i < rangeLength; i++) {
      if (i === rangeLength - 2) {
        range.push(null);
      } else if (i === rangeLength - 1) {
        range.push(totalPages);
      } else {
        range.push(page);
        page += 1;
      }
    }
  } else if (paginationType === 'middle') {
    for (let i = 0; i < rangeLength; i++) {
      if (i === 1 || i === rangeLength - 2) {
        range.push(null);
      } else if (i === rangeLength - 1) {
        range.push(totalPages);
      } else if (i === 0) {
        range.push(1);
      } else {
        range.push(page);
        page += 1;
      }
    }
  } else if (paginationType === 'end') {
    for (let i = 0; i < rangeLength; i++) {
      if (i === 0) {
        range.push(1);
      } else if (i === 1) {
        range.push(null);
      } else {
        range.push(page);
        page += 1;
      }
    }
  }

  return range;
}
