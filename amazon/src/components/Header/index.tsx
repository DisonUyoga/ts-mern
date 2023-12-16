import './index.scss'
import { NavLink } from 'react-router-dom'
import { MdMenu, MdLogin } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
const nav__links = [
  {
    display: 'Cart',
    path: '/cart',
    component: <FaShoppingCart color='white' className='icon' />,
  },
]

const Header = () => {
  return (
    <header>
      <div className='header__wrapper'>
        <div className='logo'>
          <NavLink
            to='.'
            className={({ isActive }) =>
              isActive ? 'logo__brand active__color' : 'logo__brand'
            }
          >
            D&W Mtumba
          </NavLink>
        </div>
        <div className='nav__wrapper'>
          <div className='nav__links down__menu'>
            {nav__links.map((link) => (
              <NavLink
                className={({ isActive }) => (isActive ? 'active__color' : '')}
                to={link.path}
                key={link.path}
              >
                <div className='link__item'>
                  {link.component}
                  <span className='display'>{link.display}</span>
                </div>
              </NavLink>
            ))}
            <NavLink
              className={({ isActive }) =>
                isActive ? 'login__btn active__color' : 'login__btn'
              }
              to='/login'
            >
              <div className='link__item'>
                <MdLogin color='white' className='icon' />
                <span className='display'>Sign in</span>
              </div>
            </NavLink>
          </div>
        </div>

        <div className='menu__icon'>
          <MdMenu color='white' />
        </div>
      </div>
    </header>
  )
}

export default Header
