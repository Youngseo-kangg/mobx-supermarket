import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li>
        <Link to='/'>상품</Link>
      </li>
      <li>
        <Link to='/cart'>카트</Link>
      </li>
    </ul>
  );
}

export default Nav;
