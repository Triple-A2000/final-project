import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container flex space-between align-center">
        <h1>React Store</h1>
        <nav>
          <ul className="flex gap-20">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''}>Product</NavLink></li>
            <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;