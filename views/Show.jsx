const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const log = this.props.log;
    console.log(`Show GEO :${log.geo}`);
    console.log(`Show GEO.Country :${log.geo[0].country}`);
    console.log(`Show Weather : ${log.forecast}`);
    return (
      <DefaultLayout title={log.title}>
        <div className="show">
          <h1>{log.title}</h1>
          <img src={log.img} alt="image" className="logImg" />

          <h3>
            Location : {log.geo[0].city}, {log.geo[0].country}
          </h3>
          <h3>
            Weather : {log.forecast[0].temperatureMax} &#176;C |{" "}
            {log.forecast[0].temperatureMin} &#176;C
          </h3>
          <p>{log.summary}</p>
        </div>
        <div className="showOptions">
          <a href="/">
            <button>Back</button>
          </a>
          <form action={`/${log._id}?_method=delete`} method="POST">
            <input type="submit" value="delete" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
