import React, {useState} from 'react';
import {Card, CardBody, Button} from "reactstrap";
import {UncontrolledCollapse} from "reactstrap";
import {Carousel} from "reactstrap";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";




const App = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (<>

        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Redirect to="/home" /></Route>
                <Route path="/home" component={HomePage} />
            </Switch>
        </BrowserRouter>
        <ToastContainer/>
    </>);
};

export default App;