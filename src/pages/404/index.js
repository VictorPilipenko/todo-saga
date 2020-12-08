import React from 'react';
import { Helmet } from "react-helmet"
import { useHistory } from 'react-router-dom'
import { GoHome, Wrapper } from "./index.styled"

const pageTitle = "todo - Page Not Found"
const pageDescription = "We love learning - every day, in every form."

const NotFound = () => {
  const history = useHistory()
  return <>
    <Helmet>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
    <Wrapper>404!</Wrapper>
    <GoHome
      size='large'
      type='primary'
      onClick={() => {
        history.push('/todo')
      }}
    >Go Home</GoHome>
  </>
}

export default NotFound



