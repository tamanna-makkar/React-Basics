import React from 'react';
import ReactDom from 'react-dom';
import {ToDoApp} from '../Components/TodoComp';
var TaskList = ['Task1','Task2','Task3','Task4','Task5','Task6','task7','task8'];
ReactDom.render(
  <div>
  
	<ToDoApp task={TaskList}/>
  </div>,
  document.getElementById('todo')
);
 
