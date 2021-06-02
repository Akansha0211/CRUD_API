import './App.css';
import Posts from './posts';
import Comments from './comments';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={Posts}/>
        <Route exact path ='/comments' component={Comments}/>
      </Switch>
    </Router>
  );
}

export default App;
