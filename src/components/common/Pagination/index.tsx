import React from 'react';

interface IPaginationProps {
  totalItems: number;
  currentIndex?: number;
  onPageClicked: (page: number) => void;
  itemLimit: number;
}

const pageBlockLimit = 3;

function Pagination({ totalItems, currentIndex, itemLimit, onPageClicked }: IPaginationProps) {
  const numPages = Math.ceil(totalItems / itemLimit);
  const index = currentIndex ? currentIndex : 1;

  const renderPageBlocks = () => {
    let pages = [];
    for (let i = index; i <= numPages; i ++) {
      pages.push(<li key={i} onClick={() => onPageClicked(i)} className={`page-item ${i === index && "active"}`}><p className="page-link">{i}</p></li>);
    }
    return pages;
  }

  const goToPrevious = () => {
    onPageClicked(index - 1);
  }

  const goToNext = () => {
    onPageClicked(index + 1);
  }

  return (
    <ul className="pagination d-flex flex-row justify-content-center">
      <li onClick={goToPrevious} className={`page-item ${index === 1 ? "disabled" : ""}`}><p className="page-link">Previous</p></li>
      {renderPageBlocks()}
      <li onClick={goToNext} className={`page-item ${(index + pageBlockLimit) > numPages ? "disabled" : ""}`}><p className="page-link">Next</p></li>
    </ul>
  );
}

export default Pagination;