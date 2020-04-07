import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/:postId" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
