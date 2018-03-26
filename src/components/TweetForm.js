import React, { Component } from 'react';
import style from '../style';
import { connect } from 'react-redux';
import { tweetTextChanged, postTweet } from '../actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

var formatDate = () => {
    var dto = new Date();
    var month = dateNumToName(dto.getMonth());
    var day = dto.getDate();
    var year = dto.getFullYear();
    var hour = dto.getHours();
    var minute = dto.getMinutes();

    hour = hour > 12 ? hour % 12 : hour;
    var dateString = `${month} ${day}, ${year} ${hour}:${minute}`;
    return dateString;
}

const dateNumToName = (month) => {
    if (month === 0) {
        return "Jan";
    } else if (month === 1) {
        return "Feb";
    } else if (month === 2) {
        return "Mar";
    } else if (month === 3) {
        return "Apr";
    } else if (month === 4) {
        return "May";
    } else if (month === 5) {
        return "Jun";
    } else if (month === 6) {
        return "Jul";
    } else if (month === 7) {
        return "Aug";
    } else if (month === 8) {
        return "Sep";
    } else if (month === 9) {
        return "Oct";
    } else if (month === 10) {
        return "Nov";
    } else if (month === 11) {
        return "Dec";
    }
}

class TweetForm extends Component {

    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(e) {
        this.props.dispatch(tweetTextChanged(e.target.value));
    }

    handleSubmit() {
        let tweet = {};

        tweet.authorName = 'Timmy Tweeter';
        tweet.authorHandle = 'Timmy';
        tweet.text = this.props.text;
        tweet.timestamp = formatDate();

        this.props.dispatch(postTweet(tweet));
        this.props.history.push('/');
    }

    render() {
        return (
            <form style={style.tweetForm} onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder="What's happening?"
                    style={style.tweetFormText}
                    value={this.props.text}
                    onChange={this.handleTextChange} />

                <Link to='/'><input 
                    type='button'
                    style={style.tweetFormPost}
                    value='Cancel' />
                </Link>
                
                <input
                    type='submit'
                    style={style.tweetFormPost}
                    value='Tweet' />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        text: state.twitter.text 
    };
};

export default connect(mapStateToProps)(withRouter(TweetForm));