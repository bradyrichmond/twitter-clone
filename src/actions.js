import axios from 'axios';

const API_URL = '/api/tweets';

// GET
export const FETCH_TWEETS_REQUEST = 'FETCH_TWEETS_REQUEST';
export const FETCH_TWEETS_FAILURE = 'FETCH_TWEETS_FAILURE';
export const FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

// POST
export const POST_TWEET_REQUEST = 'POST_TWEET_REQUEST';
export const POST_TWEET_SUCCESS = 'POST_TWEET_SUCCESS';
export const POST_TWEET_FAILURE = 'POST_TWEET_FAILURE';
export const TWEET_TEXT_CHANGE = 'TWEET_TEXT_CHANGE';

// DELETE
export const DELETE_TWEET_REQUEST = 'DELETE_TWEET_REQUEST';
export const DELETE_TWEET_SUCCESS = 'DELETE_TWEET_SUCCESS';
export const DELETE_TWEET_FAILURE = 'DELETE_TWEET_FAILURE';

// GET
export const fetchTweets = () => dispatch => {
    dispatch(fetchTweetsRequest());
    return axios.get(API_URL)
        .then(({ data }) => {
            dispatch(fetchTweetsSuccess(data));
        })
        .catch(res => {
            dispatch(fetchTweetsFailure());
        });
}

export const fetchTweetsRequest = () => {
    return {
        type: FETCH_TWEETS_REQUEST,
        isFetching: true
    }
}

export const fetchTweetsSuccess = tweets => dispatch => {
    dispatch(receiveTweets(tweets));
    return { 
        type: FETCH_TWEETS_SUCCESS,
        isFetching: false
    }
}

export const fetchTweetsFailure = () => {
    return {
        type: FETCH_TWEETS_FAILURE,
        isFetching: false
    };
}

export const receiveTweets = tweets => {
    return { 
        type: RECEIVE_TWEETS, 
        tweets: tweets
    };
}

// POST
export const postTweet = (tweet) => dispatch => {
    dispatch(postTweetRequest())
    axios.post(API_URL, tweet).then(() => {
        dispatch(postTweetSuccess());
    })
    .catch(err => {
        dispatch(postTweetFailure());
    });
}

export const postTweetRequest = () => {
    return {
        type: POST_TWEET_REQUEST,
        isPosting: true
    }
}

export const postTweetSuccess = tweets => dispatch => {
    dispatch(fetchTweets());
    dispatch(tweetTextChanged(''));
    return {
        type: POST_TWEET_SUCCESS,
        isPosting: false
    }
}

export const postTweetFailure = () => {
    return {
        type: POST_TWEET_FAILURE,
        isPosting: false
    };
}

export const tweetTextChanged = (text) => {
    return{
        type: TWEET_TEXT_CHANGE,
        text
    }
}

// DELETE
export const deleteTweet = (tweet) => dispatch => {
    dispatch(deleteTweetRequest());
    axios.delete(`${API_URL}/${tweet._id}`).then(() => {
        dispatch(deleteTweetSuccess());
    })
    .catch(err => {
        dispatch(deleteTweetFailure());
    });
}

export const deleteTweetRequest = () => {
    return {
        type: DELETE_TWEET_REQUEST,
        isDeleting: true
    }
}

export const deleteTweetSuccess = () => dispatch => {
    dispatch(fetchTweets());
    return {
        type: DELETE_TWEET_SUCCESS,
        isDeleting: false
    }
}

export const deleteTweetFailure = () => {
    return {
        type: DELETE_TWEET_FAILURE,
        isDeleting: false
    };
}