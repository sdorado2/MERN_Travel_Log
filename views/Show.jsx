const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const log = this.props.log;
    console.log(`Show GEO :${log.geo}`);
    console.log(`Show GEO :${log.geo.country}`);
    return (
      <DefaultLayout title={log.title}>
        <h1>Show Page</h1>
        <img src={log.img} alt="image" className="logImg" />
        <h2>{log.summary}</h2>
        <h3>Country : {log.geo.country}</h3>
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
