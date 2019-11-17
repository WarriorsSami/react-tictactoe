import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './components/App';

ReactDOM.createRoot(document.getElementById('tictactoe')).render(<App />);

serviceWorker.register();
