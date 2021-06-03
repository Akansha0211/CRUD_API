import './App.css';
import Posts from './posts';
import Comments from './comments';
import AddPost from './addPost';
import SearchPost from './searchPost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={Posts}/>
        <Route exact path ='/comments' component={Comments}/>
        <Route exact path ="/add/post" component={AddPost}/>
        <Route exact path='/post/userId' component={SearchPost}></Route>
      </Switch>
    </Router>
  );
}

export default App;
