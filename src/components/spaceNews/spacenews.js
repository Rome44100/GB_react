import { Button } from "@material-ui/core";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL_SPACEX } from "../../constants";
import { fetchNews } from "../../store/actions/news";
import { NEWS_REQUEST_STATUS } from "../../store/reducers/getNews"

export default function Spacenews() {
    // const [ error, setError ] = useState(false);
    // const [ isLoaded, setIsLoaded ] = useState(false);
    // const [ newsList, setNewsList ] = useState([]);

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

    const { status, list } = useSelector(state => state.news);

    const dispatch = useDispatch();

    React.useEffect(() => {
        // loadData();
        dispatch(fetchNews());
    }, []);

    const loadData = () => dispatch(fetchNews());

    const header = <div>
        <h3>Space News!</h3>
        <Button onClick={ loadData }>Load Space News!</Button>
        </div>;

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <>
                { header }
                <div>Loading...</div>
            </>
    }

    if (status === NEWS_REQUEST_STATUS.ERROR) {
        return <>
            { header }
            <div>Error!</div>
        </>
    } else {
        return (
          <>
          { header }
          <ul>{ list.map((el) => (
              <li key={ el.id }>{ el.title }</li>
          )) }</ul>
        </>
        )
    }
}