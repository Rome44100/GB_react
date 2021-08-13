import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/actions/news";
import { NEWS_REQUEST_STATUS } from "../../store/reducers/getNews"

export default function Spacenews() {

    const { status, list } = useSelector(state => state.news);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchNews());
    });

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