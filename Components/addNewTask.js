import React from 'react';
import ReactDom from 'react-dom';

export class AddNewTask extends React.Component{
	constructor(){
		super();
		this.justSubmitted = this.justSubmitted.bind(this);
	}
	justSubmitted(event){
		event.preventDefault();
		var inputValue = document.querySelector('input').value;
		this.props.updatedList(inputValue);
	}
  render(){
  	return (
		   <div>
			  <form onSubmit={this.justSubmitted}>
		      	 <input type="text"/>
		          <button type="submit">Submit</button>
		      </form>
		   </div>
		);
   }
}