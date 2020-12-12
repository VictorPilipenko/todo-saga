import { Helmet } from "react-helmet"
import { FormattedMessage } from 'react-intl'

const DefaultHelmet = ({ title, description }) => {
  return <>
    <FormattedMessage id={title}>
      {titleMessage => <Helmet><title>{titleMessage}</title></Helmet>}
    </FormattedMessage>
    <FormattedMessage id={description}>
      {descriptionMessage => description && <Helmet><meta name="description" content={descriptionMessage || ""} /></Helmet>}
    </FormattedMessage>
  </>
}

export default DefaultHelmet
