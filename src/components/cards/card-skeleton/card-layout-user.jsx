import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Typography } from "antd";
const { Link,Text } = Typography;
import { Suspense, lazy } from "react";
const LazyImage = React.lazy(() => import("../user-card-image.jsx"));

export default function CardLayout(props) {
  console.log(props);
  const {
    login: Name,
    followersURL: Followers,
    followingURL: Following,
    avatarURL: AvatarUrl,
    url: Email,
    htmlURL: Profile,
  } = props;

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
            <LazyImage src={AvatarUrl} alt={Name} />
          </Suspense>
        }
      >
        <Meta
          title={name}
          description={
            <div>
              <p><Text strong>Followers:</Text>{Followers} </p>
              <p><Text strong>Following:</Text>{Following} </p>
              <p><Text strong>Email:</Text>{Email} </p>
              <p><Text strong>Profile URL:</Text> <Link target="_blank" href={Profile}>{Profile}</Link> </p>
            </div>
          }
        />
      </Card>
    </div>
  );
}
