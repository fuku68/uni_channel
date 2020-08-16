import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import configureStore from './store/configureStore'

import UniversitiesPage from './containers/Universities'

const history = createBrowserHistory()
const store = configureStore(history)

function App() {
  return (
    <Provider store={store}>
      <div>
        <UniversitiesPage />
      </div>
    </Provider>
  )
}

export default App
