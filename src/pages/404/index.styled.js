import { Button } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background: linear-gradient(84deg, #a8ff61, #38d9a9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #38d9a9;
  font-size: 140px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
`

export const GoHome = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 10px;
  bottom: 20%;
`
