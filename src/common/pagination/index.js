import React from 'react';
import ReactPaginate from 'react-paginate';
import "./index.css";

const Pagination = ({
  currentPage, totalPages, pageChangeHandler, valueHandler, pageSize, options, loading
}) => {
  return (
    <div className="admin-pagination">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={pageChangeHandler}
        activeClassName={'active'}
        forcePage={currentPage ? currentPage - 1 : null} // first page is 0 that's why -1
      />
      {
        totalPages > 0 && <div>
          <select
            onChange={({ target: { value } }) => valueHandler(value)}
            value={pageSize}
            disabled={loading}
          >
            {
              options.map(option => <option key={option} value={option}>{option}</option>)
            }
          </select>
        </div>
      }
    </div>
  );
}

export default Pagination;
