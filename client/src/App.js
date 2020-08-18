import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import configureStore from './store/configureStore'

import UniversitiesPage from './containers/Universities'
import FeedsPage from './containers/Feeds'

const history = createBrowserHistory()
const store = configureStore(history)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={UniversitiesPage}></Route>
        <Route
          exact
          path="/universities/:university_id/feeds"
          component={FeedsPage}
        ></Route>
      </Router>
    </Provider>
  )
}

export default App
