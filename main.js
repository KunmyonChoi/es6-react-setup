import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

class App extends React.Component {
	render () {
		let txt = this.props.txt;
		return <h1>Hello, {txt}</h1>
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
};

ReactDOM.render(
	<App txt="this is the props value." />, 
	document.getElementById('app')
);