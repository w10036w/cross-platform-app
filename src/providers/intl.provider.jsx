import React from 'react'
import { IntlProvider as Provider } from 'react-intl'

const langCode = 'en'
const messages = { i18n: 'i18n message' }

const IntlProvider = ({ children }) => (
  <Provider locale={langCode} messages={messages}>
    {children}
  </Provider>
)

export default IntlProvider