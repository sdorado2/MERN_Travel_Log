const React = require("react");
const DefaultLayout = require("./layout/Default");

class Edit extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout>
        <form action={`/${log._id}?_method=PUT`} method="POST">
          Image URL :{" "}
          <input type="url" name="img" defaultValue={log.img} required={true} />
          <br />
          Title :{" "}
          <input
            type="text"
            name="title"
            defaultValue={log.title}
            required={true}
          />
          <br />
          Date :{" "}
          <input
            type="date"
            name="date"
            defaultValue={log.date}
            required={true}
          />
          <br />
          Summary :
          <textarea
            defaultValue={log.summary}
            maxLength="240"
            minLength="10"
            name="summary"
            required={true}
          ></textarea>
          <br />
          <input type="submit" value="Update" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
