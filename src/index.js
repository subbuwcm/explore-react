import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import NinjaApp from './NinjaApp';
import ToDoApp from './ToDoApp'
import App from './App'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

/*ReactDOM.render(<NinjaApp />, document.getElementById('ninjas-app'));
ReactDOM.render(<ToDoApp />, document.getElementById('todo-app'));
ReactDOM.render(<PokeballApp />,document.getElementById('pokeball-app'))*/

ReactDOM.render( <Provider store={store}> <App /> </Provider>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
