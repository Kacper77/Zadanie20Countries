/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries';

render(
    <Provider store={store}>
    	<div>
        	<h1>Inicjalizacja projektu</h1>
        	<DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());