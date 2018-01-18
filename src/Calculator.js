import React, {Component} from 'react';

class Calculator extends Component {

	constructor(props) {
		super(props)
		this.state = {
			total: 0
		}

		this.calculateTotal = this.calculateTotal.bind(this);
	}

	calculateTotal(event) {
		event.preventDefault();
		if(event.target.value===''){
			this.setState({total: 0});
		} else {
			this.setState({total: parseInt(this.state.total + parseInt(event.target.value))});
		}
  	}

	render() {
		return(

		<div className="container">
  		<h1>Add with React!</h1>
		  <div className="add">
		    <input type="text" onInput={(e) => this.calculateTotal(e)} />
		    <span>+</span>
		    <input type="text" onInput={(e) => this.calculateTotal(e)} />
		    <span>=</span>
		    <h3>{this.state.total}</h3>
		  </div>
		</div>

		)
	}
}

export default Calculator;