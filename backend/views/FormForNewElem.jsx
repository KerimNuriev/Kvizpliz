const React = require('react');
const Layout = require('./Layout');

module.exports = function FormForNewElem() {
  return (
    <div className="d-flex justify-content-center">
      <form id="formAdd" className="container-sm w-50 mt-5">
        <div className="mb-3">
          <h1>Добавить карточку</h1>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Название
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Описание
          </label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            URL фотачки
          </label>
          <input
            name="img"
            type="text"
            className="form-control"
            id="password"
          />
          <p style={{ color: 'black' }} className="errorMessageNew" />
        </div>

        <button id="btnReg" type="submit" className="btn btn-primary">
          Сабмит
        </button>
      </form>
    </div>
  );
};
