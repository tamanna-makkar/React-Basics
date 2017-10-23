var React = require('react');
var reactDom = require('react-dom');
import { Link } from "react-router";
export default class RoutingLayout extends React.Component {
	render(){
		return(
			<div className="commentContainer">		
			    {this.props.childern}
			    <Link to="Archive">Archives</Link>
			    <Link to="Settings">Settings</Link>
			    <h1>Routing Example</h1>
			</div>
		);
	} 
}