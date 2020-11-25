import React from 'react';
import ReactPaginate from 'react-paginate';
import "./index.css";

const Pagination = (params) => {
  const currentPage = params.currentPage ? params.currentPage - 1 : null; // first page is 0 that's why -1
  return (
    <div className="admin-pagination">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={params.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={params.pageChangeHandler}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        forcePage={currentPage}
      />
      {
        params.totalPages > 0 && <div>
          <select
            onChange={({ target: { value } }) => params.valueHandler(value)}
            value={params.pageSize}
          >
            {
              params.options.map(option => <option key={option} value={option}>{option}</option>)
            }
          </select>
        </div>
      }
    </div>
  );
}

export default Pagination;
