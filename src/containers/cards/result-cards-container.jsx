import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "antd";
import CardLayout from "@components/cards/card-skeleton/card-layout-user.jsx";
import CardLayoutIssue from "@components/cards/card-skeleton/card-layout-issue.jsx";
import CardLayoutRepos from "@components/cards/card-skeleton/card-layout-repos.jsx";
import useInfiniteScroll from "@hooks/use-infinite-scroll-hook.js";
import ResultCards from "@components/cards/result-cards.jsx";
import {
  setPageNumber,
  fetchProducts,
  STATUSES,
} from "../../redux-store/reducers/get-API-results";
const { Title } = Typography;

const ResultCardsContainer = () => {
  const {
    data: results,
    status,
    pageNumber,
    searchKeyword,
    resultCount,
    pageCount,
  } = useSelector((state) => state.result);

  const { searchInput, dropdownValue } = useSelector((state) => state.search);
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

  if (status === STATUSES.ERROR && pageNumber <= 1) {
    return <Title level={4}>Oops! Something went wrong.</Title>;
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
      pageNumber={pageNumber}
    />
  );
};

export default ResultCardsContainer;
