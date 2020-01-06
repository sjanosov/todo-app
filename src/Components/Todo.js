import React from "react";

class Todo extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return (
      <div
        style={{
          textDecoration: this.props.todo.complete ? "line-through" : ""
        }}
      >
        {this.props.todo.text}
      </div>
    );
  }
}
export default Todo;
export const MemoizedTodo = React.memo(Todo);
