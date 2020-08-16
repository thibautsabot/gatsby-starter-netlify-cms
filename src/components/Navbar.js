import { Link } from 'gatsby'
import React from 'react'
import github from '../img/github-icon.svg'
import logo from '../img/header-outline-medium.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Logo" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">

              <Link className="navbar-item" to="/about">
                Acceuil
              </Link>
              <Link className="navbar-item" to="/products">
                Recettes
              </Link>
              <Link className="navbar-item" to="/products">
                Zéro déchet
              </Link>
              <Link className="navbar-item" to="/blog">
                Articles cuisine
              </Link>
              <Link className="navbar-item" to="/contact">
                Autres articles
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Présentation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
