import React from "react";
import { Row, Col, Typography, Layout } from "antd";
import DestructAPIResponse from "@helpers/destruct-api-response.js";
import LoadingCardSkeleton from "./loading-card-skeleton.jsx";
import { STATUSES } from "@redux-store/reducers/get-API-results.js";
const { Text } = Typography;
const ResultCards = ({
  results,
  CardLayoutComponent,
  resultCount,
  loadMoreRef,
  dropdownValue,
  status,
  pageNumber,
}) => {
  return (
    <Layout>  
      <Row gutter={[10, 10]} justify="center">
        {results.map((cardData) => (
          <Layout style={{ padding: "25px" }} key={cardData.id}>
            <Col xs={12} sm={12} md={8} lg={6}>
              <CardLayoutComponent
                {...DestructAPIResponse(cardData, dropdownValue)}
              />
            </Col>
          </Layout>
        ))}
      </Row>
      {status !== "loading" && <div ref={loadMoreRef}></div>}
      {status === STATUSES.LOADING && <LoadingCardSkeleton />}
      {status === STATUSES.SUCCESS && <Text strong>NO RESULTS FOUND</Text>}
      {status != STATUSES.LOADING && <div ref={loadMoreRef}></div>}
      {results.length > 0 && results.length === resultCount && (
        <Text strong>NO MORE RESULTS</Text>
      )}
      {pageNumber > 1 && status === STATUSES.ERROR && (
        <Text strong>OOPS! Something went wrong.</Text>
      )}
    </Layout>
  );
};

export default ResultCards;
