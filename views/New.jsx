const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <a href="/">Back</a>
        <h1>New Page</h1>

        <form action="/" method="POST">
          Image URL : <input type="url" name="img" required={true} />
          <br />
          Title : <input type="text" name="title" required={true} />
          <br />
          Date : <input type="date" name="date" required={true} />
          <br />
          <p>Summary : </p>
          <textarea
            maxLength="240"
            minLength="10"
            name="summary"
            required={true}
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
