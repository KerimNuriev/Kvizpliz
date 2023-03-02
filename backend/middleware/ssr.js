const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponent(
  reactComponent,
  props = {},
  options = { htmlOnly: false }
) {
  const reactElement = React.createElement(reactComponent, {
    ...this.app.locals, // передать app.locals
    ...this.locals, // передать res.locals
    ...props, // передать пропсы
  });

  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  if (options.htmlOnly) {
    return html;
  }
  const document = `<!DOCTYPE html>${html}`;
  this.send(document);
}

function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;
