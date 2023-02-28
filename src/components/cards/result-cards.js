import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STATUSES } from "../../redux-store/reducers/result-slice";
import CardLayout from "./card-skeleton/card-layout-user";
import CardLayoutIssue from "./card-skeleton/card-layout-issue";
import CardLayoutRepos from "./card-skeleton/card-layout-repos";
import { ConfigProvider, Row, Col, Layout } from "antd";
import { Typography } from "antd";
const { Title, Text } = Typography;
import CardSkeleton from "./loading-skeleton";
const ResultCards = () => {
  const [visibleResults, setVisibleResults] = useState(12);
  const { data: results, status } = useSelector((state) => state.result);
  const dropdownValue = useSelector((state) => state.search.dropdownValue);
  console.log(dropdownValue);
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
    return <CardSkeleton />;
  }

  if (status === STATUSES.ERROR) {
    return <Title level={4}>Oops! Something went wrong.</Title>;
  }

  if (dropdownValue === "repositories") {
    return (
      <ConfigProvider>
        <Row gutter={[10, 10]} justify="center">
          {results.slice(0, visibleResults).map((comment) => (
            <div style={{ padding: "25px" }}>
              <Col key={comment.id} xs={12} sm={12} md={8} lg={6}>
                {CardLayoutRepos(comment)}
              </Col>
            </div>
          ))}
        </Row>
      </ConfigProvider>
    );
  }

  if (dropdownValue === "issues") {
    return (
      <ConfigProvider>
        <Row gutter={[10, 10]} justify="center">
          {results.slice(0, visibleResults).map((comment) => (
            <div style={{ padding: "25px" }}>
              <Col key={comment.id} xs={12} sm={12} md={8} lg={6}>
                {CardLayoutIssue(comment)}
              </Col>
            </div>
          ))}
        </Row>
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider>
      <Row gutter={[10, 10]} justify="center">
        {results.slice(0, visibleResults).map((comment) => (
          <div style={{ padding: "25px" }}>
            <Col key={comment.id} xs={12} sm={12} md={8} lg={6}>
              {CardLayout(comment)}
            </Col>
          </div>
        ))}
      </Row>
    </ConfigProvider>
  );
};

export default ResultCards;
