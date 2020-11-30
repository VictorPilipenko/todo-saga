import React from "react"
import styled from "styled-components"
import Pagination from "../../../common/pagination"

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 21px;
    color: #868e96;
  }
`

const TodoHead = ({ pagination, setPageSize, pageChangeHandler, loading }) => {
  return (
    <TodoHeadBlock>
      <Pagination
        loading={loading}
        currentPage={pagination.currentPage}
        pageSize={pagination.pageSize}
        totalPages={pagination.totalPages}
        valueHandler={setPageSize}
        pageChangeHandler={pageChangeHandler}
        options={[1, 2, 3]}
      />
    </TodoHeadBlock>
  );
}

export default React.memo(TodoHead)
