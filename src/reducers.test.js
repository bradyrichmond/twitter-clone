import deepFreeze from 'deep-freeze';
import reducer from './reducers';
import { fetchTweetsRequest, fetchTweetsFailure, postTweetRequest, postTweetFailure, deleteTweetRequest, deleteTweetFailure } from './actions';

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(reducer(undefined, {})).toEqual({twitter:{}})
    })

    it('should return isFetching true', () => {
        const stateBefore = {
            twitter: {
                isFetching: false,
                isPosting: false,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        const action = fetchTweetsRequest();

        const stateAfter =  { 
            twitter: {
                isFetching: true,
                isPosting: false,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it('should return isFetching false', () => {
        const stateBefore = {
            twitter: {
                isFetching: true,
                isPosting: false,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        const action = fetchTweetsFailure();

        const stateAfter = {
            twitter: {
                isFetching: false,
                isPosting: false,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it('should return isPosting true', () => {
        const stateBefore = {
            twitter: {
                isFetching: false,
                isPosting: false,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        const action = postTweetRequest();

        const stateAfter = {
            twitter: {
                isFetching: false,
                isPosting: true,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it('should return isPosting false', () => {
        const stateBefore = {
            twitter: {
                isFetching: false,
                isPosting: true,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        const action = postTweetFailure();

        const stateAfter = {
            twitter: {
                isFetching: false,
                isPosting: false,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it('should return isDeleting true', () => {
        const stateBefore = {
            twitter: {
                isFetching: false,
                isPosting: false,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        const action = deleteTweetRequest();

        const stateAfter = {
            twitter: {
                isFetching: false,
                isPosting: false,
                isDeleting: true,
                tweets: [],
                text: ''
            }
        };

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it('should return isDeleting false', () => {
        const stateBefore = {
            twitter: {
                isFetching: false,
                isPosting: false,
                isDeleting: true,
                tweets: [],
                text: ''
            }
        };

        const action = deleteTweetFailure();

        const stateAfter = {
            twitter: {
                isFetching: false,
                isPosting: false,
                isDeleting: false,
                tweets: [],
                text: ''
            }
        };

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

});