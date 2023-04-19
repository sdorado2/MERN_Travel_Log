const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <h1>New Page</h1>

        <form className="newForm" action="/" method="POST">
          Image URL : <input type="url" name="img" required={true} />
          Title : <input type="text" name="title" required={true} />
          Date : <input type="date" name="date" required={true} />
          <br />
          <p>Summary : </p>
          <textarea
            maxLength="240"
            minLength="10"
            name="summary"
            required={true}
          ></textarea>
          City : <input type="text" name="city" required={true} />
          Country : <input type="text" name="country" required={true} />
          <input type="submit" value="Submit" />
        </form>
        <a className="newBack" href="/">
          <button>Back</button>
        </a>
      </DefaultLayout>
    );
  }
}

module.exports = New;
