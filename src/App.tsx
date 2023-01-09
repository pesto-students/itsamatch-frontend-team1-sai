import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { Home, Login, NavBar, PageNotFound, Register } from './components';

import { Layout } from 'antd';

const { Content, Footer, Header } = Layout;

Sentry.init({
  dsn: 'https://01fd072da8d244c7b06ce8ba92f2181c@o4504436238385152.ingest.sentry.io/4504440908283904',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const App: React.FC = () => (
  <Layout>
    <Header>
      <NavBar />
    </Header>
    <Content style={{ minHeight: '80vh' }}>
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
