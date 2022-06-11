// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        {/* header section added here */}
        <Header></Header>
        {/* all paths added here */}
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
          {/* footer section added */}
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
