
import './App.css';

import { Route, Routes } from "react-router-dom";
import Login from './views/component/Login';
import Main from './views/component/Main';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/main" exact element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
