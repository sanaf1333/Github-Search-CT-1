import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumber } from '../redux-store/reducers/result-slice.jsx';
import { fetchProducts } from '../redux-store/reducers/result-slice.jsx';
function useInfiniteScroll() {
  
  const { data: results, status, pageNumber, URL, resultCount } = useSelector((state) => state.result);
  
  const dispatch = useDispatch();
  const fetchData = async () => {
    console.log("fetchdata");
    dispatch(setPageNumber(pageNumber + 1));
    await dispatch(fetchProducts(URL));
  };
  const loadMoreRef = useRef(null);
  const [isInter,setIsInter]=useState(false);
  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting && pageNumber>0 && results.length<resultCount) {
      console.log("target is intersecting");
      console.log(status);
      setIsInter(true);
      fetchData();
    }
    
    
  });

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef, isInter };
}

export default useInfiniteScroll;