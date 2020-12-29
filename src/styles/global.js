import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  .ant-form-vertical .ant-form-item-label {
    padding: 0px !important;
  }

  .ant-tag-green {
    color: #335f1e !important;
    background: #f6ffed !important;
    border-color: #b7eb8f !important;
  }

  .ant-tag-red {
    color: #f5222d !important;
    background: #fafafa !important;
    border-color: #ffa39e !important;
  }
  
`

export default GlobalStyle
