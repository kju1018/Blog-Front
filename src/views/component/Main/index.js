import { Route, Routes } from "react-router-dom";
import Layout from "../common/layout";

import Login from "../Login";
import SignUp from "../SignUp";

function Main(props) {
  console.log("main: ", props);

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </Layout>
  );
}

export default Main;
