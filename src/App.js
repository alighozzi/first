import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import ExerciceList from './components/ExerciceList'
import EditExercice from './components/EditExercice'
import createExercice from './components/createExercice'
import CreateUser from './components/CreateUser'
function App() {
  return (
   <Router>
     <div className="container">
     <Navbar/>
     <br/>
     <Route path="/" exact component={ExerciceList} />
     <Route path="/edit/:id" component={EditExercice} />
     <Route path="/create" component={createExercice} />
     <Route path="/user" component={CreateUser} />
     </div>
   </Router>
  );
}

export default App;
