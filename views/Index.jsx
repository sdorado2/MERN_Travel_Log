const React = require("react");
const DefaultLayout = require("./layout/Default");

class Index extends React.Component {
  render() {
    const travel = this.props.log;
    return (
      <DefaultLayout>
        <h1>Index Page</h1>
        <a href="/new">Add New</a>
        {travel.map((entry) => {
          return <h1>{entry.title}</h1>;
        })}
      </DefaultLayout>
    );
  }
}

module.exports = Index;
