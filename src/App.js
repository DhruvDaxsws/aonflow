import './App.scss';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <Router>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
