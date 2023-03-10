import React, { Suspense } from "react";
import { Card, Typography, Layout, Col, Row } from "antd";
const { Meta } = Card;
const { Link, Text, Paragraph } = Typography;
const LazyImage = React.lazy(() =>
  import("@components/cards/user-card-image.jsx")
);

export default function CardLayout({
  avatarURL,
  login,
  followersURL,
  followingURL,
  url,
  htmlURL,
}) {
  return (
    <Layout>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <Suspense
            fallback={
              <img
                src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
                alt="dummy image"
              />
            }
          >
            <LazyImage src={avatarURL} alt={login} />
          </Suspense>
        }
      >
        <Meta
          title={login}
          description={
            <Col>
              <Row>
                <Paragraph>
                  <Text strong>Followers: </Text>
                  {followersURL}
                </Paragraph>
              </Row>
              <Row>
                <Paragraph>
                  <Text strong>Following: </Text>
                  {followingURL}
                </Paragraph>
              </Row>
              <Row>
                <Paragraph>
                  <Text strong>Email: </Text>
                  {url}
                </Paragraph>
              </Row>
              <Row>
                <Paragraph>
                  <Text strong>Profile URL: </Text>
                  <Link target="_blank" href={htmlURL}>
                    {htmlURL}
                  </Link>
                </Paragraph>
              </Row>
            </Col>
          }
        />
      </Card>
    </Layout>
  );
}
