import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <h1>Math-magicians</h1>
    <ul id="nav-id">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/app">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
