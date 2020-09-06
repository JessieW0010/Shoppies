import React from 'react';

interface IPaginationProps {
  totalItems: number;
  currentIndex?: number;
  onPageClicked: () => void;
  itemLimit: number;
}

const pageBlockLimit = 3;

function Pagination({ totalItems, currentIndex, itemLimit, onPageClicked }: IPaginationProps) {
  const numPages = Math.ceil(totalItems / itemLimit);
  const index = currentIndex ? currentIndex : 1;

  const renderPageBlocks = () => {
    let pages = [];
    for (let i = index; i <= numPages; i ++) {
      pages.push(<li key={i} className={`page-item ${i === index && "active"}`}><a className="page-link">{i}</a></li>);
    }
    return pages;
  }

  return (
    <ul className="pagination d-flex flex-row justify-content-center">
      <li className={`page-item ${index === 1 ? "disabled" : ""}`}><a className="page-link">Previous</a></li>
      {renderPageBlocks()}
      <li className={`page-item ${(index + pageBlockLimit) > numPages ? "disabled" : ""}`}><a className="page-link">Next</a></li>
    </ul>
  );
}

export default Pagination;