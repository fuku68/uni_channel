import React from 'react'
import { Provider } from "react-redux"
import { createBrowserHistory } from "history"
import configureStore from './store/configureStore'

const history = createBrowserHistory();
const store = configureStore(history);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  )
}

export default App
