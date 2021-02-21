import React, { useState} from "react"
import './pagination.css'
import {Link, useLocation} from "react-router-dom";

function Pagination({totalPages, currentPage, setPage, count}) {

  const pagesSize = 10;

  const pagesCount = Math.ceil(totalPages / pagesSize)

  let [pagesNumber, setPagesNumber] = useState(1)
  let prevPageNumber = (pagesNumber - 1) * pagesSize + 1;
  let nextPageNumber = pagesNumber * pagesSize;

  let location = useLocation()
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pagesNumber > 1 && <span>
                <button onClick={() => {
                  setPagesNumber(1)
                }}> {"<<"} </button>
                <button onClick={() => {
                  setPagesNumber(pagesNumber - 1)
                }}> {"<"} </button>
            </span>
      }
      {pages
        .filter(p => p >= prevPageNumber && p <= nextPageNumber)
        .map(i =>
        <Link to={`${location.pathname}?page=${i}`}
              key={i}
              className={"page-link " + (+currentPage === +i || !currentPage && i === 1 ? "active" : "")}
              onClick={() => setPage(i)}
        >
          {i}
        </Link>
      )}
      { pagesCount > pagesNumber && <span>
                <button onClick={() => {setPagesNumber(pagesNumber + 1) }}> {">"} </button>
                <button onClick={() => {setPagesNumber(pagesCount) }}> {">>"} </button>
            </span>
      }
    </div>
  )
}

export default Pagination;