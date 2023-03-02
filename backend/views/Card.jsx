const React = require('react');

module.exports = function Card({ card, authUser }) {
  return (
    <div data-id={card.id} className="col oneCard">
      <div className="card shadow-sm">
        <h6 style={{ textAlign: 'center' }}>{card.title}</h6>
        <img
          style={{ height: '280px' }}
          className="bd-placeholder-img card-img-top"
          width="50%"
          src={card.img}
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />

        <div className="card-body">
          <p className="card-text">{card.description}</p>
          <p>{card['User.name']}</p>
          <div className="d-flex justify-content-between align-items-center">
            {authUser?.id === card.user_id ? (
              <div className="btn-group">
                <button
                  type="button"
                  data-id={card.id}
                  className="btn btn-sm btn-outline-secondary delete"
                >
                  Delete
                </button>
                <button
                  type="button"
                  data-id={card.id}
                  className="btn btn-sm btn-outline-secondary edit"
                >
                  Edit
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
