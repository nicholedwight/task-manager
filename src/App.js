import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import './scss/main.scss';
import Tasklist from './Tasklist';
import useToken from './useToken';

function App() {
  const {token, setToken} = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            {/* <Route path="Dashboard" element={<Dashboard />} /> */}
            <Route path="/" element={<Tasklist id="1" content="this is a task item" />} />
          </Routes>
        </BrowserRouter>

      </main>
    </div>
  );
}

export default App;
