const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function Main({ title, user }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      {!user ? (
        <div className="mainHello">
          <button type="click" className="btn btn-primary btnlogin play">ИГРАТЬ</button>
          <div className="err-btn" />
        </div>
      ) : (
        <div className="sdf">
          <a href="/topic/1" id="1" className="topic">JavaScript</a>
          <br />
          <a href="/topic/2" id="2" className="topic">Правда или ложь</a>
          <br />
          <a href="/topic/3" id="3" className="topic">Школьные вопросы</a>
        </div>
      )}
      <script src="/js/main.js" />
    </Layout>
  );
}

module.exports = Main;
