const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

module.exports = function Topic({ user }) {
  return (
    <Layout>
      <Header user={user} />
      <form>
        <div className="container">
          <p>Вопроссссссссссссс</p>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ответ:</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Отправить</button>
        </div>
      </form>
    </Layout>
  );
};
