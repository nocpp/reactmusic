import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from  './style';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <IconStyle></IconStyle>
      <GlobalStyle></GlobalStyle>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
