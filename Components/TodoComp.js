import React from 'react';
import ReactDom from 'react-dom';
import {AddNewTask} from './addNewTask';
import {ToDoAppList} from './todoapplist';

export class ToDoApp extends React.Component
{
 constructor(props) {
 	 super();
     this.state = {task: props.task};
	 this.updatedList = this.updatedList.bind(this);
	 this.removeTask = this.removeTask.bind(this);
 }
 updatedList(text){
	  var updatedTask = this.state.task;
	  updatedTask.push(text);
	  this.setState({tasks: updatedTask});
 }	
 removeTask(text) {
     var updatedTask = this.state.task;
	 /* at the text postition remove element and remove 1 element*/
	 updatedTask.splice(updatedTask.indexOf(text),1);
	 this.setState({tasks: updatedTask});
 }	
   render() {
	   //console.log(this.props.task);
   	  return (
		  <div>
		     <h1>TODO App</h1>
			 <AddNewTask updatedList={this.updatedList}/>
			 <ToDoAppList tasks={this.state.task} remove={this.removeTask}/> 	 
		</div>
		);   
   } 
}