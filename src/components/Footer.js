import React from 'react'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw', justifyContent: "space-between" }} className="footer-colums">
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a href="mailto:bananeplantee@hotmail.com" className="footer-item" to="/">
                        Contact
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="instagram" href="https://www.instagram.com/bananeplantee/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
