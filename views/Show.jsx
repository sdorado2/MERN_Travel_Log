const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const log = this.props.log;
    console.log(`Show GEO :${log.geo}`);
    console.log(`Show GEO.Country :${log.geo[0].country}`);
    return (
      <DefaultLayout title={log.title}>
        <h1>{log.title}</h1>
        <img src={log.img} alt="image" className="logImg" />

        <h3>
          Location : {log.geo[0].city}, {log.geo[0].country}
        </h3>
        <p>{log.summary}</p>
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
