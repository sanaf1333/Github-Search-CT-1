import { useState, useRef, useCallback, useEffect } from "react";
function useInfiniteScroll() {
  const loadMoreRef = useRef(null);
  const [isInter, setIsInter] = useState(false);
  const handleObserver = useCallback((entries) => { //usecallback parameters
    const [target] = entries;
    if (target.isIntersecting ) {
      setIsInter(true);
    }
    else{
      setIsInter(false);
    }
  });

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);//study

  return { loadMoreRef, isInter };
}

export default useInfiniteScroll;
