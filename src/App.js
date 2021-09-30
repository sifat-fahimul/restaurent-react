import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Notfound from './components/Notfound/Notfound';
import About from './components/About/About';
import Restaurant from './components/Restaurant/Restaurant';
import MealDetails from './components/MealDetails/MealDetails';


function App() {
  return (
    <div className=''>
      <Router>
        <Header></Header>
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
          <Route exact path='/restaurant'>
            <Restaurant></Restaurant>
          </Route>
          <Route exact path='/meal'>
            <Restaurant></Restaurant>
          </Route>
          <Route exact path='/meal/:mealId'>
            <MealDetails></MealDetails>
          </Route>



          <Route path='*'>
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
