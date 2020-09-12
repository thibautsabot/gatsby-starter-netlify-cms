import Banner from "../components/Banner";
import BlogIndexPage from "../pages/blog";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import React from "react";
import logo from "../img/round-logo.png";

const IndexPage = () => {
  return (
    <Layout>
      <Banner title={"Acceuil"} />
      <section className="section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12 justified">
                      <h1 className="has-text-weight-semibold is-size-2">
                        Bienvenue dans ma cuisine !
                      </h1>
                      <p>
                        Je suis passionnée de cuisine et je me suis lancée dans
                        l'aventure zéro déchet depuis quelques mois. En effet,
                        suite à une prise de conscience et une envie de réduire
                        mon impact écologique, j’ai entrepris de nombreuses
                        modifications dans ma vie et surtout dans ma cuisine.
                      </p>
                      <p className="smallText">
                        <Link to="/presentation">
                          Si vous voulez en savoir plus
                        </Link>
                        , n’hésitez pas à vous rendre dans la partie
                        présentation.
                      </p>
                      <p>
                        Sur ce blog, je vous partage donc mes nombreuses de
                        recettes, autant sucrées que salées. Mais également mon
                        expérience et mes astuces en ce qui concerne le zéro
                        déchet.
                      </p>
                      <p>
                        Bonne visite sur <strong>Bananeplantée !</strong>
                      </p>
                      <div className="logoAcceuilContainer">
                        <img
                          className="logoAcceuil"
                          alt="logos bananeplantee"
                          src={logo}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h1 className="has-text-weight-semibold is-size-2">
                      Derniers articles
                    </h1>
                    <BlogIndexPage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
