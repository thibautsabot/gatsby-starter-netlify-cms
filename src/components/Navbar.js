import { Link } from "gatsby";
import React from "react";
import logo from "../img/header-outline.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      subnavActive: false,
      navBarActiveClass: "",
      subnavBarActiveClass: "",
    };
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
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  toggleSubNavbar = () => {
    console.log(this.state.subnavActive)
    // toggle the active boolean in the state
    this.setState(
      {
        subnavActive: !this.state.subnavActive,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.subnavActive
          ? this.setState({
            subnavBarActiveClass: "is-active",
            })
          : this.setState({
            subnavBarActiveClass: "",
            });
      }
    );
  };

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
              <div className={`navbar-item has-dropdown ${this.state.subnavBarActiveClass}`}  onClick={() => this.toggleSubNavbar()}>
                <p className="navbar-link">
                  Recettes
                </p>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/tags/entree">
                    Entrées
                  </Link>
                  <Link className="navbar-item" to="/tags/vegetarien">
                    Plats végétariens
                  </Link>
                  <Link className="navbar-item" to="/tags/viande">
                    Plats avec viandes
                  </Link>
                  <Link className="navbar-item" to="/tags/dessert">
                    Desserts
                  </Link>
                  <Link className="navbar-item" to="/tags/petitdej">
                    Petit déjeuner
                  </Link>
                  <Link className="navbar-item" to="/tags/antigaspi">
                    Anti gaspi
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/tags/zerodechet">
                Zéro déchet
              </Link>
              <Link className="navbar-item" to="/tags/autre">
                Autres articles
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Présentation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
