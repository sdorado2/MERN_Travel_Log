const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <h1>New Page</h1>
      </DefaultLayout>
    );
  }
}

module.exports = New;
