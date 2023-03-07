import React ,{Suspense} from "react";
import { Card,Typography,Layout } from "antd";
const { Meta } = Card;
const { Link,Text } = Typography; //how imports work 
const LazyImage = React.lazy(() => import("@components/cards/user-card-image.jsx"));
//single line imports react...,antd...

export default function CardLayout(props) {
  const {avatarURL,login,followersURL, followingURL,url,htmlURL}=props;
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
            <Layout style={{paddingRight:"5px", paddingLeft:"5px"}}>
              <p><Text strong>Followers:</Text>{followersURL} </p>
              <p><Text strong>Following:</Text>{followingURL} </p>
              <p><Text strong>Email:</Text>{url} </p>
              <p><Text strong>Profile URL:</Text> <Link target="_blank" href={htmlURL}>{htmlURL}</Link> </p>
              </Layout>
          }
        />
      </Card>
      </Layout>
  );
}
