import React, {Component} from 'react';

class Calculator extends Component {

	constructor(props) {
		super(props)
		this.state = {
			total: 0
		}

		this.calculateTotal = this.calculateTotal.bind(this);
		this.handleInputs = this.handleInputs.bind(this);
	}

	handleInputs(e) {
    let newNum = parseInt(e.target.value, 10);
    if(!newNum) {
			newNum = 0;
		}
    // setState has an optional callback if you need the reset value
    // within the handleInputs function
		this.setState({[e.target.name]: newNum}, function(){
      console.log('state in callback (after update)', this.state);
    });
	}

	calculateTotal() {
    // We can do this to make sure that 0 is assigned if there's no other value
    // Also, this function wasn't being called, so I added an onClick to the span
    let num1 = this.state.num1 || 0;
    let num2 = this.state.num2 || 0;
		this.setState({total: num1+num2});
	}

	render() {
		return(

		<div className="container">
  		<h1>Add with React!</h1>
		  <div className="add">
		    <input type="text" name="num1" onChange={this.handleInputs}/>
		    <span>+</span>
		    <input type="text" name="num2" onChange={this.handleInputs}/>
		    <span onClick={this.calculateTotal}>=</span>
		    <h3>{this.state.total}</h3>
		  </div>
		</div>

		)
	}
}

export default Calculator;
