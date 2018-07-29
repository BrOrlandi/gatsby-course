import React from 'react';
import Link from 'gatsby-link';

import profileImage from '../assets/luan.jpg';

const socialMedias = [
  { icon: 'fa-github', link: 'https://github.com/luanorlandi' },
  { icon: 'fa-twitter', link: 'https://twitter.com/luanorlandi' },
  { icon: 'fa-medium', link: 'https://medium.com/@luanorlandi' },
  { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/luanorlandi/' },
];

const IndexPage = () => (
  <div>
    <div className="">
      <div className="container">
        <div className="columns is-mobile">
          <div className="column level">
            <div className="level-item">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src={profileImage}
                  alt="Luan Orlandi Profile"
                />
              </figure>
            </div>
            <h1 className="title has-text-centered">
              Luan Orlandi
            </h1>
            <h2 className="subtitle has-text-centered">
              Desenvolvedor Web
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns is-mobile is-centered">
          {socialMedias.map(socialMedia => (
            <div className="column is-1">
              <a href={socialMedia.link}>
                <span className="icon is-large">
                  <i className={`fab fa-2x ${socialMedia.icon}`} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <section className="section is-size-3-desktop is-size-4-touch">
        <div className="container content">
          <h3 className="title">
            Olá, eu sou o Luan Orlandi!
          </h3>
          <p>
            Sou desenvolvedor web, trabalho com Front-end criando aplicações
            e páginas Web.
            Participo de eventos de tecnologia e gosto de estudar produtividade,
            comunicação e gamificação, que me ajuda a manter organizado e
            colaborativo.
          </p>
          <p>
            Desenvolvo projetos usando principalmente JavaScript com React e Node.
          </p>
          <p>
            Veja meus
            {' '}
            <Link to="/page-2/">
              projetos pessoais.
            </Link>
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default IndexPage;
