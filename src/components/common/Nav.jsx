import { Link } from 'react-router-dom';
import { NavComponent } from '../../styles/nav';
function Nav() {
  return (
    <NavComponent>
      <ul>
        <li>
          <Link to='/'>์ํ</Link>
        </li>
        <li>
          <Link to='/cart'>์นดํธ</Link>
        </li>
      </ul>
    </NavComponent>
  );
}

export default Nav;
