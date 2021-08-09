import { API_URL_SPACEX } from "../../constants";

export const SET_NEWS_LIST = 'NEWS::SET_NEWS_LIST';
export const SET_ERROR_STATUS = 'NEWS::SET_ERROR_STATUS';
export const SET_IDLE_STATUS = 'NEWS::SET_IDLE_STATUS';
export const SET_LOADING_STATUS = 'NEWS::SET_LOADING_STATUS';

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS });
export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS });
export const setIdleStatus = () => ({ type: SET_IDLE_STATUS });

export const setNewsList = newsList => ({
    type: SET_NEWS_LIST,
    payload: {
        newsList
    }
})

export const fetchNews = () => {
    return (dispatch, getState) => {
        dispatch(setLoadingStatus());
        fetch(API_URL_SPACEX)
            .then(response => {
                if (!response.ok || response.status !== 200) {
                    throw Error("Something went wrong!");
                }
                return response.json();
            })
            .then(
                (resJson) => {
                    dispatch(setNewsList(resJson));
                    dispatch(setIdleStatus());
                },
                (er) => {
                    // setIsLoaded(false);
                    dispatch(setErrorStatus());
                }
            );
    }
}

// const loadData = () => {
//     setIsLoaded(true);
//     fetch(API_URL_SPACEX)
//         .then(response => {
//             if (!response.ok || response.status !== 200) {
//                 throw Error("Something went wrong!");
//             }
//             return response.json();
//         })
//         .then(
//             (resJson) => {
//                 setIsLoaded(false);
//                 setNewsList(resJson);
//             },
//             (er) => {
//                 setIsLoaded(false);
//                 setError(true);
//             }
//         );
// }