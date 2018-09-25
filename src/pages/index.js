import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import profileImage from '../assets/profile.jpg';

const IndexPage = () => (
  <Layout>
    <div className="container">
      <figure className="photo image is-128x128">
        <img className="is-rounded" src={profileImage} alt="Luan Orlandi" />
      </figure>
      <h1 className="title has-text-centered">Luan Orlandi</h1>
      <h2 className="subtitle has-text-centered">Desenvolvedor Web</h2>
    </div>
    <section className="section is-size-4 is-size-5-touch">
      <div className="container content">
        <h4 className="title">
          Olá, eu sou Luan Orlandi{' '}
          <span role="img" aria-label="aceno">
            👋
          </span>
        </h4>
        <p>
          Sou desenvolvedor Web, trabalho com Front-end criando aplicações e
          páginas Web. Participo de eventos de tecnologia e gosto de estudar
          produtividade e comunicação, que me ajuda a manter organizado e
          colaborativo.
        </p>
        <p>
          Desenvolvo projetos usando principalmente JavaScript com React e Node.
        </p>
        <p>
          Veja meus <Link to="/page-2">projetos pessoais</Link>.
        </p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
