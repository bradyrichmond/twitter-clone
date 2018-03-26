import React, { Component } from 'react';
import style from '../style';
import { connect } from 'react-redux';
import { deleteTweet } from '../actions';

class Tweet extends Component {
    constructor(props) {
        super(props);
        this.handleTweetDelete = this.handleTweetDelete.bind(this);
    }

    handleTweetDelete() {
        this.props.dispatch(deleteTweet({...this.props}))
    }

    render() {
        return (
            <div style={style.tweet}>
                <h3>{this.props.authorName} - @{this.props.authorHandle} - {this.props.timestamp}</h3>
                <div>{this.props.text}</div>
                <a style={style.deleteLink} onClick={this.handleTweetDelete}>Delete Tweet</a>
            </div>
        )
    }
}

export default connect(state => state)(Tweet);