const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" type="text/css" href="/style.css" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <header>
            <nav
              className="navbar navbar-light"
              style={{ backgroundColor: "#32CD32" }}
            >
              <a
                className="navbar-brand font-weight-bold"
                style={{ fontSize: 30 }}
                href="/"
              >
                Expense Tracker
              </a>
            </nav>
          </header>
          <div className="container-fluid">{this.props.children}</div>
          <footer>
            &copy; 2018 by Beng Hui{" "}
            <a href="https://github.com/benghui/expense-tracker-">
              Expense Tracker
            </a>
            .
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
