import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    countarr: [
      { id: 1, value: 8 },
      { id: 2, value: 1 },
      { id: 3, value: 4 },
      { id: 4, value: 5 },
      { id: 5, value: 9 }
    ]
  };
  eventHandlerC = countarrID => {
    console.log("Event HAndler Called", countarrID);
  };
  render() {
    return (
      <div>
        {this.state.countarr.map(variable => (
          <Counter
            Keey={variable.id}
            value={variable.value}
            selected={true}
            onDeleteC={this.eventHandlerC}
          >
            <h4>Tittle {variable.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
