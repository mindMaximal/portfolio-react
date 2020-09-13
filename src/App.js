import React from 'react';
import {HashRouter} from 'react-router-dom';

import {Main} from "./components/Main";

document.title = "Волков Евгений | Web-developer";

function App() {

    return (
      <HashRouter>
         <Main />
      </HashRouter>
    );
}

export default App;
