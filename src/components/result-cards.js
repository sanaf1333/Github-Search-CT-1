import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { STATUSES } from '../redux-store/resultSlice';
import CardLayout from "./CardLayout";
const ResultCards = () => {
  const [visibleResults, setVisibleResults] = useState(12); 
  const { data: results, status } = useSelector((state) => state.result);
  const { url, pageNumber } = useSelector((state) => state.url);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setVisibleResults((prevCount) => prevCount + 10); // add 10 more results when the user scrolls to the bottom of the page
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Oops, something went wrong!</h2>;
  }

  return (
    <div className="array-container">
      {results.slice(0, visibleResults).map((comment) => (
        <div key={comment.id}>{CardLayout(comment)}</div>
      ))}
    </div>
  );
};

export default ResultCards;
