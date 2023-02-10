import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import { MenuBar, NavBar, PageNotFound } from "./components";
import { Home, Login, Register } from "./pages";

const { Content, Footer, Header } = Layout;

Sentry.init({
  dsn: "https://01fd072da8d244c7b06ce8ba92f2181c@o4504436238385152.ingest.sentry.io/4504440908283904",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ padding: 0 }}>
        <NavBar />
      </Header>

      <Layout className="site-layout">
        <MenuBar />
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
              <Route path="/" index element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            .
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Dating App &copy;2023</Footer>
    </Layout>
  );
};

export default App;
