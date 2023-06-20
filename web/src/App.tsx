import { Helmet } from 'react-helmet'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="Syncline Software Solutions">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </>
  )
}

export default App
