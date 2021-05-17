
import './App.css';
import Header from './components/header';
import Inbox from './components/inbox';
import Sent from './components/sent';
import Settings from './components/settings';
import Sidebar from './components/sidebar';
import {BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

function App() {
  return <>
  <Router>
  <Header></Header>
  <div className="main__body">
  <Sidebar></Sidebar>
  <div className="emailList">
  <Settings></Settings>
  <Switch>
  <Route path="/inbox" component={Inbox} exact={true}></Route>
  <Route path="/draft" render={() => <Sent value="Draft"></Sent>}></Route>
  <Route path="/sent" render={() => <Sent value="Sent"></Sent>}></Route>
  </Switch>
  </div>
  </div>
  </Router>
  </>
}

export default App;
