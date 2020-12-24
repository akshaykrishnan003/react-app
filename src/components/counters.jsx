import * as React from "react";
import { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {

    console.log("Counters - Rendered");

    const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} 
        className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
