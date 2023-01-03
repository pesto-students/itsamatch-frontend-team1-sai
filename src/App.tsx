import "./App.css"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

import { Layout } from "antd";
const { Header, Footer,Content } = Layout;


const App: React.FC = () => (
  <Layout>
      <Header>
        <NavBar />
      </Header>
      <Content style={{minHeight: '80vh'}}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Dating App &copy;2022</Footer>
  </Layout>
);


export default App;
