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
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './country.css'

render(
    <Provider store={store}>
    	<div>
    		<DevTools />
        	<Router history={hashHistory} routes={routes}/>
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());