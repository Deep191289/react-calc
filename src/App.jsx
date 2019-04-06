import React, { Component } from "react";
import "./App.css";
import {Button} from "./components/Button";
import { Input } from "./components/Input";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addBackspace = val => {
    this.setState({input: this.state.input.slice(0, -1)});
  };

  addReset = val => {
    this.setState({input: this.state.input});
  };
  
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".")=== -1) {
      this.setState({input: this.state.input + val});
    }
  };

  addZeroToInput = val => {
   if(this.state.input !== ""){
     this.setState({input: this.state.input + val});
   }
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) })
  }
  render() {
    return (<div className="app">
      <div className="calc-wrapper">
        <div className="calc-heading">Calculator</div>
        <Input input={this.state.input} />
        <div className="row">
          <Button handleClick={this.addToInput}>(</Button>
          <Button handleClick={this.addToInput}>)</Button>
          <Button handleClick={this.addBackspace}>CE</Button>
          <Button handleClick={() => this.setState({ input: "" })}>C</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;