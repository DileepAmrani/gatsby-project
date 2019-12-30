import PropTypes from "prop-types"
import React from "react"
import './header.scss'
import Logo from '../../images/logo.png'
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";


const Header = ({ siteTitle }) => (
  <header>
    <ul className="nav">
      <li>
        <a href="#home">How It Works</a>
      </li>
      <li>
        <a href="#news">Apply</a>
      </li>
      <li>
        <a href="#news">Available Programs <AiFillCaretDown style={{ verticalAlign: 'middle' }} /></a>
        <ul>
          <li>
            <a href="#news">Artifical Intelligence  </a>
          </li>
          <li>
            <a href="#news">Cloud Native and Mobile Web Computing  </a>
          </li>
          <li>
            <a href="#news">Blockchain  </a>
          </li>
          <li>
            <a href="#news">Internet Of Things  </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#news">Student Center<AiFillCaretDown style={{ verticalAlign: 'middle' }} />  </a>
        <ul>
          <li>
            <a href="#news">Karachi Entry Test Announcement</a>
          </li>
          <li>
            <a href="#news">Commencement of Classes</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#news">About<AiFillCaretDown style={{ verticalAlign: 'middle' }} /></a>
        <ul>
          <li>
            <a href="#news">The President</a>
          </li>
          <li>
            <a href="#news">Managment Commitee</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#news">WIT</a>
      </li>
    </ul>
    {/* <h2 >%</h2> */}
    <label className='menu-toggle'>
      <AiOutlineMenu size={30} />
    </label>


    <div className='main-logo'>
      <img className="logo" alt="Logo" src={Logo} />
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
