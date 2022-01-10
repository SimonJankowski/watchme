import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from "./streams/StreamList";
import Header from "./Header";


// 212385834203-9c5iefnhgln8v35u8ch4m2tup1b52nok.apps.googleusercontent.com
// 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



const PageOne = () => {
    return <div>PageOne</div>
}

const PageTwo = () => {
    return <div>
        PageTwo
        <button>Suck my dick!</button>
    </div>
}


const App = () => {
    return (
        <div className="ui container">

            <BrowserRouter>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" component={StreamCreate} />
                <Route path="/streams/edit" component={StreamEdit} />
                <Route path="/streams/delete" component={StreamDelete} />
                <Route path="/streams/show" component={StreamShow} />
            </BrowserRouter>
        </div>
    )
}

export default App;