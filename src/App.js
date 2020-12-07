import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
            <Footer/>

        </>
    );
}

export default App;
