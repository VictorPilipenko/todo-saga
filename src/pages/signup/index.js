
import React from "react";
import { Helmet } from "react-helmet";
import SignUp from './components/signup'

const pageTitle = "todo - Main Page"
const pageDescription = "We love learning - every day, in every form."

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <SignUp />
    </>
  );
}
export default SignUpPage;
