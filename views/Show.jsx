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

        <a href="/">
          <button>Back</button>
        </a>
        <form action={`/${log._id}?_method=delete`} method="POST">
          <input type="submit" value="delete" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
