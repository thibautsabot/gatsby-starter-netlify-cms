import { Link } from 'gatsby'
import React from 'react'
import logo from '../img/header-outline.png'

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
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img width="150px" height="50px" src={logo} alt="Logo" />
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
              <Link className="navbar-item" to="/tags/cuisine">
                Recettes
              </Link>
              <Link className="navbar-item" to="/tags/zerodechet">
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
