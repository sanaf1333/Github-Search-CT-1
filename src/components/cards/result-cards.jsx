import React from "react";
import { Row, Col, Typography, Layout } from "antd";
import transformAPIResponse from "@helpers/transform-api-response.js";
import LoadingCardSkeleton from "./loading-card-skeleton.jsx";
import { STATUSES } from "@redux-store/reducers/github-search-API-slice";
const { Text } = Typography;
const ResultCards = ({
  results,
  CardLayoutComponent,
  resultCount,
  loadMoreRef,
  dropdownValue,
  status,
}) => {
  return (
    <Layout>
      {results && (
        <Row gutter={[10, 10]} justify="center">
          {results.map((cardData) => (
            <Layout style={{ padding: "25px" }} key={cardData.id}>
              <Col xs={12} sm={12} md={8} lg={6}>
                <CardLayoutComponent
                  {...transformAPIResponse(cardData, dropdownValue)}
                />
              </Col>
            </Layout>
          ))}
        </Row>
      )}
      {status === STATUSES.LOADING && <LoadingCardSkeleton />}
      {status != STATUSES.LOADING && <div ref={loadMoreRef}></div>}
      {status === STATUSES.SUCCESS && <Text strong>NO RESULTS FOUND</Text>}
      {status != STATUSES.LOADING && <div ref={loadMoreRef}></div>}
      {results && results.length > 0 && results.length === resultCount && (
        <Text strong>NO MORE RESULTS</Text>
      )}
      {status === STATUSES.ERROR && (
        <Text strong>OOPS! Something went wrong.</Text>
      )}
    </Layout>
  );
};

export default ResultCards;
