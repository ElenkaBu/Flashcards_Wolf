const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

module.exports = function personalArea({ user }) {
  return (
    <Layout>
      <Header user={user} />
      <div>
        <p>{`Добро пожаловать ${user.name}`}</p>
        <p>{`Ваш логин: ${user.name}`}</p>
        <p>{`Ваш пароль:${user.password}`}</p>
      </div>
    </Layout>
  );
};
