import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["React", "Angular", "Vue"]
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
    padding: "5px",
    margin: "20px"
  };
  // EventHandlefunc() {}
  render() {
    console.log("props man", this.props.selected);
    const classed = "badge badge-warning";
    return (
      <div style={this.styles}>
        {this.props.children}
        <h1 className={classed}>the state vaule is {this.state.value}</h1>
        <p>Check function {this.funccount()}</p>
        <button
          onClick={() => {
            this.EventHandlefunc("Function With Parameter using( =>) function");
          }}
        >
          Click Here
        </button>
        <button onClick={() => this.props.onDeleteC(this.props.Keey)}>
          Delete
        </button>
        <p>count is incremented by setstate property = {this.state.value}</p>

        {/* <ul>
          {this.state.tags.map(varible => (
            <li key={varible}>{varible}</li>
          ))}
          {this.state.tags.length === 0 && <p>Create a new oNe</p>}
        </ul> */}
      </div>
    );
  }

  EventHandlefunc = Department => {
    console.log("Event Handle Triggred-", this.state.value, "-", Department);
    this.setState({ value: this.state.value + 1 });
  };
  funccount() {
    return this.state.value === 0 ? "zero" : "not zero";
  }
}

export default Counter;
