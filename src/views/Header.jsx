const React = require('react');

module.exports = function Header({ user }) {
  return (
    (!user ? (
      <div className="header">
        <a href="/" className="headerlink">Домой</a>
        <a href="/login" className="headerlink">Войти</a>
        <a href="/registration" className="headerlink">Зарегистрироваться</a>
      </div>
    ) : (
      <div className="header">
        <a href="/personalArea" className="headerlink">Личный кабинет</a>
        <a href="/api/logout" className="headerlink" id="logout">Выйти</a>
        <a href="/" className="headerlink">На главную</a>
      </div>
    ))
  );
};
