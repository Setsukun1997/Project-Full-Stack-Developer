import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import IdeaForm from './components/IdeaForm';
import Detail from './components/Detail';
import EditForm from './components/EditForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<><IdeaForm /><Dashboard /></>} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/edit/:id" element={<EditForm />} />
    </Routes>
  </Router>
);
import Home from './Home';
import Dashboard from './Dashboard';
// ... other imports

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/dashboard" element={<><IdeaForm /><Dashboard /></>} />
  <Route path="/detail/:id" element={<Detail />} />
  <Route path="/edit/:id" element={<EditForm />} />
</Routes>

export default App;

