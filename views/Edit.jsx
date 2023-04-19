const React = require("react");
const DefaultLayout = require("./layout/Default");

class Edit extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout>
        <h1>Edit - Page</h1>
        <form
          className="editForm"
          action={`/${log._id}?_method=PUT`}
          method="POST"
        >
          Image URL :{" "}
          <input type="url" name="img" defaultValue={log.img} required={true} />
          Title :{" "}
          <input
            type="text"
            name="title"
            defaultValue={log.title}
            required={true}
          />
          Date :{" "}
          <input
            type="date"
            name="date"
            defaultValue={log.date}
            required={true}
          />
          Summary :
          <textarea
            defaultValue={log.summary}
            maxLength="240"
            minLength="10"
            name="summary"
            required={true}
          ></textarea>
          <input type="submit" value="Update" />
        </form>
        <a className="editBack" href="/">
          <button>Back</button>
        </a>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
