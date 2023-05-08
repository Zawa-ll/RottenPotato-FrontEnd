import './App.css';
import Home from './component/home';
import NavBar from './component/navbar';
import { Route, Switch, Redirect } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import FetchTesting from './component/FetchTesting';
import Center from './component/Center';
import SearchBar from './component/searchbar';
import LoginForm from './component/loginForm';
import FakeNavBar from './component/fakeNavBar';
import Display from './component/display';
import Login_V2 from './component/login_v2';
import DetailPage from './component/detailPage';
import LoginForm3 from './component/LoginForm3';
import RegisterForm from './component/registerForm';


function App() {
  return (
    <div>
      <FakeNavBar />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path='/login3' component={LoginForm3}></Route>
          <Route path="/searchbar" component={SearchBar}></Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/fetchtesting" component={FetchTesting} />
          <Route path="/center" component={Center} />
          <Route path="/loginform" component={LoginForm}></Route>
          <Route path="/display" component={Display}></Route>
          <Route path="/login_v2" component={Login_V2}></Route>
          <Route path="/registerform" component={RegisterForm}></Route>
          <Route path="/detailpage" component={DetailPage}></Route>

          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
