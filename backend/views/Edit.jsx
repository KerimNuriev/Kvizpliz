const React = require('react');
const Layout = require('./Layout');

module.exports = function Edit({ card }) {
  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <form id="formEdit" className="container-sm w-50 mt-5">
          <div className="mb-3">
            <h1>Изменить карточку</h1>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Название
            </label>
            <input
              name="title"
              type="text"
              defaultValue={card.title}
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
              defaultValue={card.description}
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
              defaultValue={card.img}
              className="form-control"
              id="password"
            />
            <p style={{ color: 'black' }} className="errorMessageEdit" />
          </div>

          <button id="btnReg" type="submit" className="btn btn-primary">
            Сабмит
          </button>
        </form>
      </div>
    </Layout>
  );
};
