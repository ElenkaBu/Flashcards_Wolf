const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function Main({ title, user }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      {!user ? (
        <div className="mainHello">
          <p>Добро пожаловать! Пожалуйста зарегистрируйтесь!</p>
        </div>
      ) : (
        <div className="sdf">
          <a href="/topic" className="topic">Тема 1</a>
          <br />
          <a href="/topic" className="topic">Тема 2</a>
          <br />
          <a href="/topic" className="topic">Тема 3</a>
        </div>
      )}
    </Layout>
  );
}

module.exports = Main;
