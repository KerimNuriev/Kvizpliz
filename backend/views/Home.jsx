const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const Card = require('./Card');
const FormForNewElem = require('./FormForNewElem');

module.exports = function Home({ authUser, arr }) {
  return (
    <Layout>
      <Navbar authUser={authUser} />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mainPage">
        {arr?.length &&
          arr.map((el) => <Card card={el} key={el.id} authUser={authUser} />)}
      </div>
      {authUser && <FormForNewElem />}
    </Layout>
  );
};
