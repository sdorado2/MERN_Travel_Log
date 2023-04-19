const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="css/styles.css" />
        </head>
        <body>
          <div className="navBar">
            <h1>PostLog</h1>
          </div>
          <div className="mainContainer">{this.props.children}</div>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
