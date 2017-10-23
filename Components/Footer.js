var React = require('react');
var reactDom = require('react-dom'); 

export default class Footer extends React.Component{ 
	render() {
		return (
			   <div>
			   	<h2>{this.props.title}</h2>
		  		<h3>{this.props.genre}</h3>
				<footer>Footer Element</footer>  
			    </div>
		);
	}
}