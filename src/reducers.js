import { combineReducers } from 'redux'

import {
    FETCH_TWEETS_REQUEST,
    FETCH_TWEETS_SUCCESS,
    FETCH_TWEETS_FAILURE,
    RECEIVE_TWEETS,
    POST_TWEET_REQUEST,
    POST_TWEET_SUCCESS,
    POST_TWEET_FAILURE,
    DELETE_TWEET_REQUEST,
    DELETE_TWEET_SUCCESS,
    DELETE_TWEET_FAILURE,
    TWEET_TEXT_CHANGE
 } 
from './actions';

const twitter = (state = {}, action) => {
    switch (action.type) {
        case FETCH_TWEETS_REQUEST:
        case FETCH_TWEETS_SUCCESS:
        case FETCH_TWEETS_FAILURE:
            return { ...state, isFetching: action.isFetching };
        case RECEIVE_TWEETS:
            return { ...state, tweets: action.tweets };
        case POST_TWEET_REQUEST:
        case POST_TWEET_SUCCESS:
        case POST_TWEET_FAILURE:
            return { ...state, isPosting: action.isPosting };
        case DELETE_TWEET_REQUEST:
        case DELETE_TWEET_SUCCESS:
        case DELETE_TWEET_FAILURE:
            return { ...state, isDeleting: action.isDeleting };
        case TWEET_TEXT_CHANGE:
            return {...state, text: action.text};
        default:
            return state;
    };
};

const rootReducer = combineReducers({
    twitter
});

export default rootReducer;