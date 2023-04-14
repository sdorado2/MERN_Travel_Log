const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout>
        <h1>Show Page</h1>
        <h1>{log.summary}</h1>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
