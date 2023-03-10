import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from '../src/assets/images/logo_with_name.svg';
import { Layout } from 'antd';
import { MenuBar } from './components';
import { EditProfilePage, Home, Likes, Login, Matches, PageNotFound, Register } from './pages';
import styles from './App.module.scss';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

const { Content, Footer, Header } = Layout;

Sentry.init({
  dsn: 'https://01fd072da8d244c7b06ce8ba92f2181c@o4504436238385152.ingest.sentry.io/4504440908283904',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header className={styles.header_layout}>
        <div className={styles.logo}>
          <img src={logo} alt="img" />
        </div>
      </Header>

      <Layout className={styles.site_layout}>
        <MenuBar />
        <Content className={styles.site_content}>
          <Routes>
            <Route path="/editmyprofile" element={<EditProfilePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/" index element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Dating App &copy;2023</Footer>
    </Layout>
  );
};

export default App;
