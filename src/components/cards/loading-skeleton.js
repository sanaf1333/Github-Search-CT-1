import React from "react";
import { Col,Row,Skeleton } from "antd";
const CardSkeleton = () => {
    return ( 
        <div>
        <Row gutter={[20, 20]} justify="center">
          <Col xs={12} sm={12} md={8} lg={6}>
            <Skeleton.Avatar active size={200} shape="square" />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6}>
            <Skeleton.Avatar active size={200} shape="square" />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6}>
            <Skeleton.Avatar active size={200} shape="square" />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6}>
            <Skeleton.Avatar active size={200} shape="square" />
          </Col>
        </Row>
      </div>
     );
}
 
export default CardSkeleton;