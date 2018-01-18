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
		//e.preventDefault();
		let newNum = parseInt(e.target.value);
		if(!newNum) {
			newNum = 0;
		}
		this.setState({[e.target.name]: newNum});
		console.log(this.state);
	}

	calculateTotal() {
		this.setState({total: this.state.num1+this.state.num2});
  	}

	render() {
		return(

		<div className="container">
  		<h1>Add with React!</h1>
		  <div className="add">
		    <input type="text" name="num1" onChange={this.handleInputs}/>
		    <span>+</span>
		    <input type="text" name="num2" onChange={this.handleInputs}/>
		    <span>=</span>
		    <h3>{this.state.total}</h3>
		  </div>
		</div>

		)
	}
}

export default Calculator;