import { Link, NavLink, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

function Navbar() {
  return (
    <>
      <h1>Navbar</h1>

      <ul>
        <li>
          <NavLink to="/">Home </NavLink>
        </li>

        <li>
          <NavLink to="/notfound">PageNotFound </NavLink>
        </li>
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
