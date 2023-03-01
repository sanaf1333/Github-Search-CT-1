import React from "react";
import { Col, Row, Skeleton } from "antd";

const LoadingCardSkeleton = () => {
  const skeletonCols = new Array(4).fill(null).map((_, index) => (
    <Col key={index} xs={12} sm={12} md={8} lg={6}>
      <Skeleton.Avatar active size={200} shape="square" />
    </Col>
  ));

  return (
    <div>
      <Row gutter={[20, 20]} justify="center">
        {skeletonCols}
      </Row>
    </div>
  );
};

export default LoadingCardSkeleton;
