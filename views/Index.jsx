const React = require("react");
const DefaultLayout = require("./layout/Default");

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <h1>Index Page</h1>
        <a href="/new">Add New</a>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
