
import React from 'react'
import { FormattedMessage } from 'react-intl';
import { FooterBlock } from './index.styled';

const FooterApp = () => {
  return (
    <FooterBlock>
      <FormattedMessage id="app.footer" />
    </FooterBlock>
  );
};

export default FooterApp
