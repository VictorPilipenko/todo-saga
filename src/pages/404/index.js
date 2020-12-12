import React from 'react';
import { FormattedMessage } from 'react-intl'
import { useHistory } from 'react-router-dom'
import DefaultHelmet from '../../common/helmet/default';
import { GoHome, Wrapper } from "./index.styled"

const NotFound = () => {
  const history = useHistory()
  return <>
    <DefaultHelmet 
      title="helmet.404.title" 
      description="helmet.404.description" 
    />
    <Wrapper>404!</Wrapper>
    <GoHome
      size='large'
      type='primary'
      onClick={() => {
        history.push('/todo')
      }}
    ><FormattedMessage id="404.button" /></GoHome>
  </>
}

export default NotFound



