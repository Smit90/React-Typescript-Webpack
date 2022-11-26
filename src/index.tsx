import ReactDOM from 'react-dom'
import { App } from './App'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { Provider } from 'react-redux'
import tasks from './reducer'
const { data } = require('../data/index.js')

const store = createStore(
  tasks, // reducers
  data, // optional, just sample tasks
  composeWithDevTools()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
