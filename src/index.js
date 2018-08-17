import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import Children from './Children'
import Children2 from './Children2'

// Provider给所有组件提供store
// 组件中需要使用 connect(mapStateToProps,)(component) 方法来包裹导出的组件，以连接store
const R = (
  <Provider store={store}>
      <BrowserRouter>
          <div>
              <App />
              <Route path={'/'} exact component={Children}/>
              <Route path={'/detail/:id'} exact component={Children2}/>
          </div>
      </BrowserRouter>
  </Provider>
);

ReactDOM.render(R, document.getElementById('root'));
registerServiceWorker();
