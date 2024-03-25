import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Form from './components/Form';
import Search from './components/Search';
import User from './components/User';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user/:id" element={<User/>} />
      </Routes>
    </Router>
  );
};

export default App;