import React from 'react';
import ReactDom from 'react-dom';

/** Redux imports **/
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './redux-components/app';
const store = createStore(allReducers); 
/** Redux imports Ends **/


import {ToDoApp} from '../Components/TodoComp';
var TaskList = ['Task1','Task2','Task3','Task4','Task5','Task6','task7','task8'];


import { DBProvider, connectDB } from 'lovefield';
import { schema, Type as t } from 'lovefield';



//const AppContainer = connectDB(getters, setters)(App);

const dataStore = schema.create('Tododb', 1);


 dataStore.createTable('Movie')
  .addColumn('id', t.INTEGER)
  .addColumn('title', t.STRING)
  .addColumn('year', t.INTEGER)
  .addColumn('rating', t.STRING)
  .addColumn('company', t.STRING)
  .addPrimaryKey(['id']);

dataStore.connect().then( function(Tododb) {
  var Movies = Tododb.getSchema().table('Movie');
  //return Tododb.select(lf.fn.count(Movies.id)).from(Movies).exec();
  const newRows = [];	
   var row = Movies.createRow({
  		'id': 24,
  		'title': 'FST title',
	     'year': 2017,
	     'rating': '5 Star',
	     'company': 'IZAP',
	  
	});  
	newRows.push(row);
	var row = Movies.createRow({
  		'id': 25,
  		'title': 'second title',
	     'year': 2017,
	     'rating': '5 Star',
	     'company': 'IZAP',
	  
	});
	newRows.push(row);
	Tododb.insertOrReplace().into(Movies).values(newRows).exec().then(
     function(newRows) {
		 newRows.forEach(function(row) {
		 	 //console.log(newRows);
		
		 });
      	 
  });
	
}); 
 ReactDom.render(
  <div>
	<ToDoApp task={TaskList}/>
    <Provider store={store}><App/></Provider> 
  </div>,
  document.getElementById('todo')
); 
 
