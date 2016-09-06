import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			red: 0,
			green: 255,
			blue: 128
		}
		this.update = this.update.bind(this);
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value,
		});
	}
	render () {
		return (
			<div>
				<Slider ref="red" update={this.update} value={this.state.red} />
				{this.state.red} <br />
				<Slider ref="green" update={this.update} value={this.state.green} />
				{this.state.green} <br />
				<Slider ref="blue" update={this.update} value={this.state.blue} />
				{this.state.blue} <br />
			</div>
		)
	}
}

class Slider extends React.Component {
	render () {
		return (
			<input type="range"
				min="0"
				max="255"
				value={this.props.value}
				onChange={this.props.update} />
		)
	}
}

const Widget = (props) => {
	return (
		<div>
			<input onChange={props.update} />
			<h1>{props.txt}</h1>
		</div>
	)
}

export default App