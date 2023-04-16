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
          return (
            <div key={entry._id}>
              {/* <img src={entry.img} alt="image" /> */}
              <h1>
                <a href={`/${entry._id}`}>{entry.title}</a>
              </h1>
              <time>Visited : {new Date(entry.date).toDateString()}</time>
              <form>
                <a href={`/${entry._id}/edit`}>Edit</a>
              </form>
              <form action={`/${entry._id}?_method=delete`} method="POST">
                <input type="submit" value="delete" />
              </form>
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}

module.exports = Index;
