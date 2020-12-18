import { Alert, Button } from "antd"
import styled from "styled-components"
import media from '../../common/responsive/device'

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  ${media.desktop`
    max-width: 400px;
    width: 100%;
    margin: auto;
  `}
  ${media.tablet`
    max-width: 70%;
    width: 100%;
    margin: auto;
  `}
`

export const SubmitButton = styled(Button)`
  width: 100%;
`

export const ErrorAlert = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`
