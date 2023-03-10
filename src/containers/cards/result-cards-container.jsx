import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardLayout from "@components/cards/card-skeleton/card-layout-user.jsx";
import CardLayoutIssue from "@components/cards/card-skeleton/card-layout-issue.jsx";
import CardLayoutRepos from "@components/cards/card-skeleton/card-layout-repos.jsx";
import useInfiniteScroll from "@hooks/use-infinite-scroll-hook.js";
import ResultCards from "@components/cards/result-cards.jsx";
import {
  setPageNumber,
  fetchProducts,
  selectResults,
  selectPageCount,
  selectPageNumber,
  selectResultCount,
  selectStatus,
  selectSearchKeyword,
} from "@redux-store/reducers/github-search-API-slice";
import {selectSearchInput, selectDropdownValue} from "@redux-store/reducers/search-and-dropdown-slice.js";
const ResultCardsContainer = () => {
  const results = useSelector(selectResults);
  const pageCount = useSelector(selectPageCount);
  const pageNumber = useSelector(selectPageNumber);
  const resultCount = useSelector(selectResultCount);
  const status = useSelector(selectStatus);
  const searchKeyword = useSelector(selectSearchKeyword);
  const searchInput = useSelector(selectSearchInput);
  const dropdownValue = useSelector(selectDropdownValue);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(setPageNumber(pageNumber + 1));
    dispatch(fetchProducts(searchKeyword, pageCount, pageNumber + 1));
  };
  const { loadMoreRef, isInter } = useInfiniteScroll();
  useEffect(() => {
    if (
      isInter &&
      pageNumber >= 0 &&
      results &&
      results.length < resultCount &&
      searchInput.length >= 3
    ) {
      fetchData();
    }
  }, [isInter]);
  const cardLayoutMap = {
    repositories: CardLayoutRepos,
    issues: CardLayoutIssue,
    default: CardLayout,
  };

  if (searchInput.length < 3) {
    return null;
  }

  const CardLayoutComponent =
    cardLayoutMap[dropdownValue] || cardLayoutMap.default;

  return (
    <ResultCards
      results={results}
      CardLayoutComponent={CardLayoutComponent}
      resultCount={resultCount}
      loadMoreRef={loadMoreRef}
      dropdownValue={dropdownValue}
      status={status}
    />
  );
};

export default ResultCardsContainer;
