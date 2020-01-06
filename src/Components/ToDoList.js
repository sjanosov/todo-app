import React, { Fragment } from "react";
import ToDoForm from "./ToDoForm";
import MemoizedTodo from "./Todo";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormGroup from "@material-ui/core/FormGroup";

const paperStyle = {
  margin: "auto",
  width: "40%",
  background: "white"
};

const headerStyle = {
  color: "#ebd9d9",
  textAlign: "center",
  fontSize: "90px",
  fontWeight: "400",
  padding: "20px"
};

const FormGroupStyle = {
  paddingLeft: "40px"
};

class ToDoList extends React.Component {
  state = {
    todos: [],
    todosToShow: "all"
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    }));
  };

  addTodo = todo => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  deleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  updateTodoToShow = status => {
    this.setState({
      todosToShow: status
    });
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todosToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <Fragment>
        <h1 style={headerStyle}>todos</h1>
        <Paper style={paperStyle}>
          <Grid container direction="column" justify="center">
            <ToDoForm onSubmit={this.addTodo} />
            {todos.map(todo => (
              <div key={todo.id}>
                <FormGroup aria-label="position" row style={FormGroupStyle}>
                  <FormControlLabel
                    labelPlacement="end"
                    label={<MemoizedTodo key={todo.id} todo={todo} />}
                    control={
                      <Checkbox
                        checked={todo.complete}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        onClick={() => this.toggleComplete(todo.id)}
                      />
                    }
                  />
                  <FormControlLabel
                    labelPlacement="start"
                    control={
                      <Checkbox
                        indeterminate
                        inputProps={{
                          "aria-label": "indeterminate checkbox"
                        }}
                        onClick={() => this.deleteTodo(todo.id)}
                      />
                    }
                  />
                </FormGroup>
                <hr style={{ border: "1px solid #3f51b5" }} />
              </div>
            ))}
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            Todos left: {this.state.todos.filter(todo => !todo.complete).length}{" "}
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.updateTodoToShow("all")}
            >
              all
            </Button>
            <Button
              style={{ margin: "20px" }}
              variant="contained"
              color="primary"
              onClick={() => this.updateTodoToShow("active")}
            >
              active
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.updateTodoToShow("complete")}
            >
              complete
            </Button>
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}
export default ToDoList;

// export default React.memo(ToDoList);
