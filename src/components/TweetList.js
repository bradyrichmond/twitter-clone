import React, { Component } from 'react';
import Tweet from './Tweet';
import style from '../style';
import { fetchTweets } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TweetList extends Component {

    constructor(props) {
        super(props);

        this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
    }

    loadTweetsFromServer() {
        this.props.dispatch(fetchTweets());
    }

    componentDidMount() {
        this.loadTweetsFromServer();
    }

    render() {

        let tweetNodes = this.props.tweets ? this.props.tweets.map(tweet => {
            return (
                <Tweet {...tweet} key={tweet['_id']} />
            );
        }) : 'No Tweets';

        return (
            <div style={style.tweetBox}>
                <Link to='/create'><input type='button' style={style.tweetFormPost} value='Post a tweet!' /></Link>
                <h2>Tweets:</h2>
                <div style={style.tweetList}>
                    {tweetNodes}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.twitter.tweets
    };
}

export default connect(mapStateToProps)(TweetList);