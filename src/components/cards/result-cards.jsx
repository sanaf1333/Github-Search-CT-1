import React, { useRef, useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ConfigProvider, Row, Col } from "antd";
import { Typography } from "antd";
import DestructAPIResponse from "../../helpers/destruct-api-response.js";
import LoadingCardSkeleton from "./loading-card-skeleton.jsx";
import CardLayout from "./card-skeleton/card-layout-user.jsx";
import CardLayoutIssue from "./card-skeleton/card-layout-issue.jsx";
import CardLayoutRepos from "./card-skeleton/card-layout-repos.jsx";
import useInfiniteScroll from "../../hooks/use-infinite-scroll-hook.jsx";
import {
  setPageNumber,
  fetchProducts,
  STATUSES,
} from "../../redux-store/reducers/result-slice.jsx";
const { Title, Text } = Typography;
const ResultCards = () => {
  const {
    data: results,
    status,
    pageNumber,
    URL,
    resultCount,
  } = useSelector((state) => state.result);

  const dropdownValue = useSelector((state) => state.search.dropdownValue);
  const dispatch = useDispatch();

  const fetchData = async () => {
    console.log("fetchdata");
    dispatch(setPageNumber(pageNumber + 1));
    dispatch(fetchProducts());
  };
  const { loadMoreRef, isInter } = useInfiniteScroll(fetchData);

  const cardLayoutMap = {
    repositories: CardLayoutRepos,
    issues: CardLayoutIssue,
    default: CardLayout,
  };

  if (status === STATUSES.ERROR) {
    return <Title level={4}>Oops! Something went wrong.</Title>;
  }

  const CardLayoutComponent =
    cardLayoutMap[dropdownValue] || cardLayoutMap.default;

  return (
    <div>
      {
        <div>
          <Row gutter={[10, 10]} justify="center">
            {results.map((cardData) => (
              <div style={{ padding: "25px" }} key={cardData.id}>
                <Col xs={12} sm={12} md={8} lg={6}>
                  <CardLayoutComponent
                    {...DestructAPIResponse(cardData, dropdownValue)}
                  />
                </Col>
              </div>
            ))}
          </Row>
        </div>
      }
      {status != "loading" && <div ref={loadMoreRef}></div>}
      {results.length > 0 && results.length === resultCount && (
        <Text strong>NO MORE RESULTS</Text>
      )}
    </div>
  );
};

export default ResultCards;
