const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <h1>New Page</h1>

        <form>
          Image URL : <input type="url" />
          <br />
          Title : <input type="text" required={true} />
          <br />
          Date : <input type="date" required={true} />
          <br />
          <p>Summary : </p>
          <textarea maxLength="240" minLength="10" required={true}></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
