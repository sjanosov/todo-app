import React from "react";
import shortid from "shortid";
import TextField from "@material-ui/core/TextField";

const inputStyle = {
  width: "100%",
  fontStyle: "italic"
};
class ToDoForm extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form
        style={{ marginTop: "40px", marginBottom: "40px", width: "100%" }}
        onSubmit={this.handleSubmit}
      >
        <TextField
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="         What needs to be done?"
          style={inputStyle}
        />
      </form>
    );
  }
}

export default ToDoForm;
