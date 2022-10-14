const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

module.exports = function Topic({ user, quest }) {
  return (
    <Layout>
      <Header user={user} />
      <div id="questForm">
        { quest.map((el) => (
          <div className="container" key={`${el.id}`}>
            <p>{`${el.question}`}</p>
            <form id={el.id}>
              <label htmlFor="exampleInputPassword1" className="form-label">Ответ:</label>
              <input name="answer" type="text" className="form-control" />
              <button type="submit" className="btn btn-primary" id={`${el.id}`}>Ответить</button>
              <div className="err-answer" />
              <br />
            </form>
          </div>
        ))}
      </div>
      <script src="/js/answer.js" />
    </Layout>
  );
};
