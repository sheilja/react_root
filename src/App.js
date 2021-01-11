//I changed for branch practice
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Menu from './Menu';
import Aboutus from './Aboutus';
import Home from './Home';
import Contactus from './Contactus';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu/>
      <div className="content">
      <Route path="/" exact component={Home}/>
      <Route path="/aboutus" component={Aboutus}/>
      <Route path="/contactus" component={Contactus}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
