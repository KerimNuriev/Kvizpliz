const React = require('react');

module.exports = function Navbar({ authUser }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {authUser ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Звукоблако
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {authUser.name}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Личный кабинет
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">
                Выйти
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Звукоблако
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registration">
                Зарегистрироваться
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth">
                Войти
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
