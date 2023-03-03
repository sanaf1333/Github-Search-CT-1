import React, { useRef,useEffect, useState,memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConfigProvider, Row, Col } from 'antd';
import { Typography } from 'antd';
import LoadingCardSkeleton from './loading-card-skeleton.jsx';
import CardLayout from './card-skeleton/card-layout-user.jsx';
import CardLayoutIssue from './card-skeleton/card-layout-issue.jsx';
import CardLayoutRepos from './card-skeleton/card-layout-repos.jsx';
import useInfiniteScroll from '../../hooks/infinite-scroll-hook.jsx';
const { Title, Text } = Typography;
const ResultCards = () => {
  
  //const [searchResults, setSearchResults]=useState([]);
  const { data: results, status, pageNumber, URL, resultCount } = useSelector((state) => state.result);
  
  const dropdownValue = useSelector((state) => state.search.dropdownValue);
  const dispatch = useDispatch();
  /*useEffect(() => {
    const newData = [...searchResults, ...results]; // combine old and new data
    setSearchResults(newData); // update the state with the new data
  }, [pageNumber]);*/
  
  
  const { loadMoreRef, isInter } = useInfiniteScroll();
 
  const cardLayoutMap = {
    repositories: CardLayoutRepos,
    issues: CardLayoutIssue,
    default: CardLayout,
  };

  
  if (status === 'error') {
    return <Title level={4}>Oops! Something went wrong.</Title>;
  }

  const CardLayoutComponent =
    cardLayoutMap[dropdownValue] || cardLayoutMap.default;

  return (
    <div>
      {<div>
        <Row gutter={[10, 10]} justify="center">
          {results.map((cardData) => (           
            <div style={{ padding: '25px' }} key={cardData.id}>
              <Col xs={12} sm={12} md={8} lg={6}>
                <CardLayoutComponent {...cardData} />
              </Col>
            </div>
          ))}
        </Row> 
      </div>}
      {status!="loading" && <div ref={loadMoreRef}></div>}
      {results.length>0 && results.length===resultCount && <Text strong>NO MORE RESULTS</Text>}
      
    </div>
  );
};

export default ResultCards;
