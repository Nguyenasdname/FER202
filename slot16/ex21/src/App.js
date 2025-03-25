import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './components/UserList';
import UserDetails from './components/UserDetails';
import DishesList from './components/DishesList';
import DishDetails from './components/DishDetails';

function App() {
  const linkClass = ({ isActive }) =>
    "list-group-item list-group-item-action" + (isActive ? " active" : "");

  return (
    <BrowserRouter>
      <div className="container py-5">
        <div className="row">
          {/* Nav Pane */}
          <nav className="col-md-3 mb-4">
            <div className="list-group">
              <NavLink to="/" className={linkClass} end>Users</NavLink>
              <NavLink to="/dishes" className={linkClass}>Dishes</NavLink>
            </div>
          </nav>

          {/* Content */}
          <main className="col-md-9">
            <Routes>
              <Route path="/" element={<UsersList />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/dishes" element={<DishesList />} />
              <Route path="/dishes/:id" element={<DishDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
