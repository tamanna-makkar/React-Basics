import React from 'react';
import ReactDom from 'react-dom';

export class ToDoAppList extends React.Component {
	constructor(){
		super();
		this.remove = this.remove.bind(this);
	}
	remove(elem){
	     var Rmvvalue = elem.target.parentNode.querySelector('span').innerText;
		 this.props.remove(Rmvvalue);
	}
	render(){
		 //console.log(this.props.tasks);
		var items = this.props.tasks.map((elem,i) => {
			return <li key={i}><span>{elem}</span><button onClick={this.remove}>X</button></li>
		});
		return (
		<div>	
			   <ul>
					{items}
			   </ul>
		</div>	
		);	
	}
}