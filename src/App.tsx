import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import {
  Home,
  Login,
  MenuBar,
  NavBar,
  PageNotFound,
  Register,
} from "./components";
import { Layout } from "antd";
const { Content, Footer, Header, Sider } = Layout;

Sentry.init({
  dsn: "https://01fd072da8d244c7b06ce8ba92f2181c@o4504436238385152.ingest.sentry.io/4504440908283904",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,

});
const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuBar />
      <Layout className="site-layout">
        <Header style={{ padding: 0 }}>
          <NavBar />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route index element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            .
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Dating App &copy;2023</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
