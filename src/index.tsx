import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import '/home/mc05/projects/react-invoice/node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
