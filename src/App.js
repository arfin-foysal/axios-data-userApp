import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AddUser from './Components/User/AddUser';
import EditUser from './Components/User/EditUser';
import User from './Components/User/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/users/add" exact component={AddUser}/>
          <Route path="/users/user/:id" exact component={User}/>
          <Route path="/users/edit/:id" exact component={EditUser}/>
          <Route path="/about" exact component={About}/>
         <Route path="/home" exact component={Home}/>
         <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
