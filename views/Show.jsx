const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout title={log.title}>
        <h1>Show Page</h1>
        <img src={log.img} alt="image" />
        <h2>{log.summary}</h2>
        <a href="/">Back</a>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
