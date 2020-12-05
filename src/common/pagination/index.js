import React from 'react'
import { Pagination } from 'antd'

const PaginationComponent = ({
  current,
  total,
  pageSize,
  onChange,
  ...rest
}) => {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      {...rest}
    />
  );
}

export default PaginationComponent
