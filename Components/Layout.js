var React = require('react');
var reactDom = require('react-dom');
import Header from "./Header";
import Footer from "./Footer";
export default class Bacon extends React.Component{
	constructor(){
		super();
		this.name = "This is Constructor Componentn";
		this.state = {name: "Willlllll"};
	}
	edit(){
		return(
			alert('this is going to Edit')
		);
	}
	remove(){
		return(
			alert('This is going to Delete')
		);
	}
	render(){
		const title = "Welcom Will";
		setTimeout(() => {
		  this.setState({name: "Bob"});	
		},1000)
		return(
			<div className="commentContainer">				
			  <h2>{this.name}</h2>
			  <h3>{this.state.name}</h3>
			  <Header/>
			  <Footer  title="Avatar" genre="Action"/>
			  <h3>{title}</h3>
			  <h1>*********Eventa Handling************</h1>
			  <div className="module2">
				 <h1>{this.state.name}</h1>
			    <button onClick={this.edit} className="button-primary">Edit</button>
			    <button onClick={this.remove} className="button-danger">Remove</button>
			  </div>
			
			</div>
		);
	} 
}