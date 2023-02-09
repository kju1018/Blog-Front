import "./App.css";
import "./css/gnb.css";
import "./css/swiper.css";
import "./css/top.css";
import "./css/cloneTstory.css";

import { Route, Routes } from "react-router-dom";
import Main from "./views/component/Main";
import Blog from "./views/component/Blog";

function App() {
  return (
    <div className="App" style={{minWidth: '1280px'}}>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
