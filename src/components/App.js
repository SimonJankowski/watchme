import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from "./streams/StreamList";
import Header from "./Header";
import history from "../history";


// 212385834203-9c5iefnhgln8v35u8ch4m2tup1b52nok.apps.googleusercontent.com
// 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

const App = () => {
    return (
        <div className="ui container">

            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;