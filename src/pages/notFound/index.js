import React from 'react';
import { Helmet } from "react-helmet";
import { Wrapper } from "./index.styled";

const pageTitle = "todo - About us."
const pageDescription = "We love learning - every day, in every form."

const NotFound = () => <>
  <Helmet>
    <title>{pageTitle}</title>
    <meta property="og:title" content={pageTitle} />
    <meta name="description" content={pageDescription} />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
  </Helmet>
  <Wrapper>404!</Wrapper>
</>

export default NotFound;



