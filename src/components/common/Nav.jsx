import { Link } from 'react-router-dom';
import { NavComponent } from '../../styles/nav';
function Nav() {
  return (
    <NavComponent>
      <ul>
        <li>
          <Link to='/'>상품</Link>
        </li>
        <li>
          <Link to='/cart'>카트</Link>
        </li>
      </ul>
    </NavComponent>
  );
}

export default Nav;
