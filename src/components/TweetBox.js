import React, { Component } from 'react';
import TweetList from './TweetList';
import TweetForm from './TweetForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class TweetBox extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={TweetList} />
                    <Route path='/create' component={TweetForm} />
                </div>
            </Router>
        )
    }
}

export default TweetBox;