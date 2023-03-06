import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Typography } from "antd";
const { Link,Text } = Typography;
import { Suspense, lazy } from "react";
const LazyImage = React.lazy(() => import("@components/cards/user-card-image.jsx"));

export default function CardLayout(props) {

  return (
    <div>
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
            <LazyImage src={props.avatarURL} alt={props.login} />
          </Suspense>
        }
      >
        <Meta
          title={props.login}
          description={
            <div>
              <p><Text strong>Followers:</Text>{props.followersURL} </p>
              <p><Text strong>Following:</Text>{props.followingURL} </p>
              <p><Text strong>Email:</Text>{props.url} </p>
              <p><Text strong>Profile URL:</Text> <Link target="_blank" href={props.htmlURL}>{props.htmlURL}</Link> </p>
            </div>
          }
        />
      </Card>
    </div>
  );
}
