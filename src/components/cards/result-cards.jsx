import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { STATUSES } from "../../redux-store/reducers/result-slice.jsx";
import { ConfigProvider, Row, Col } from "antd";
import { Typography } from "antd";
import LoadingCardSkeleton from "./loading-card-skeleton.jsx";
import CardLayout from "./card-skeleton/card-layout-user.jsx";
import CardLayoutIssue from "./card-skeleton/card-layout-issue.jsx";
import CardLayoutRepos from "./card-skeleton/card-layout-repos.jsx";

const { Title } = Typography;

const ResultCards = () => {
  const [visibleResults, setVisibleResults] = useState(12);
  const { data: results, status } = useSelector((state) => state.result);
  const dropdownValue = useSelector((state) => state.search.dropdownValue);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setVisibleResults((prevCount) => prevCount + 12);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardLayoutMap = {
    repositories: CardLayoutRepos,
    issues: CardLayoutIssue,
    default: CardLayout,
  };

  if (status === STATUSES.LOADING) {
    return <LoadingCardSkeleton />;
  }

  if (status === STATUSES.ERROR) {
    return <Title level={4}>Oops! Something went wrong.</Title>;
  }

  const CardLayoutComponent =
    cardLayoutMap[dropdownValue] || cardLayoutMap.default;

  return (
    <ConfigProvider>
      <Row gutter={[10, 10]} justify="center">
        {results.slice(0, visibleResults).map((cardData) => (
          <div style={{ padding: "25px" }} key={cardData.id}>
            <Col xs={12} sm={12} md={8} lg={6}>
              <CardLayoutComponent {...cardData} />
            </Col>
          </div>
        ))}
      </Row>
    </ConfigProvider>
  );
};

export default ResultCards;
