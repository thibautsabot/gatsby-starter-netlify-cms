import Layout from '../components/Layout'
import { Link } from 'gatsby'
import React from 'react'
import logo from '../img/round-logo.png'

const NotFoundPage = () => (
  <Layout>
    <div className="notFound">
      <h1>Désolé, il n'y a pas de banane sur cette page</h1>
      <img className="notFoundLogo" src={logo} alt="logo banane plantee" />
      <p><Link to="/">Retourner a la page d'acceuil</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
